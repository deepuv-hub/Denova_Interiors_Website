from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
from dotenv import load_dotenv
import csv
import os
import re
from datetime import datetime

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)

# Rate limiting: 5 requests per 15 minutes per IP
limiter = Limiter(
    app=app,
    key_func=get_remote_address,
    default_limits=["200 per day", "50 per hour"]
)

@app.route('/')
def home():
    return "Backend Running"

def validate_lead(data):
    """Validate form data"""
    errors = {}
    
    if not data.get('name', '').strip():
        errors['name'] = 'Name is required'
    
    phone = data.get('phone', '').strip()
    if not phone:
        errors['phone'] = 'Phone is required'
    elif not re.match(r'^[6-9]\d{9}$', phone):
        errors['phone'] = 'Invalid phone number'
    
    email = data.get('email', '').strip()
    if not email:
        errors['email'] = 'Email is required'
    elif not re.match(r'^[^\s@]+@[^\s@]+\.[^\s@]+$', email):
        errors['email'] = 'Invalid email'
    
    if not data.get('propertyType'):
        errors['propertyType'] = 'Property type required'
    
    pincode = data.get('pincode', '').strip()
    if not pincode:
        errors['pincode'] = 'Pincode is required'
    elif not re.match(r'^[0-9]{6}$', pincode):
        errors['pincode'] = 'Invalid pincode'
    
    if not data.get('possession'):
        errors['possession'] = 'Possession required'
    
    if not data.get('budget'):
        errors['budget'] = 'Budget required'
    
    return errors if errors else None

@app.route('/api/lead', methods=['POST'])
@limiter.limit("5 per 15 minutes")
def capture_lead():
    """Submit lead - Protected endpoint"""
    try:
        data = request.json
        
        # Validate input
        validation_errors = validate_lead(data)
        if validation_errors:
            return jsonify({
                "success": False,
                "errors": validation_errors
            }), 400
        
        # Extract data
        name = data.get('name', '').strip()
        phone = data.get('phone', '').strip()
        email = data.get('email', '').strip()
        property_type = data.get('propertyType', '')
        location = data.get('location', '').strip()
        possession = data.get('possession', '')
        budget = data.get('budget', '')
        source = data.get('source', 'Ads Landing Page')
        
        # Save to CSV
        file_exists = os.path.isfile('leads.csv')
        with open('leads.csv', mode='a', newline='', encoding='utf-8') as file:
            writer = csv.writer(file)
            
            if not file_exists:
                writer.writerow([
                    'Timestamp', 'Name', 'Phone', 'Email', 
                    'Property Type', 'Pincode', 'Possession', 
                    'Budget', 'Source', 'IP Address'
                ])
            
            writer.writerow([
                datetime.now().isoformat(),
                name,
                phone,
                email,
                property_type,
                location,
                possession,
                budget,
                source,
                request.remote_addr
            ])
        
        # Optional: Send to Google Sheets via webhook
        google_sheets_url = os.getenv('GOOGLE_SHEETS_URL')
        if google_sheets_url:
            try:
                import requests
                requests.post(google_sheets_url, json={
                    'name': name,
                    'phone': phone,
                    'email': email,
                    'propertyType': property_type,
                    'location': location,
                    'possession': possession,
                    'budget': budget,
                    'source': source,
                    'timestamp': datetime.now().isoformat(),
                }, timeout=5)
            except Exception as e:
                app.logger.error(f"Google Sheets error: {e}")
                # Don't fail the request if Google Sheets fails
        
        # Log submission
        app.logger.info(f"Lead submitted: {email} from {request.remote_addr}")
        
        return jsonify({
            "success": True,
            "message": "Form submitted successfully"
        }), 200
    
    except Exception as e:
        app.logger.error(f"Lead submission error: {e}")
        return jsonify({
            "success": False,
            "message": "Server error. Please try again."
        }), 500

@app.errorhandler(429)
def ratelimit_handler(e):
    """Handle rate limit exceeded"""
    return jsonify({
        "success": False,
        "message": "Too many requests. Please try again later."
    }), 429

if __name__ == '__main__':
    app.run(debug=True)
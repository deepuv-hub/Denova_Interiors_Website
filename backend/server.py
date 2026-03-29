from flask import Flask, request, jsonify
from flask_cors import CORS
import csv
import os

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return "Backend Running"

@app.route('/api/lead', methods=['POST'])
def capture_lead():
    data = request.json

    name = data.get('name')
    phone = data.get('phone')
    location = data.get('location')

    file_exists = os.path.isfile('leads.csv')

    with open('leads.csv', mode='a', newline='') as file:
        writer = csv.writer(file)

        if not file_exists:
            writer.writerow(['Name', 'Phone', 'Location'])

        writer.writerow([name, phone, location])

    return jsonify({"status": "success"})

if __name__ == '__main__':
    app.run(debug=True)
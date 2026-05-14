import fetch from 'node-fetch';
import rateLimit from 'express-rate-limit';

// Rate limiting: 5 requests per 15 minutes per IP
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: 'Too many forms submitted, please try again later',
  standardHeaders: true,
  legacyHeaders: false,
});

// Validation helper
const validateLead = (data) => {
  const errors = {};

  if (!data.name?.trim()) errors.name = 'Name is required';
  
  if (!data.phone?.trim()) {
    errors.phone = 'Phone is required';
  } else if (!/^[6-9]\d{9}$/.test(data.phone)) {
    errors.phone = 'Invalid phone number';
  }

  if (!data.email?.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Invalid email';
  }

  if (!data.propertyType) errors.propertyType = 'Property type required';
  
  if (!data.pincode?.trim()) {
    errors.pincode = 'Pincode is required';
  } else if (!/^[0-9]{6}$/.test(data.pincode)) {
    errors.pincode = 'Invalid pincode';
  }

  if (!data.possession) errors.possession = 'Possession required';
  if (!data.budget) errors.budget = 'Budget required';

  return Object.keys(errors).length === 0 ? null : errors;
};

// POST endpoint for form submissions
export const submitLead = [
  limiter, // Apply rate limiting
  async (req, res) => {
    try {
      const { name, phone, email, propertyType, pincode, possession, budget } = req.body;

      // Validate input
      const validationErrors = validateLead({
        name,
        phone,
        email,
        propertyType,
        pincode,
        possession,
        budget,
      });

      if (validationErrors) {
        return res.status(400).json({
          success: false,
          errors: validationErrors,
        });
      }

      // Call Google Sheets API (URL hidden in .env)
      const response = await fetch(process.env.GOOGLE_SHEETS_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          phone,
          email,
          propertyType,
          location: pincode,
          possession,
          budget,
          source: 'Ads Landing Page',
          timestamp: new Date().toISOString(),
          ip: req.ip,
        }),
      });

      // Log submission (optional - for analytics)
      console.log(`Lead submitted: ${email} from ${req.ip}`);

      return res.status(200).json({
        success: true,
        message: 'Form submitted successfully',
      });

    } catch (error) {
      console.error('Lead submission error:', error);
      return res.status(500).json({
        success: false,
        message: 'Server error. Please try again.',
      });
    }
  },
];

export default submitLead;

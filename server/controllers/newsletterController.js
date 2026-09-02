const { body, validationResult } = require('express-validator')
const Newsletter = require('../models/Newsletter')

// Validation rules
const newsletterValidation = [
  body('name')
    .trim()
    .notEmpty().withMessage('Name is required')
    .isLength({ max: 100 }).withMessage('Name too long'),
  body('email')
    .trim()
    .isEmail().withMessage('Invalid email address')
    .normalizeEmail(),
  body('restaurant')
    .optional()
    .trim()
    .isLength({ max: 150 }).withMessage('Restaurant name too long'),
]

// POST /api/newsletter
const subscribe = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: errors.array()[0].msg,
      errors: errors.array(),
    })
  }

  const { name, email, restaurant } = req.body
  const ip = req.ip || req.headers['x-forwarded-for']

  try {
    // Check if already subscribed
    const existing = await Newsletter.findOne({ email })
    if (existing) {
      return res.status(409).json({
        success: false,
        message: 'This email is already registered. Our team will be in touch soon!',
      })
    }

    const lead = await Newsletter.create({ name, email, restaurant, ip })

    console.log(`New lead: ${name} <${email}> — ${restaurant || 'N/A'}`)

    return res.status(201).json({
      success: true,
      message: 'Successfully subscribed! Our team will reach out within 24 hours.',
      id: lead._id,
    })
  } catch (err) {
    console.error('Newsletter subscribe error:', err)

    // Handle Mongoose duplicate key (race condition)
    if (err.code === 11000) {
      return res.status(409).json({
        success: false,
        message: 'This email is already registered.',
      })
    }

    return res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.',
    })
  }
}

// GET /api/newsletter (admin — list leads)
const getLeads = async (req, res) => {
  try {
    const leads = await Newsletter.find().sort({ createdAt: -1 }).select('-ip -__v')
    return res.json({ success: true, count: leads.length, data: leads })
  } catch (err) {
    console.error('Get leads error:', err)
    return res.status(500).json({ success: false, message: 'Server error' })
  }
}

module.exports = { subscribe, getLeads, newsletterValidation }

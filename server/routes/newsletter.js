const express = require('express')
const router = express.Router()
const {
  subscribe,
  getLeads,
  newsletterValidation,
} = require('../controllers/newsletterController')

// POST /api/newsletter — subscribe / lead capture
router.post('/', newsletterValidation, subscribe)

// GET /api/newsletter — list all leads (protect this in production!)
router.get('/', getLeads)

module.exports = router

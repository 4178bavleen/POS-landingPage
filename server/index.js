require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')

const newsletterRoutes = require('./routes/newsletter')

const app = express()
const PORT = process.env.PORT || 5000
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/foodadda'
const CORS_ORIGIN = process.env.CORS_ORIGIN || 'http://localhost:5173'
const NODE_ENV = process.env.NODE_ENV || 'development'

// ─── Middleware ───────────────────────────────────────────────────────────────
app.use(cors({
  origin: NODE_ENV === 'production' ? CORS_ORIGIN : true,
  credentials: true,
}))
app.use(express.json({ limit: '10kb' }))
app.use(express.urlencoded({ extended: true, limit: '10kb' }))

// ─── Health check ─────────────────────────────────────────────────────────────
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'foodAdda Landing API',
    timestamp: new Date().toISOString(),
    db: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
  })
})

// ─── Routes ───────────────────────────────────────────────────────────────────
app.use('/api/newsletter', newsletterRoutes)

// ─── Serve React build in production ──────────────────────────────────────────
if (NODE_ENV === 'production') {
  const clientBuild = path.join(__dirname, '..', 'client', 'dist')
  app.use(express.static(clientBuild))
  app.get('*', (req, res) => {
    res.sendFile(path.join(clientBuild, 'index.html'))
  })
}

// ─── 404 ──────────────────────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' })
})

// ─── Error handler ────────────────────────────────────────────────────────────
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(err.status || 500).json({
    success: false,
    message: NODE_ENV === 'production' ? 'Internal server error' : err.message,
  })
})

// ─── Connect DB & Start ───────────────────────────────────────────────────────
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log(`✅ MongoDB connected: ${MONGODB_URI}`)
    app.listen(PORT, () => {
      console.log(`🚀 foodAdda API running on http://localhost:${PORT}`)
      console.log(`🌍 Environment: ${NODE_ENV}`)
    })
  })
  .catch((err) => {
    console.error('❌ MongoDB connection failed:', err.message)
    process.exit(1)
  })

module.exports = app

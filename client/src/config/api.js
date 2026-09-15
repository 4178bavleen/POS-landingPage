/**
 * Global API and Application Configuration
 *
 * To customize for production:
 * 1. Set VITE_API_BASE_URL in your environment (.env file or deployment platform like Vercel)
 *    e.g. VITE_API_BASE_URL=https://api.yourdomain.com
 * 2. Or change the fallback value 'http://localhost:3012' below.
 */

const sanitizeUrl = (url) => (url ? url.replace(/\/+$/, '') : '')

// Backend API Base URL
export const API_BASE_URL = sanitizeUrl(
  import.meta.env.VITE_API_BASE_URL || 'http://localhost:3012'
)

// POS Dashboard / Login URL
export const POS_APP_URL = sanitizeUrl(
  import.meta.env.VITE_POS_APP_URL || 'http://localhost:5173'
)

// Branding Endpoint URL
export const BRANDING_API_URL = `${API_BASE_URL}/api/v1/auth/branding`

export default {
  API_BASE_URL,
  POS_APP_URL,
  BRANDING_API_URL,
}

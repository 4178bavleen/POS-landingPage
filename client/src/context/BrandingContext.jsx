import { createContext, useContext, useState, useEffect } from 'react'
import { API_BASE_URL } from '../config/api'
import defaultLogo from '../assets/logo.png'

const BrandingContext = createContext({
  logo: defaultLogo,
  brandName: 'Bhojan Bandhu',
  tagline: '',
  faviconUrl: '',
  branding: null,
  loading: true,
})

export function BrandingProvider({ children }) {
  const [branding, setBranding] = useState(null)
  const [logo, setLogo] = useState(defaultLogo)
  const [brandName, setBrandName] = useState('Bhojan Bandhu')
  const [tagline, setTagline] = useState('')
  const [faviconUrl, setFaviconUrl] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const endpoint = API_BASE_URL
      ? `${API_BASE_URL}/api/v1/auth/branding`
      : '/api/v1/auth/branding'

    fetch(endpoint)
      .catch(() => fetch('/api/v1/auth/branding'))
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json()
      })
      .then((res) => {
        if (res?.success && res?.data) {
          const d = res.data
          setBranding(d)

          // Fallbacks to handle various naming conventions
          const fetchedLogo = d.logo || d.logoUrl || d.logo_url
          if (fetchedLogo) {
            setLogo(fetchedLogo)
          }

          const fetchedName = d.brandName || d.brandname || d.restaurantName
          if (fetchedName) {
            setBrandName(fetchedName)
          }

          if (d.tagline) {
            setTagline(d.tagline)
          }

          const fetchedFavicon = d.faviconUrl || d.favicon
          if (fetchedFavicon) {
            setFaviconUrl(fetchedFavicon)
            // Update browser tab favicon dynamically if provided
            const link = document.querySelector("link[rel~='icon']")
            if (link) {
              link.href = fetchedFavicon
            }
          }
        }
      })
      .catch((err) => {
        console.log('Branding fetch note (using defaults):', err.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <BrandingContext.Provider
      value={{
        logo,
        brandName,
        tagline,
        faviconUrl,
        branding,
        loading,
      }}
    >
      {children}
    </BrandingContext.Provider>
  )
}

export function useBranding() {
  return useContext(BrandingContext)
}

export default BrandingContext

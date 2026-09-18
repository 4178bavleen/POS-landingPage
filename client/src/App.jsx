import { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import ScrollProgress from './components/ScrollProgress'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import FeaturesPage from './pages/FeaturesPage'
import { POS_APP_URL } from './config/api'
import { BrandingProvider } from './context/BrandingContext'

function POSLoginRedirect() {
  useEffect(() => {
    window.location.href = `${POS_APP_URL}/login`
  }, [])
  return null
}

function App() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const root = document.documentElement
    if (darkMode) {
      root.classList.add('dark')
      root.style.colorScheme = 'dark'
    } else {
      root.classList.remove('dark')
      root.style.colorScheme = 'light'
    }
  }, [darkMode])

  const bgColor = darkMode ? '#08090a' : '#f8fafc'
  const textColor = darkMode ? '#f1f5f9' : '#0f172a'

  return (
    <BrandingProvider>
      <div
        style={{ backgroundColor: bgColor, color: textColor, minHeight: '100vh' }}
        className="overflow-x-hidden transition-colors duration-300 relative"
      >
        <ScrollToTop />
        <ScrollProgress />
        <CustomCursor darkMode={darkMode} />
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/features" element={<FeaturesPage darkMode={darkMode} />} />
          <Route path="/why-bhojan-bandhu" element={<FeaturesPage darkMode={darkMode} />} />
          <Route path="/login" element={<POSLoginRedirect />} />
          <Route path="/register" element={<Navigate to="/#newsletter" replace />} />
          <Route path="/book-a-demo" element={<Navigate to="/#newsletter" replace />} />
          {/* Fallback route */}
          <Route path="*" element={<Home darkMode={darkMode} />} />
        </Routes>

        <Footer darkMode={darkMode} />
      </div>
    </BrandingProvider>
  )
}

export default App

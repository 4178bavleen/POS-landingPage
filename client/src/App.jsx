import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import ScrollProgress from './components/ScrollProgress'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import FeaturesPage from './pages/FeaturesPage'

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
        <Route path="/why-foodadda" element={<FeaturesPage darkMode={darkMode} />} />
        {/* Fallback route */}
        <Route path="*" element={<Home darkMode={darkMode} />} />
      </Routes>

      <Footer darkMode={darkMode} />
    </div>
  )
}

export default App

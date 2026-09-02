import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import BusinessPulse from './components/BusinessPulse'
import PromoShowcase from './components/PromoShowcase'
import Architecture from './components/Architecture'
import ProblemSolution from './components/ProblemSolution'
import Features from './components/Features'
import RoiCalculator from './components/RoiCalculator'
import HowItWorks from './components/HowItWorks'
import Comparison from './components/Comparison'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import ScrollProgress from './components/ScrollProgress'

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
      <ScrollProgress />
      <CustomCursor darkMode={darkMode} />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main>
        <Hero darkMode={darkMode} />
        <Stats darkMode={darkMode} />
        <PromoShowcase darkMode={darkMode} />
        <BusinessPulse darkMode={darkMode} />
        <Architecture darkMode={darkMode} />
        <div id="problem-solution">
          <ProblemSolution darkMode={darkMode} />
        </div>
        <Features darkMode={darkMode} />
        <div id="roi-calculator">
          <RoiCalculator darkMode={darkMode} />
        </div>
        <HowItWorks darkMode={darkMode} />
        <Comparison darkMode={darkMode} />
        <Pricing darkMode={darkMode} />
        <Testimonials darkMode={darkMode} />
        <FAQ darkMode={darkMode} />
        <Newsletter darkMode={darkMode} />
      </main>

      <Footer darkMode={darkMode} />
    </div>
  )
}

export default App

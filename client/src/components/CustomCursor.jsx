import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor({ darkMode }) {
  const [visible, setVisible] = useState(false)
  const [cursorType, setCursorType] = useState('default') // 'default' | 'pointer' | 'button' | 'view'
  const [cursorText, setCursorText] = useState('')

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  const smoothX = useSpring(mouseX, { damping: 25, stiffness: 250, mass: 0.5 })
  const smoothY = useSpring(mouseY, { damping: 25, stiffness: 250, mass: 0.5 })

  useEffect(() => {
    // Only enable on desktop with fine pointer
    if (window.matchMedia('(pointer: coarse)').matches) return

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      if (!visible) setVisible(true)

      // Detect interactive hover target
      const target = e.target.closest('button, a, input, [data-cursor]')
      if (target) {
        const customType = target.getAttribute('data-cursor')
        if (customType) {
          setCursorType(customType)
          setCursorText(target.getAttribute('data-cursor-text') || '')
        } else if (target.tagName === 'BUTTON' || target.tagName === 'A') {
          setCursorType('pointer')
          setCursorText('')
        } else {
          setCursorType('default')
          setCursorText('')
        }
      } else {
        setCursorType('default')
        setCursorText('')
      }
    }

    const handleMouseLeave = () => setVisible(false)
    const handleMouseEnter = () => setVisible(true)

    window.addEventListener('mousemove', handleMouseMove)
    document.body.addEventListener('mouseleave', handleMouseLeave)
    document.body.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.body.removeEventListener('mouseleave', handleMouseLeave)
      document.body.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [mouseX, mouseY, visible])

  if (!visible) return null

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-[999] overflow-hidden">
      {/* Follower Aura Circle */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: cursorType === 'pointer' ? 1.6 : cursorType === 'view' ? 2.4 : 1,
          opacity: 1,
        }}
        transition={{ duration: 0.2 }}
        className={`fixed w-8 h-8 rounded-full border border-[#C52033]/60 flex items-center justify-center transition-colors ${
          cursorType === 'pointer'
            ? 'bg-[#C52033]/15'
            : cursorType === 'view'
            ? 'bg-[#C52033]/90 text-white'
            : 'bg-transparent'
        }`}
      >
        {cursorText && (
          <span className="text-[8px] font-bold uppercase tracking-widest text-white">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Center Precise Dot */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: cursorType === 'pointer' ? 0.4 : 1,
        }}
        className="fixed w-1.5 h-1.5 rounded-full bg-[#C52033]"
      />
    </div>
  )
}

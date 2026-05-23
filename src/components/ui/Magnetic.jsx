import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function Magnetic({ children, range = 80, actionScale = 1.05 }) {
  const ref = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    if (!ref.current) return
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const centerX = left + width / 2
    const centerY = top + height / 2

    const distanceX = clientX - centerX
    const distanceY = clientY - centerY

    const distance = Math.hypot(distanceX, distanceY)
    if (distance < range) {
      // Proportional attraction (closer to center means more precise pull, outer range pulls gently)
      const pull = 0.35
      setPosition({ x: distanceX * pull, y: distanceY * pull })
    } else {
      setPosition({ x: 0, y: 0 })
    }
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 120, damping: 12, mass: 0.2 }}
      className="inline-block"
      whileHover={{ scale: actionScale }}
    >
      {children}
    </motion.div>
  )
}

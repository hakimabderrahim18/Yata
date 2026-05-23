import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Particles({ count = 20, color = 'rgba(245, 158, 11, 0.3)' }) {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const generated = Array.from({ length: count }).map((_, i) => {
      const size = Math.random() * 3 + 2 // 2px to 5px
      const duration = Math.random() * 20 + 20 // 20s to 40s (slow, immersive movement)
      const delay = Math.random() * -duration // negative delay dispersion
      const startX = Math.random() * 100 // percentage horizontally
      
      return {
        id: i,
        size,
        duration,
        delay,
        startX,
      }
    })
    setParticles(generated)
  }, [count])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 select-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.startX}%`,
            bottom: `-10px`,
            width: p.size,
            height: p.size,
            backgroundColor: color,
            boxShadow: p.size > 3 ? `0 0 8px ${color}` : 'none',
            filter: 'blur(0.5px)',
          }}
          animate={{
            y: [0, -1100], // float upwards beyond container heights
            x: [0, (p.id % 2 === 0 ? 1 : -1) * (Math.random() * 80 + 30)], // gentle organic sway
            opacity: [0, 0.7, 0.7, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: 'linear',
            delay: p.delay,
          }}
        />
      ))}
    </div>
  )
}

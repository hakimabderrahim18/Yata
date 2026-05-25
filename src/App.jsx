import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence, useSpring, useMotionValue } from 'framer-motion'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Services from './components/sections/Services'
import WhyUs from './components/sections/WhyUs'
import Coverage from './components/sections/Coverage'
import Gallery from './components/sections/Gallery'
import Partners from './components/sections/Partners'
import Contact from './components/sections/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/ui/WhatsAppButton'

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Coverage />
      <Gallery />
      <Partners />
      <Contact />
    </>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  // Custom Cursor states
  const [mouseCoords, setMouseCoords] = useState({ x: -100, y: -100 })
  const [cursorHovered, setCursorHovered] = useState(false)
  const [cursorVisible, setCursorVisible] = useState(false)

  // Spring physics for trailing cursor
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 30, stiffness: 220, mass: 0.6 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  // 1. Lenis Smooth Scroll effect
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  // 2. Preloader percentage countdown
  useEffect(() => {
    if (!loading) return
    let start = 0
    const duration = 2000
    const intervalTime = 25
    const step = 100 / (duration / intervalTime)

    const timer = setInterval(() => {
      start += step
      if (start >= 100) {
        start = 100
        clearInterval(timer)
        setTimeout(() => setLoading(false), 300)
      }
      setProgress(Math.round(start))
    }, intervalTime)

    return () => clearInterval(timer)
  }, [loading])

  // 3. Trailing cursor coordinate tracking and hover listening
  useEffect(() => {
    const onMouseMove = (e) => {
      setMouseCoords({ x: e.clientX, y: e.clientY })
      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)
      setCursorVisible(true)
    }

    const onMouseLeaveDoc = () => setCursorVisible(false)
    const onMouseEnterDoc = () => setCursorVisible(true)

    window.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseleave', onMouseLeaveDoc)
    document.addEventListener('mouseenter', onMouseEnterDoc)

    const handleHoverStart = () => setCursorHovered(true)
    const handleHoverEnd = () => setCursorHovered(false)

    // Dynamic hover targets attachment
    const addHoverListeners = () => {
      const targets = document.querySelectorAll('a, button, select, input, textarea, [role="button"]')
      targets.forEach((target) => {
        target.addEventListener('mouseenter', handleHoverStart)
        target.addEventListener('mouseleave', handleHoverEnd)
      })
    }

    addHoverListeners()

    // MutationObserver to attach hovers to newly loaded elements dynamically
    const observer = new MutationObserver(addHoverListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeMouseMove = window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseleave', onMouseLeaveDoc)
      document.removeEventListener('mouseenter', onMouseEnterDoc)
      observer.disconnect()
    }
  }, [cursorX, cursorY])

  return (
    <div className="min-h-screen bg-white">
      {/* Cinematic preloader */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="preloader"
            exit={{ opacity: 0, y: -50, filter: 'blur(20px)' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] bg-green-950 flex flex-col items-center justify-center select-none"
          >
            {/* Logo Drawing */}
            <div className="relative w-32 h-32 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-20 h-20 text-amber-400" fill="none" stroke="currentColor" strokeWidth="1.2">
                <motion.path
                  d="M14 18H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h8m6 10v-3.5a1.5 1.5 0 0 0-.5-1.1l-2.9-2.9A1.5 1.5 0 0 0 16.5 8H14v10M9 18a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm10 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM14 13h4.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.8, ease: "easeInOut" }}
                />
              </svg>
              {/* Pulse ambient backdrop */}
              <div className="absolute inset-0 bg-amber-400/10 blur-2xl rounded-full scale-75 animate-pulse" />
            </div>

            {/* Counter */}
            <div className="text-white font-extrabold text-4xl tracking-widest mt-8 flex items-baseline select-none">
              <span className="text-amber-400 inline-block font-mono min-w-[70px] text-right">
                {progress}
              </span>
              <span className="text-white/40 text-lg font-medium ml-1">%</span>
            </div>

            <div className="text-white/30 text-[10px] uppercase font-bold tracking-widest mt-3.5 select-none">
              YATA Distribution
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trailing Custom Cursor */}
      {cursorVisible && (
        <>
          {/* Core Dot */}
          <div
            className="pointer-events-none fixed z-[150] w-2 h-2 bg-amber-400 rounded-full transition-transform duration-100 ease-out hidden lg:block"
            style={{
              left: `${mouseCoords.x - 4}px`,
              top: `${mouseCoords.y - 4}px`,
              transform: cursorHovered ? 'scale(2.5)' : 'scale(1)',
              mixBlendMode: 'difference',
            }}
          />
          {/* Spring Ring */}
          <motion.div
            className="pointer-events-none fixed z-[150] border border-amber-400 rounded-full hidden lg:block"
            style={{
              x: cursorXSpring,
              y: cursorYSpring,
              width: cursorHovered ? '54px' : '32px',
              height: cursorHovered ? '54px' : '32px',
              backgroundColor: cursorHovered ? 'rgba(245, 158, 11, 0.08)' : 'rgba(245, 158, 11, 0)',
              borderColor: cursorHovered ? 'rgba(245, 158, 11, 0.8)' : 'rgba(245, 158, 11, 0.4)',
              boxShadow: cursorHovered ? '0 0 20px rgba(245, 158, 11, 0.4)' : 'none',
              transform: cursorHovered ? 'translate(-11px, -11px)' : 'none', // correct anchor shifts
            }}
          />
        </>
      )}

      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

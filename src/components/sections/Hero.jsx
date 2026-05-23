import { useState, useRef } from 'react'
import { useInView } from 'framer-motion'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import { useCountUp } from '../../hooks/useCountUp'
import Particles from '../ui/Particles'
import Magnetic from '../ui/Magnetic'

function StatCard({ value, suffix, label, start }) {
  const count = useCountUp(value, 2000, start)
  return (
    <div className="text-center">
      <div className="text-4xl lg:text-5xl font-extrabold text-white">
        {count}
        <span className="text-amber-400">{suffix}</span>
      </div>
      <div className="text-green-200 text-sm mt-1 font-medium">{label}</div>
    </div>
  )
}

export default function Hero() {
  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true })
  const { STATS, t, isRtl, logoSub } = useLanguage()

  // Cursor tracking coordinates
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const scrollDown = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden group/hero"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&q=80"
          alt="Entrepôt logistique YATA"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-green-950/95 via-green-900/88 to-green-800/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-green-950/80 via-transparent to-transparent" />
        <Particles count={35} color="rgba(245, 158, 11, 0.22)" />
      </div>

      {/* Dynamic Cursor Spotlight Overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-700"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(600px circle at ${coords.x}px ${coords.y}px, rgba(21, 128, 61, 0.12) 0%, rgba(245, 158, 11, 0.05) 50%, transparent 100%)`,
        }}
      />

      {/* Decorative grid pattern */}
      <div
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.4) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.4) 1px,transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/30 text-amber-300 text-sm font-semibold px-4 py-2 rounded-full mb-6"
          >
            <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
            {t('headlineBadge')}
          </motion.div>

          {/* Title - Staggered Springs */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 text-start">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 90, damping: 13, delay: 0.3 }}
              className="block"
            >
              YATA
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 90, damping: 13, delay: 0.45 }}
              className="block text-gradient bg-gradient-to-r from-amber-400 to-green-400"
              style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
            >
              {logoSub}
            </motion.span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 80, damping: 14, delay: 0.6 }}
            className="text-xl lg:text-2xl text-green-100/90 leading-relaxed mb-10 max-w-2xl text-start"
          >
            {t('heroSubtitleStart')}
            <span className="text-amber-300 font-semibold">{t('heroSubtitleHighlight')}</span>
            {t('heroSubtitleEnd')}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="flex flex-wrap gap-4"
          >
            <Magnetic range={80} actionScale={1.04}>
              <button
                onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-bold px-8 py-4 rounded-2xl transition-all shadow-lg shadow-amber-500/30 hover:shadow-amber-400/40 text-base cursor-pointer"
              >
                {t('ourServices')}
                <ArrowRight size={18} className={isRtl ? 'rotate-180' : ''} />
              </button>
            </Magnetic>
            <Magnetic range={80} actionScale={1.04}>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-8 py-4 rounded-2xl transition-all backdrop-blur-sm text-base cursor-pointer"
              >
                {t('contactUs')}
              </button>
            </Magnetic>
          </motion.div>
        </div>

        {/* Stats */}
        <div ref={statsRef} className="mt-20 pt-10 border-t border-white/15">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {STATS.map((s, i) => (
              <StatCard key={i} {...s} start={statsInView} />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60 hover:text-white flex flex-col items-center gap-1 transition-colors cursor-pointer"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        aria-label={t('scroll')}
      >
        <span className="text-xs font-medium tracking-widest uppercase">{t('scroll')}</span>
        <ChevronDown size={20} />
      </motion.button>
    </section>
  )
}

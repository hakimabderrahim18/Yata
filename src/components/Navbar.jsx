import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#hero')
  const { NAV_LINKS, language, setLanguage, isRtl, logoSub, requestQuote } = useLanguage()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setActive(href)
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-green-950/97 backdrop-blur-sm shadow-lg shadow-green-950/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <button
          onClick={() => handleNav('#hero')}
          className="flex items-center gap-2.5 group"
          aria-label="YATA Distribution"
        >
          <svg viewBox="0 0 100 100" className="w-10 h-10 shrink-0 group-hover:scale-105 transition-transform duration-300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="emeraldGradNav" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#047857" />
              </linearGradient>
              <linearGradient id="goldGradNav" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#d97706" />
              </linearGradient>
              <linearGradient id="silverGradNav" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="94%" stopColor="#94a3b8" />
              </linearGradient>
              <linearGradient id="ringGradNav" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="50%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#047857" />
              </linearGradient>
            </defs>
            
            {/* Outer elegant rings */}
            <circle cx="50" cy="50" r="46" stroke="url(#ringGradNav)" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.7" />
            <circle cx="50" cy="50" r="41" stroke="url(#ringGradNav)" strokeWidth="2.5" />
            
            {/* Leaf wrapping background */}
            <path d="M 28 58 C 24 38, 38 22, 68 26 C 54 36, 46 48, 28 58 Z" fill="url(#emeraldGradNav)" />
            <path d="M 38 42 C 34 28, 48 18, 72 22 C 60 30, 52 38, 38 42 Z" fill="url(#emeraldGradNav)" opacity="0.4" />

            {/* Sleek Geometric Gold Truck inside the leaf */}
            {/* Cargo bed */}
            <path d="M 36 44 L 56 44 L 56 54 L 36 54 Z" fill="url(#goldGradNav)" rx="1" />
            {/* Cargo leaf vein lines */}
            <path d="M 38 49 Q 47 47 54 49" stroke="#047857" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            <path d="M 43 49 L 45 46" stroke="#047857" strokeWidth="1" strokeLinecap="round" />
            <path d="M 49 49 L 51 46" stroke="#047857" strokeWidth="1" strokeLinecap="round" />

            {/* Cabin */}
            <path d="M 59 45 L 66 45 C 68 45, 69 46, 70 48 L 72 51 C 73 52, 73 53, 73 54 L 59 54 Z" fill="url(#goldGradNav)" />
            {/* Windshield */}
            <path d="M 66 46 L 70 51 L 60 51 L 60 46 Z" fill="#047857" opacity="0.8" />
            
            {/* Wheels */}
            <circle cx="43" cy="57" r="3.5" fill="url(#silverGradNav)" stroke="#1e293b" strokeWidth="1.5" />
            <circle cx="43" cy="57" r="1" fill="#1e293b" />
            <circle cx="65" cy="57" r="3.5" fill="url(#silverGradNav)" stroke="#1e293b" strokeWidth="1.5" />
            <circle cx="65" cy="57" r="1" fill="#1e293b" />
          </svg>
          <div className="leading-tight text-start">
            <span className="block text-white font-extrabold text-lg tracking-tight">YATA</span>
            <span className="block text-amber-400 text-[10px] font-semibold tracking-widest uppercase -mt-0.5">{logoSub}</span>
          </div>
        </button>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <button
                onClick={() => handleNav(href)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  active === href
                    ? 'text-amber-400'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {label}
                {active === href && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-4 bg-amber-400 rounded-full"
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA and Language Switcher */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Desktop Language Switcher */}
          <div className="flex items-center gap-1 bg-white/10 rounded-full p-1 border border-white/15 select-none">
            {['fr', 'ar'].map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`relative px-3 py-1 rounded-full text-xs font-bold uppercase transition-all duration-200 cursor-pointer ${
                  language === lang ? 'text-green-950 font-extrabold shadow-sm' : 'text-white/80 hover:text-white'
                }`}
              >
                {language === lang && (
                  <motion.span
                    layoutId="active-lang-desktop"
                    className="absolute inset-0 bg-amber-400 rounded-full z-0"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{lang}</span>
              </button>
            ))}
          </div>

          <button
            onClick={() => handleNav('#contact')}
            className="bg-amber-500 hover:bg-amber-400 text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors shadow-md cursor-pointer"
          >
            {requestQuote}
          </button>
        </div>

        {/* Mobile menu trigger + Switcher container */}
        <div className="flex items-center gap-3 lg:hidden">
          {/* Mini Switcher for mobile navbar */}
          <div className="flex items-center gap-1 bg-white/10 rounded-full p-0.5 border border-white/10 select-none">
            {['fr', 'ar'].map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`relative px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase transition-all duration-200 cursor-pointer ${
                  language === lang ? 'text-green-950 font-extrabold shadow-sm' : 'text-white/85'
                }`}
              >
                {language === lang && (
                  <motion.span
                    layoutId="active-lang-mobile-nav"
                    className="absolute inset-0 bg-amber-400 rounded-full z-0"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{lang}</span>
              </button>
            ))}
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-green-950 border-t border-green-800/50 overflow-hidden"
          >
            <ul className="px-4 py-4 space-y-1">
              {NAV_LINKS.map(({ label, href }, i) => (
                <motion.li
                  key={href}
                  initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <button
                    onClick={() => handleNav(href)}
                    className={`w-full text-start px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      active === href
                        ? 'bg-green-800 text-amber-400'
                        : 'text-white/80 hover:bg-green-800/60 hover:text-white'
                    }`}
                  >
                    {label}
                  </button>
                </motion.li>
              ))}

              <li className="pt-3">
                <button
                  onClick={() => handleNav('#contact')}
                  className="w-full bg-amber-500 hover:bg-amber-400 text-white font-semibold py-3 rounded-xl text-sm transition-colors cursor-pointer"
                >
                  {requestQuote}
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}


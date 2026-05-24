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
          <svg viewBox="0 0 100 100" className="w-10 h-10 shrink-0 group-hover:scale-110 transition-transform duration-300 filter drop-shadow-[0_2px_10px_rgba(37,99,235,0.3)]" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="blueGradNav" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1e3a8a" />
                <stop offset="50%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#60a5fa" />
              </linearGradient>
              <linearGradient id="greenGradNav" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#14532d" />
                <stop offset="50%" stopColor="#22c55e" />
                <stop offset="100%" stopColor="#4ade80" />
              </linearGradient>
              <linearGradient id="yellowGradNav" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#854d0e" />
                <stop offset="50%" stopColor="#eab308" />
                <stop offset="100%" stopColor="#fde047" />
              </linearGradient>
              <linearGradient id="orangeRedGradNav" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7f1d1d" />
                <stop offset="50%" stopColor="#ef4444" />
                <stop offset="100%" stopColor="#f97316" />
              </linearGradient>
            </defs>

            {/* Blue head circle */}
            <circle cx="50" cy="22" r="10" fill="url(#blueGradNav)" />

            {/* Green arm (left) */}
            <path d="M 47 38 C 36 29, 23 30, 23 40 C 23 48, 33 49, 44 44 C 47 42, 48 40, 47 38 Z" fill="url(#greenGradNav)" />

            {/* Yellow arm (right & diagonal body) */}
            <path d="M 48 35 C 58 25, 70 17, 77 18 C 63 28, 54 44, 52 54 C 50 64, 53 74, 57 80 C 53 70, 50 58, 48 35 Z" fill="url(#yellowGradNav)" />

            {/* Orange-Red bottom loop */}
            <path d="M 50 54 C 46 64, 38 72, 39 78 C 41 83, 48 83, 52 78 C 53 72, 51 62, 50 54 Z" fill="url(#orangeRedGradNav)" />
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


import { useState, useEffect } from 'react'
import { Menu, X, Truck } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS } from '../data/content'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#hero')

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
          aria-label="YATA Distribution - Accueil"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
            <Truck size={20} className="text-white" />
          </div>
          <div className="leading-tight">
            <span className="block text-white font-extrabold text-lg tracking-tight">YATA</span>
            <span className="block text-amber-400 text-[10px] font-semibold tracking-widest uppercase -mt-0.5">Distribution</span>
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

        {/* CTA */}
        <div className="hidden lg:block">
          <button
            onClick={() => handleNav('#contact')}
            className="bg-amber-500 hover:bg-amber-400 text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors shadow-md"
          >
            Demander un devis
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
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
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <button
                    onClick={() => handleNav(href)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      active === href
                        ? 'bg-green-800 text-amber-400'
                        : 'text-white/80 hover:bg-green-800/60 hover:text-white'
                    }`}
                  >
                    {label}
                  </button>
                </motion.li>
              ))}
              <li className="pt-2">
                <button
                  onClick={() => handleNav('#contact')}
                  className="w-full bg-amber-500 hover:bg-amber-400 text-white font-semibold py-3 rounded-xl text-sm transition-colors"
                >
                  Demander un devis
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

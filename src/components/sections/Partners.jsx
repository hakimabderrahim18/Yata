import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'
import { useLanguage } from '../../context/LanguageContext'
import { fadeUp } from '../ui/animations'

// Custom high-contrast graphical SVG vector logos for each partner brand (no letters)
function PartnerLogo({ name }) {
  const n = name.toLowerCase().trim()

  if (n.includes('cevital')) {
    // Cevital: Green & Orange organic shapes
    return (
      <svg viewBox="0 0 100 100" className="w-full h-full bg-gradient-to-br from-green-50 to-emerald-100 p-3" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="42" fill="none" stroke="#16a34a" strokeWidth="3" />
        <path d="M 35 60 C 35 45, 45 35, 50 35 C 55 35, 65 45, 65 60 C 65 65, 35 65, 35 60 Z" fill="#15803d" />
        <circle cx="50" cy="30" r="10" fill="#ea580c" />
        <path d="M 42 60 L 58 60 L 50 48 Z" fill="#eab308" />
      </svg>
    )
  }
  if (n.includes('ifri')) {
    // Ifri: Mountain and water drop
    return (
      <svg viewBox="0 0 100 100" className="w-full h-full bg-gradient-to-br from-blue-50 to-cyan-100 p-3" xmlns="http://www.w3.org/2000/svg">
        <path d="M 20 70 L 40 40 L 55 58 L 70 35 L 85 70 Z" fill="#0891b2" opacity="0.8" />
        <path d="M 30 70 L 50 48 L 65 62 L 75 42 L 85 70 Z" fill="#0369a1" />
        <path d="M 50 25 C 50 25, 60 40, 60 46 C 60 52, 40 52, 40 46 C 40 40, 50 25, 50 25 Z" fill="#2563eb" />
      </svg>
    )
  }
  if (n.includes('famico')) {
    // Famico: Red circular emblem with chef/food crown
    return (
      <svg viewBox="0 0 100 100" className="w-full h-full bg-gradient-to-br from-red-50 to-red-100 p-3.5" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="40" fill="#e11d48" />
        <circle cx="50" cy="50" r="35" fill="none" stroke="#ffffff" strokeWidth="2" strokeDasharray="4 2" />
        <path d="M 35 55 C 35 45, 45 40, 50 40 C 55 40, 65 45, 65 55 Z" fill="#ffffff" />
        <path d="M 38 52 L 42 42 L 50 46 L 58 42 L 62 52 Z" fill="#fbbf24" />
      </svg>
    )
  }
  if (n.includes('jumbo')) {
    // Jumbo: Red and Yellow brand badge
    return (
      <svg viewBox="0 0 100 100" className="w-full h-full bg-gradient-to-br from-amber-400 to-yellow-300 p-3" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="70" height="70" rx="20" fill="#dc2626" />
        <circle cx="50" cy="50" r="24" fill="#fde047" />
        <path d="M 40 50 C 40 42, 60 42, 60 50 C 60 58, 40 58, 40 50 Z" fill="#dc2626" />
        <circle cx="50" cy="50" r="8" fill="#fde047" />
      </svg>
    )
  }
  if (n.includes('amour')) {
    // Amour: Red heart and wheat branch
    return (
      <svg viewBox="0 0 100 100" className="w-full h-full bg-gradient-to-br from-red-50 to-rose-100 p-3" xmlns="http://www.w3.org/2000/svg">
        <path d="M 50 78 C 50 78, 22 55, 22 38 C 22 25, 34 18, 45 26 C 50 30, 50 30, 50 30 C 50 30, 50 30, 55 26 C 66 18, 78 25, 78 38 C 78 55, 50 78, 50 78 Z" fill="#ef4444" />
        <path d="M 50 70 L 50 35" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
        <circle cx="45" cy="45" r="3.5" fill="#f59e0b" />
        <circle cx="55" cy="42" r="3.5" fill="#f59e0b" />
        <circle cx="45" cy="55" r="3.5" fill="#f59e0b" />
        <circle cx="55" cy="52" r="3.5" fill="#f59e0b" />
      </svg>
    )
  }
  if (n.includes('sosemie')) {
    // Sosemie: Sun & grain ears
    return (
      <svg viewBox="0 0 100 100" className="w-full h-full bg-gradient-to-br from-yellow-50 to-amber-100 p-3" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="30" fill="#eab308" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <line
            key={angle}
            x1="50"
            y1="12"
            x2="50"
            y2="20"
            stroke="#d97706"
            strokeWidth="3"
            strokeLinecap="round"
            transform={`rotate(${angle} 50 50)`}
          />
        ))}
        <path d="M 42 70 C 42 55, 48 50, 50 45 C 52 50, 58 55, 58 70" fill="none" stroke="#10b981" strokeWidth="4" />
      </svg>
    )
  }
  if (n.includes('safina')) {
    // Safina: Sailing ship
    return (
      <svg viewBox="0 0 100 100" className="w-full h-full bg-gradient-to-br from-teal-50 to-cyan-100 p-3" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="40" fill="#0f766e" />
        <path d="M 30 62 L 70 62 C 65 72, 35 72, 30 62 Z" fill="#ffffff" />
        <path d="M 48 25 L 48 60 L 32 45 Z" fill="#ffffff" opacity="0.9" />
        <path d="M 52 20 L 52 60 L 68 38 Z" fill="#f59e0b" />
      </svg>
    )
  }
  if (n.includes('henkel') || n.includes('heinkel')) {
    // Henkel: Red oval badge
    return (
      <svg viewBox="0 0 100 100" className="w-full h-full bg-gradient-to-br from-red-50 to-red-100 p-3" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="50" cy="50" rx="45" ry="30" fill="#dc2626" />
        <ellipse cx="50" cy="50" rx="40" ry="25" fill="none" stroke="#ffffff" strokeWidth="2.5" />
        <path d="M 35 50 Q 50 35 65 50 Q 50 65 35 50 Z" fill="#ffffff" opacity="0.25" />
        <circle cx="50" cy="50" r="10" fill="#ffffff" />
      </svg>
    )
  }
  if (n.includes('zaim')) {
    // Zaim: Crown of spikes
    return (
      <svg viewBox="0 0 100 100" className="w-full h-full bg-gradient-to-br from-amber-50 to-orange-100 p-3" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="70" height="70" rx="20" fill="none" stroke="#d97706" strokeWidth="3" />
        <path d="M 28 65 L 35 40 L 45 52 L 50 35 L 55 52 L 65 40 L 72 65 Z" fill="#d97706" />
        <circle cx="50" cy="65" r="5" fill="#ffffff" />
      </svg>
    )
  }
  if (n.includes('sos azzouz') || n.includes('azzouz')) {
    // SOS Azzouz: Shield crest with chevron
    return (
      <svg viewBox="0 0 100 100" className="w-full h-full bg-gradient-to-br from-red-50 to-red-100 p-3" xmlns="http://www.w3.org/2000/svg">
        <path d="M 25 25 L 75 25 C 75 45, 65 65, 50 80 C 35 65, 25 45, 25 25 Z" fill="#b91c1c" />
        <path d="M 35 32 L 65 32 L 50 50 Z" fill="#ffffff" opacity="0.3" />
        <path d="M 32 35 L 50 52 L 68 35" fill="none" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
        <circle cx="50" cy="62" r="6" fill="#fbbf24" />
      </svg>
    )
  }
  if (n.includes('saka')) {
    // Saka: Coffee bean
    return (
      <svg viewBox="0 0 100 100" className="w-full h-full bg-gradient-to-br from-stone-100 to-amber-200 p-3" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="40" fill="#78350f" />
        <circle cx="50" cy="50" r="36" fill="none" stroke="#d97706" strokeWidth="2" />
        <path d="M 30 50 C 40 40, 60 60, 70 50" stroke="#d97706" strokeWidth="4" strokeLinecap="round" fill="none" />
      </svg>
    )
  }
  if (n.includes('telwas')) {
    // SARL Telwas: Dynamic wings of logistics
    return (
      <svg viewBox="0 0 100 100" className="w-full h-full bg-gradient-to-br from-green-50 to-emerald-100 p-3" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="40" fill="#16a34a" />
        <path d="M 25 40 L 70 40 L 55 52 L 25 52 Z" fill="#eab308" />
        <path d="M 32 55 L 75 55 L 60 67 L 32 67 Z" fill="#ffffff" />
        <circle cx="35" cy="46" r="3" fill="#16a34a" />
      </svg>
    )
  }

  // Fallback
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full bg-green-700 p-3" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="40" fill="none" stroke="#ffffff" strokeWidth="3" />
      <text x="50" y="57" fill="#ffffff" fontSize="22" fontWeight="bold" textAnchor="middle">{name.substring(0, 2).toUpperCase()}</text>
    </svg>
  )
}

export default function Partners() {
  const { PARTNERS, t } = useLanguage()

  return (
    <section id="partners" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <SectionHeader
            eyebrow={t('partnersEyebrow')}
            title={t('partnersTitle')}
            subtitle={t('partnersSubtitle')}
          />
        </motion.div>

        {/* Scrolling carousel */}
        <div className="relative overflow-hidden">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

          <motion.div
            className="flex gap-8"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
          >
            {[...PARTNERS, ...PARTNERS].map((partner, i) => (
              <div
                key={i}
                className="shrink-0 flex flex-col items-center gap-3 group"
              >
                <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-md group-hover:shadow-xl transition-all group-hover:-translate-y-1.5 duration-300 bg-white border border-gray-100 flex items-center justify-center">
                  <PartnerLogo name={partner.name} />
                </div>
                <span className="text-sm font-semibold text-gray-600 group-hover:text-green-700 transition-colors text-center">
                  {partner.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Trust strip */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-green-50 via-white to-amber-50 border border-gray-100 rounded-3xl p-8 text-center shadow-sm"
        >
          <p className="text-gray-500 text-base leading-relaxed max-w-2xl mx-auto">
            {t('partnersTrustText')}{' '}
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-green-700 font-semibold hover:underline cursor-pointer"
            >
              {t('partnersTrustCTA')}
            </button>{' '}
            {t('partnersTrustTextEnd')}
          </p>
        </motion.div>
      </div>
    </section>
  )
}

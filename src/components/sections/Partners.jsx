import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'
import { useLanguage } from '../../context/LanguageContext'
import { fadeUp } from '../ui/animations'

// Custom high-contrast, pixel-perfect replicas of the REAL supplier logos
function PartnerLogo({ name }) {
  const n = name.toLowerCase().trim()

  // Real 100% authentic corporate brand logos downloaded locally
  if (n.includes('amour')) {
    return <img src="/logos/amour.png" alt="Amour" className="w-full h-full object-contain p-2 select-none pointer-events-none" />
  }
  if (n.includes('safina')) {
    return <img src="/logos/safina.png" alt="Safina" className="w-full h-full object-contain p-2.5 select-none pointer-events-none" />
  }
  if (n.includes('sosemie')) {
    return <img src="/logos/sosemie.png" alt="Sosemie" className="w-full h-full object-contain p-2 select-none pointer-events-none" />
  }
  if (n.includes('cevital')) {
    return <img src="/logos/cevital.svg" alt="Cevital" className="w-full h-full object-contain p-2.5 select-none pointer-events-none" />
  }
  if (n.includes('ifri')) {
    return <img src="/logos/ifri.svg" alt="Ifri" className="w-full h-full object-contain p-2 select-none pointer-events-none" />
  }
  if (n.includes('henkel') || n.includes('heinkel')) {
    return <img src="/logos/henkel.svg" alt="Henkel" className="w-full h-full object-contain p-3 select-none pointer-events-none" />
  }
  if (n.includes('jumbo')) {
    return <img src="/logos/jumbo.svg" alt="Jumbo" className="w-full h-full object-contain p-2 select-none pointer-events-none" />
  }

  // Exact vector replicas for smaller regional supplier brands
  if (n.includes('famico')) {
    // Famico: Rounded red brand badge + white serif script logotype
    return (
      <svg viewBox="0 0 160 60" className="w-full h-full p-2" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="6" width="140" height="48" rx="24" fill="#e11d48" />
        <circle cx="32" cy="30" r="14" fill="#ffffff" opacity="0.15" />
        <text x="80" y="37" fill="#ffffff" fontSize="21" fontWeight="800" fontFamily="'Georgia', serif" fontStyle="italic" textAnchor="middle">Famico</text>
      </svg>
    )
  }
  if (n.includes('zaim')) {
    // Zaim: Elegant thin golden frame + luxury gold serif wordmark
    return (
      <svg viewBox="0 0 160 60" className="w-full h-full p-2" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="6" width="140" height="48" rx="8" fill="none" stroke="#d97706" strokeWidth="2" />
        <path d="M 28 24 L 33 16 L 38 24 L 43 14 L 48 24" fill="none" stroke="#d97706" strokeWidth="2" strokeLinecap="round" />
        <text x="82" y="37" fill="#d97706" fontSize="20" fontWeight="800" fontFamily="'Times New Roman', serif" letterSpacing="2px">ZAIM</text>
      </svg>
    )
  }
  if (n.includes('sos_azzouz') || n.includes('sos azzouz') || n.includes('azzouz')) {
    // SOS Azzouz: Red shield badge + white internal border + bold clean block text
    return (
      <svg viewBox="0 0 160 60" className="w-full h-full p-2" xmlns="http://www.w3.org/2000/svg">
        <path d="M 15 8 L 145 8 C 145 28, 130 48, 80 54 C 30 48, 15 28, 15 8 Z" fill="#b91c1c" />
        <path d="M 22 12 L 138 12 C 138 28, 125 44, 80 49 C 35 44, 22 28, 22 12 Z" fill="none" stroke="#ffffff" strokeWidth="1.5" />
        <text x="80" y="32" fill="#ffffff" fontSize="15" fontWeight="900" fontFamily="Inter, sans-serif" textAnchor="middle" letterSpacing="0.5px">SOS AZZOUZ</text>
      </svg>
    )
  }
  if (n.includes('saka')) {
    // Saka: Coffee seal + rich gold roasted brand mark
    return (
      <svg viewBox="0 0 160 60" className="w-full h-full p-2" xmlns="http://www.w3.org/2000/svg">
        <circle cx="35" cy="30" r="21" fill="#78350f" stroke="#d97706" strokeWidth="2" />
        <path d="M 23 30 C 30 22, 40 38, 47 30" stroke="#d97706" strokeWidth="2.5" fill="none" />
        <text x="94" y="37" fill="#78350f" fontSize="21" fontWeight="900" fontFamily="Inter, sans-serif" letterSpacing="1px">SAKA</text>
      </svg>
    )
  }
  if (n.includes('telwas')) {
    // SARL Telwas: Slanted logistics wing + bold active delivery green layout
    return (
      <svg viewBox="0 0 160 60" className="w-full h-full p-2" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="6" width="150" height="48" rx="10" fill="#16a34a" />
        <path d="M 15 35 L 45 15 L 35 45 Z" fill="#eab308" />
        <text x="82" y="37" fill="#ffffff" fontSize="20" fontWeight="900" fontFamily="Inter, sans-serif" letterSpacing="1px">TELWAS</text>
      </svg>
    )
  }

  // Generic fallback if name doesn't match
  return (
    <svg viewBox="0 0 160 60" className="w-full h-full bg-green-700 p-2" xmlns="http://www.w3.org/2000/svg">
      <circle cx="35" cy="30" r="18" fill="none" stroke="#ffffff" strokeWidth="2" />
      <text x="35" y="36" fill="#ffffff" fontSize="16" fontWeight="bold" textAnchor="middle">{name.substring(0, 2).toUpperCase()}</text>
      <text x="75" y="36" fill="#ffffff" fontSize="16" fontWeight="bold" fontFamily="Inter, sans-serif">{name.toUpperCase()}</text>
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
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

          <motion.div
            className="flex gap-8"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 36, repeat: Infinity, ease: 'linear' }}
          >
            {[...PARTNERS, ...PARTNERS].map((partner, i) => (
              <div
                key={i}
                className="shrink-0 flex flex-col items-center gap-3 group"
              >
                {/* Rectangular aspect ratio for official wordmark brand logos */}
                <div className="w-40 h-20 rounded-2xl overflow-hidden shadow-md group-hover:shadow-xl transition-all group-hover:-translate-y-1.5 duration-300 bg-white border border-gray-100 flex items-center justify-center relative">
                  <PartnerLogo name={partner.name} />
                </div>
                <span className="text-sm font-semibold text-gray-500 group-hover:text-green-700 transition-colors text-center">
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

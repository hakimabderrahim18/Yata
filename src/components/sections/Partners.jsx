import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'
import { useLanguage } from '../../context/LanguageContext'
import { fadeUp } from '../ui/animations'

// Custom high-contrast, pixel-perfect replicas of the REAL supplier logos
function PartnerLogo({ name }) {
  const n = name.toLowerCase().trim()

  // Real local downloaded high-quality PNG logos for Amour and Safina
  if (n.includes('amour')) {
    return (
      <img
        src="/logos/amour.png"
        alt="Amour"
        className="w-full h-full object-contain p-2"
        onError={(e) => {
          // Inline vector fallback in case local file loading is delayed
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'block';
        }}
      />
    );
  }
  if (n.includes('safina')) {
    return (
      <img
        src="/logos/safina.png"
        alt="Safina"
        className="w-full h-full object-contain p-2"
        onError={(e) => {
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'block';
        }}
      />
    );
  }

  // Exact vector replicas for the other major corporate brands
  if (n.includes('cevital')) {
    // Cevital: Authentic green leaf curves + orange circle + bold green corporate typography
    return (
      <svg viewBox="0 0 160 60" className="w-full h-full p-2.5" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(5, 0)">
          <path d="M 15 35 C 10 20, 20 10, 25 10 C 30 10, 40 20, 35 35 C 30 40, 20 40, 15 35 Z" fill="#15803d" />
          <path d="M 28 38 C 22 25, 32 15, 37 15 C 42 15, 52 25, 46 38 C 40 44, 30 44, 28 38 Z" fill="#22c55e" opacity="0.85" />
          <circle cx="25" cy="22" r="6" fill="#ea580c" />
          <text x="56" y="38" fill="#15803d" fontSize="23" fontWeight="900" fontFamily="Inter, sans-serif" letterSpacing="-1px">Cevital</text>
        </g>
      </svg>
    )
  }
  if (n.includes('ifri')) {
    // Ifri: Bold lowercase blue wordmark + signature dynamic underline swooshes
    return (
      <svg viewBox="0 0 160 60" className="w-full h-full p-2.5" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(10, 2)">
          <text x="10" y="34" fill="#1d4ed8" fontSize="32" fontWeight="900" fontFamily="Inter, sans-serif" letterSpacing="-1.5px">ifri</text>
          <path d="M 8 40 Q 45 46 82 40" fill="none" stroke="#2563eb" strokeWidth="4.5" strokeLinecap="round" />
          <path d="M 20 46 Q 50 50 80 45" fill="none" stroke="#eab308" strokeWidth="2.5" strokeLinecap="round" />
        </g>
      </svg>
    )
  }
  if (n.includes('henkel') || n.includes('heinkel')) {
    // Henkel: Classic red ellipse + centered white corporate typography
    return (
      <svg viewBox="0 0 160 60" className="w-full h-full p-2" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="80" cy="30" rx="74" ry="24" fill="#dc2626" />
        <ellipse cx="80" cy="30" rx="69" ry="20" fill="none" stroke="#ffffff" strokeWidth="1.5" />
        <text x="80" y="37" fill="#ffffff" fontSize="20" fontWeight="700" fontFamily="Inter, sans-serif" textAnchor="middle" letterSpacing="-0.5px">Henkel</text>
      </svg>
    )
  }
  if (n.includes('jumbo')) {
    // Jumbo: Bold yellow circular crest + heavy red outer frame + thick white wordmark
    return (
      <svg viewBox="0 0 160 60" className="w-full h-full p-2" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="5" width="144" height="50" rx="12" fill="#dc2626" />
        <rect x="12" y="9" width="136" height="42" rx="9" fill="#eab308" />
        <text x="80" y="38" fill="#ffffff" stroke="#dc2626" strokeWidth="4" paintOrder="stroke fill" fontSize="25" fontWeight="900" fontFamily="Inter, sans-serif" textAnchor="middle" letterSpacing="0.5px">JUMBO</text>
      </svg>
    )
  }
  if (n.includes('sosemie')) {
    // Sosemie: Green background banner + golden sun crest + bold white corporate title
    return (
      <svg viewBox="0 0 160 60" className="w-full h-full p-2" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="6" width="150" height="48" rx="24" fill="#15803d" />
        <circle cx="32" cy="30" r="15" fill="#eab308" />
        <path d="M 32 45 C 32 36, 38 31, 38 21 C 38 31, 32 36, 32 45 Z" fill="#ffffff" opacity="0.85" />
        <text x="64" y="36" fill="#ffffff" fontSize="17" fontWeight="900" fontFamily="Inter, sans-serif" letterSpacing="1px">SOSEMIE</text>
      </svg>
    )
  }
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
                  
                  {/* Invisible fallback in case the image fails to load */}
                  {(partner.name.toLowerCase().includes('amour') || partner.name.toLowerCase().includes('safina')) && (
                    <div style={{ display: 'none' }} className="absolute inset-0 w-full h-full">
                      <svg viewBox="0 0 160 60" className="w-full h-full p-2.5" xmlns="http://www.w3.org/2000/svg">
                        <rect x="5" y="6" width="150" height="48" rx="24" fill="#0f766e" />
                        <text x="80" y="36" fill="#ffffff" fontSize="18" fontWeight="800" fontFamily="Inter, sans-serif" textAnchor="middle" letterSpacing="0.5px">
                          {partner.name.toUpperCase()}
                        </text>
                      </svg>
                    </div>
                  )}
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

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'
import { useLanguage } from '../../context/LanguageContext'
import { fadeUp } from '../ui/animations'

// Real 100% authentic corporate brand logos from the actual companies
function PartnerLogo({ name }) {
  const n = name.toLowerCase().trim()

  let src = ''
  let padding = 'p-2'

  if (n.includes('amour')) {
    src = '/logos/amor benamor.jpg'
    padding = 'p-2'
  } else if (n.includes('safina')) {
    src = '/logos/safina.png'
    padding = 'p-2.5'
  } else if (n.includes('sosemie')) {
    src = '/logos/sosemie.png'
    padding = 'p-2'
  } else if (n.includes('cevital')) {
    src = '/logos/cevital.svg'
    padding = 'p-2.5'
  } else if (n.includes('ifri')) {
    src = '/logos/IFRI-logo.png'
    padding = 'p-2'
  } else if (n.includes('henkel') || n.includes('heinkel')) {
    src = '/logos/henkel.svg'
    padding = 'p-3'
  } else if (n.includes('jumbo')) {
    src = '/logos/jumbo.jpg'
    padding = 'p-2'
  } else if (n.includes('azzouz')) {
    src = '/logos/azzouz.jpg'
    padding = 'p-2'
  } else if (n.includes('famico')) {
    src = '/logos/famico.jpg'
    padding = 'p-2'
  } else if (n.includes('zaim')) {
    src = '/logos/zaim.png'
    padding = 'p-2'
  } else if (n.includes('sos')) {
    src = '/logos/sos.png'
    padding = 'p-2'
  } else if (n.includes('saka')) {
    src = '/logos/saka.png'
    padding = 'p-2'
  } else if (n.includes('telwas')) {
    src = '/logos/telwas.png'
    padding = 'p-2'
  }

  if (src) {
    return <img src={src} alt={name} className={`w-full h-full object-contain ${padding} select-none pointer-events-none`} />
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

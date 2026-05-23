import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'
import { useLanguage } from '../../context/LanguageContext'
import { fadeUp } from '../ui/animations'

export default function Partners() {
  const trackRef = useRef(null)
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
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            {[...PARTNERS, ...PARTNERS].map((partner, i) => (
              <div
                key={i}
                className="shrink-0 flex flex-col items-center gap-3 group"
              >
                <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-md group-hover:shadow-xl transition-shadow group-hover:-translate-y-1 duration-300">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-cover"
                  />
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

import { motion } from 'framer-motion'
import { MapPin, Truck, Navigation, Building2 } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import { useLanguage } from '../../context/LanguageContext'
import { fadeUp, staggerContainer } from '../ui/animations'

export default function Coverage() {
  const { WILAYAS, coverageCards, t, isRtl } = useLanguage()

  return (
    <section id="coverage" className="py-24 bg-gradient-to-b from-white via-[#fffbf2] to-white overflow-hidden relative">
      {/* Warm honey-gold and green ambient glows */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-amber-500/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-green-500/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <SectionHeader
            eyebrow={t('coverageEyebrow')}
            title={t('coverageTitle')}
            subtitle={t('coverageSubtitle')}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Map visual */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Map placeholder */}
            <div className="relative bg-gradient-to-br from-green-50 to-teal-50 border border-green-100 rounded-3xl overflow-hidden h-[440px] shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=700&q=80"
                alt="Carte de couverture logistique"
                className="w-full h-full object-cover opacity-30"
              />
              {/* Overlay map design */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Center hub — Tiaret */}
                  <motion.div
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ repeat: Infinity, duration: 2.5 }}
                    className="w-20 h-20 bg-green-700 rounded-full flex items-center justify-center shadow-2xl shadow-green-700/40 z-20 relative"
                  >
                    <div className="text-center">
                      <Building2 size={22} className="text-white mx-auto" />
                      <span className="text-white text-[9px] font-bold block mt-0.5">{isRtl ? 'تيارت' : 'TIARET'}</span>
                    </div>
                  </motion.div>

                  {/* Pulse rings */}
                  {[1, 2, 3].map((ring) => (
                    <motion.div
                      key={ring}
                      className="absolute inset-0 rounded-full border-2 border-green-500"
                      animate={{ scale: [1, 2.5 + ring * 0.5], opacity: [0.5, 0] }}
                      transition={{ repeat: Infinity, duration: 2.5, delay: ring * 0.6 }}
                    />
                  ))}

                  {/* Routes */}
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, idx) => (
                    <motion.div
                      key={angle}
                      className="absolute top-1/2 left-1/2 origin-left"
                      style={{
                        width: `${90 + (idx % 3) * 20}px`,
                        height: '2px',
                        rotate: `${angle}deg`,
                        translateX: '10px',
                        translateY: '-1px',
                      }}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + idx * 0.1 }}
                    >
                      <div className="h-full bg-gradient-to-r from-green-500 to-amber-400 rounded-full opacity-70" />
                      <motion.div
                        className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-amber-400 rounded-full"
                        animate={{ scale: [1, 1.4, 1] }}
                        transition={{ repeat: Infinity, duration: 2, delay: idx * 0.3 }}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Badges */}
              <div className="absolute top-4 end-4 bg-white rounded-xl shadow-md px-4 py-2 text-center">
                <div className="text-2xl font-extrabold text-green-700">{WILAYAS.length}</div>
                <div className="text-xs text-gray-500 font-medium">{isRtl ? 'ولاية' : 'Wilayas'}</div>
              </div>
              <div className="absolute bottom-4 start-4 bg-white rounded-xl shadow-md px-4 py-2 flex items-center gap-2">
                <Truck size={16} className="text-amber-500" />
                <span className="text-xs font-semibold text-gray-700">{t('vehiclesCount')}</span>
              </div>
            </div>
          </motion.div>

          {/* Right — Wilaya list */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6 text-start">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                <Navigation size={18} className="text-green-700" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">{t('wilayasCovered')}</h3>
                <p className="text-gray-500 text-sm">{t('directDelivery')}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-8 text-start">
              {WILAYAS.map((w, i) => (
                <motion.div
                  key={w}
                  variants={fadeUp}
                  custom={i}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-medium border transition-colors ${
                    w === 'Tiaret' || w === 'تيارت'
                      ? 'bg-green-700 text-white border-green-700'
                      : 'bg-gray-50 text-gray-700 border-gray-100 hover:border-green-300 hover:bg-green-50'
                  }`}
                >
                  <MapPin size={13} className={w === 'Tiaret' || w === 'تيارت' ? 'text-amber-300' : 'text-green-600'} />
                  {w}
                  {(w === 'Tiaret' || w === 'تيارت') && (
                    <span className="ms-auto text-[10px] bg-amber-400 text-white px-1.5 py-0.5 rounded-md font-bold">{t('hq')}</span>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Info cards */}
            <div className="grid grid-cols-2 gap-4 text-start">
              {coverageCards.map(({ label, desc }, i) => {
                const Icon = i === 0 ? Truck : MapPin
                return (
                  <div key={label} className="bg-gradient-to-br from-green-50 to-teal-50 border border-green-100 rounded-2xl p-4">
                    <Icon size={20} className="text-green-700 mb-2" />
                    <div className="font-bold text-gray-900 text-sm">{label}</div>
                    <div className="text-gray-500 text-xs mt-0.5">{desc}</div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

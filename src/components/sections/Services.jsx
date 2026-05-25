import { motion } from 'framer-motion'
import {
  Truck, Package, Droplets, Milk, Wheat, ShoppingCart, Warehouse, MapPin,
} from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import { useLanguage } from '../../context/LanguageContext'
import { fadeUp, staggerContainer } from '../ui/animations'

const ICONS = { Truck, Package, Droplets, Milk, Wheat, ShoppingCart, Warehouse, MapPin }

const COLOR_MAP = {
  green: { bg: 'bg-green-100', text: 'text-green-700', border: 'border-green-200', badge: 'bg-green-700' },
  orange: { bg: 'bg-orange-100', text: 'text-orange-700', border: 'border-orange-200', badge: 'bg-orange-600' },
  blue: { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-200', badge: 'bg-blue-700' },
  yellow: { bg: 'bg-yellow-100', text: 'text-yellow-700', border: 'border-yellow-200', badge: 'bg-yellow-600' },
  amber: { bg: 'bg-amber-100', text: 'text-amber-700', border: 'border-amber-200', badge: 'bg-amber-600' },
  purple: { bg: 'bg-purple-100', text: 'text-purple-700', border: 'border-purple-200', badge: 'bg-purple-700' },
  teal: { bg: 'bg-teal-100', text: 'text-teal-700', border: 'border-teal-200', badge: 'bg-teal-700' },
  red: { bg: 'bg-red-100', text: 'text-red-700', border: 'border-red-200', badge: 'bg-red-700' },
}

export default function Services() {
  const { SERVICES, t } = useLanguage()

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white via-[#f6faf8] to-white relative overflow-hidden">
      {/* Premium mint/sage ambient glows */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-green-500/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-teal-500/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <SectionHeader
            eyebrow={t('servicesEyebrow')}
            title={t('servicesTitle')}
            subtitle={t('servicesSubtitle')}
          />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon]
            const colors = COLOR_MAP[service.color]
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 cursor-default text-start"
              >
                {/* Icon */}
                <div className={`w-14 h-14 ${colors.bg} ${colors.border} border rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <Icon size={26} className={colors.text} />
                </div>
                {/* Title */}
                <h3 className="font-bold text-gray-900 text-base mb-3 group-hover:text-green-700 transition-colors">
                  {service.title}
                </h3>
                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                {/* Bottom accent bar */}
                <div className={`mt-5 h-1 w-10 ${colors.badge} rounded-full group-hover:w-full transition-all duration-500`} />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-green-50 to-amber-50 border border-green-100 rounded-3xl px-8 py-6">
            <div className="text-start">
              <p className="font-bold text-gray-900">{t('customServiceTitle')}</p>
              <p className="text-gray-500 text-sm">{t('customServiceDesc')}</p>
            </div>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="shrink-0 bg-green-700 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm cursor-pointer"
            >
              {t('contactUs')}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Elegant Divider Line */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center pointer-events-none z-10">
        <div className="w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_#f59e0b] border border-white" />
        </div>
      </div>
    </section>
  )
}

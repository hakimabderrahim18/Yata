import { motion } from 'framer-motion'
import {
  Truck, Package, Droplets, Milk, Wheat, ShoppingCart, Warehouse, MapPin,
} from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import { SERVICES } from '../../data/content'
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
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <SectionHeader
            eyebrow="Nos Services"
            title="Une gamme complète de services de distribution"
            subtitle="De la réception à la livraison, nous gérons toute la chaîne d'approvisionnement alimentaire pour que votre commerce ne manque jamais de rien."
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
                className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 cursor-default"
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
            <div className="text-left">
              <p className="font-bold text-gray-900">Besoin d'un service sur mesure ?</p>
              <p className="text-gray-500 text-sm">Contactez-nous pour une offre personnalisée selon vos besoins.</p>
            </div>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="shrink-0 bg-green-700 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
            >
              Contactez-nous
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

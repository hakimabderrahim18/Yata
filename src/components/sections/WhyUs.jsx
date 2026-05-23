import { motion } from 'framer-motion'
import {
  Zap, Award, Shield, TrendingDown, Handshake, Headphones,
} from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import { useLanguage } from '../../context/LanguageContext'
import { fadeUp, staggerContainer } from '../ui/animations'
import Particles from '../ui/Particles'

const ICONS = { Zap, Award, Shield, TrendingDown, Handshake, HeadphonesIcon: Headphones }

export default function WhyUs() {
  const { WHY_US, whyUsStats, t } = useLanguage()

  return (
    <section id="why-us" className="py-24 bg-gradient-to-br from-green-950 via-green-900 to-green-800 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      <Particles count={25} color="rgba(245, 158, 11, 0.15)" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <SectionHeader
            eyebrow={t('whyUsEyebrow')}
            title={t('whyUsTitle')}
            subtitle={t('whyUsSubtitle')}
            light
          />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {WHY_US.map((item, i) => {
            const Icon = ICONS[item.icon] || ICONS.HeadphonesIcon
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-400/40 rounded-2xl p-7 transition-all duration-300 cursor-default text-start"
              >
                <div className="w-14 h-14 bg-amber-500/20 group-hover:bg-amber-500/30 border border-amber-500/30 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-all">
                  <Icon size={26} className="text-amber-400" />
                </div>
                <h3 className="font-bold text-white text-lg mb-3">{item.title}</h3>
                <p className="text-green-200 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom stats strip */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {whyUsStats.map(({ value, label }) => (
            <div key={label} className="text-center bg-white/5 border border-white/10 rounded-2xl py-5 px-4">
              <div className="text-3xl font-extrabold text-amber-400 mb-1">{value}</div>
              <div className="text-green-200 text-sm">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

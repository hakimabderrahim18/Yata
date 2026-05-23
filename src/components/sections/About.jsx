import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Users, Globe, TrendingUp } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import { useLanguage } from '../../context/LanguageContext'
import { fadeUp, slideLeft, slideRight, staggerContainer } from '../ui/animations'

const VALUE_ICONS = [CheckCircle, Users, Globe, TrendingUp]

export default function About() {
  const { TIMELINE, valuesList, t, isRtl } = useLanguage()

  // 3D Card Hover Tilt state
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const handleTilt = (e) => {
    const card = e.currentTarget
    const box = card.getBoundingClientRect()
    const x = e.clientX - box.left - box.width / 2
    const y = e.clientY - box.top - box.height / 2
    const factor = 15
    setTilt({
      x: -(y / (box.height / 2)) * factor,
      y: (x / (box.width / 2)) * factor
    })
  }
  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
  }

  return (
    <section id="about" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <SectionHeader
            eyebrow={t('aboutUs')}
            title={t('whoIsYata')}
            subtitle={t('aboutSubtitle')}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left — image */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
            style={{ perspective: 1000 }}
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/YATA1.jpg"
                alt="Centre de distribution YATA"
                className="w-full h-80 lg:h-[480px] object-cover"
              />
            </div>
            {/* Floating badge - Holographic 3D Tilt */}
            <motion.div
              onMouseMove={handleTilt}
              onMouseLeave={handleMouseLeave}
              animate={{
                rotateX: tilt.x,
                rotateY: tilt.y,
                scale: tilt.x !== 0 ? 1.05 : 1
              }}
              style={{
                transformStyle: 'preserve-3d',
              }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              className="absolute -bottom-6 -end-6 bg-white rounded-2xl shadow-2xl p-5 max-w-[180px] border border-gray-100/80 select-none cursor-grab active:cursor-grabbing z-20"
            >
              <div style={{ transform: 'translateZ(30px)' }} className="text-4xl font-extrabold text-green-700">10+</div>
              <div style={{ transform: 'translateZ(15px)' }} className="text-sm text-gray-500 font-semibold leading-tight mt-1">{t('yearsExp')}</div>
            </motion.div>
            {/* Green accent */}
            <div className="absolute -top-4 -start-4 w-24 h-24 bg-green-600/10 rounded-2xl -z-10" />
          </motion.div>

          {/* Right — text */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Mission */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                  <TrendingUp size={20} className="text-green-700" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg">{t('ourMission')}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-start">
                {t('missionDesc')}
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center shrink-0">
                  <Globe size={20} className="text-amber-700" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg">{t('ourVision')}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-start">
                {t('visionDesc')}
              </p>
            </div>

            {/* Values */}
            <div>
              <h3 className="font-bold text-gray-900 text-lg mb-4 text-start">{t('ourValues')}</h3>
              <div className="grid grid-cols-2 gap-3">
                {valuesList.map(({ label, color }, i) => {
                  const Icon = VALUE_ICONS[i] || CheckCircle
                  return (
                    <div key={label} className="flex items-center gap-3 bg-white border border-gray-100 rounded-xl p-3 shadow-sm">
                      <Icon size={20} className={color} />
                      <span className="font-semibold text-gray-700 text-sm">{label}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">{t('ourJourney')}</h3>
          <div className="relative">
            {/* Line */}
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-600 to-amber-400 hidden md:block" />
            <div className="space-y-8 md:space-y-0">
              {TIMELINE.map(({ year, title, desc }, i) => (
                <motion.div
                  key={year}
                  variants={fadeUp}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className={`md:flex items-center gap-8 md:mb-10 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-end' : 'md:text-start'}`}>
                    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm inline-block w-full md:max-w-sm text-start">
                      <div className="text-amber-500 font-bold text-sm mb-1">{year}</div>
                      <div className="font-bold text-gray-900 text-lg mb-1">{title}</div>
                      <div className="text-gray-500 text-sm">{desc}</div>
                    </div>
                  </div>
                  {/* Dot */}
                  <div className="hidden md:flex items-center justify-center w-12 h-12 shrink-0 bg-white border-4 border-green-600 rounded-full z-10 shadow-md">
                    <span className="text-green-700 font-bold text-xs">{i + 1}</span>
                  </div>
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

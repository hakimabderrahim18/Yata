import { motion } from 'framer-motion'
import { CheckCircle, Users, Globe, TrendingUp } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import { fadeUp, slideLeft, slideRight, staggerContainer } from '../ui/animations'

const TIMELINE = [
  { year: '2014', title: 'Fondation', desc: 'Création de YATA Distribution à Tiaret avec une vision locale.' },
  { year: '2017', title: 'Expansion Régionale', desc: 'Extension à 10 wilayas du centre-ouest algérien.' },
  { year: '2020', title: 'Modernisation', desc: 'Acquisition d\'une flotte réfrigérée et d\'un entrepôt moderne de 5 000 m².' },
  { year: '2024', title: 'Leadership', desc: 'Couverture de 24 wilayas, 500+ clients, leader régional.' },
]

const VALUES = [
  { icon: CheckCircle, label: 'Intégrité', color: 'text-green-600' },
  { icon: Users, label: 'Partenariat', color: 'text-amber-600' },
  { icon: Globe, label: 'Portée nationale', color: 'text-blue-600' },
  { icon: TrendingUp, label: 'Croissance', color: 'text-purple-600' },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <SectionHeader
            eyebrow="À propos de nous"
            title="Qui est YATA Distribution ?"
            subtitle="Depuis 2014, YATA Distribution est le partenaire de référence des commerçants, épiciers et grandes surfaces de l'ouest algérien pour l'approvisionnement alimentaire en gros."
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
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=700&q=80"
                alt="Centre de distribution YATA"
                className="w-full h-80 lg:h-[480px] object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 max-w-[180px]">
              <div className="text-4xl font-extrabold text-green-700">10+</div>
              <div className="text-sm text-gray-500 font-medium leading-tight mt-1">Années d'expérience dans la distribution</div>
            </div>
            {/* Green accent */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-600/10 rounded-2xl -z-10" />
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
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <TrendingUp size={20} className="text-green-700" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg">Notre Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Fournir aux commerces algériens un accès rapide, fiable et économique aux produits alimentaires de qualité, en s'appuyant sur une logistique de pointe et des partenariats durables avec les meilleurs producteurs nationaux.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                  <Globe size={20} className="text-amber-700" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg">Notre Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Devenir le distributeur alimentaire en gros numéro 1 en Algérie d'ici 2030, en couvrant l'ensemble du territoire national avec des services logistiques modernes et efficaces.
              </p>
            </div>

            {/* Values */}
            <div>
              <h3 className="font-bold text-gray-900 text-lg mb-4">Nos Valeurs</h3>
              <div className="grid grid-cols-2 gap-3">
                {VALUES.map(({ icon: Icon, label, color }) => (
                  <div key={label} className="flex items-center gap-3 bg-white border border-gray-100 rounded-xl p-3 shadow-sm">
                    <Icon size={20} className={color} />
                    <span className="font-semibold text-gray-700 text-sm">{label}</span>
                  </div>
                ))}
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
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">Notre Parcours</h3>
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
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm inline-block w-full md:max-w-sm">
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

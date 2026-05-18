import { motion } from 'framer-motion'
import { Flame, BadgePercent, Clock, PackageCheck } from 'lucide-react'
import { slideLeft, slideRight, fadeUp } from '../ui/animations'
import { PROMO } from '../../data/content'

export default function Promo() {
  return (
    <section id="promo" className="py-20 bg-green-950 relative overflow-hidden">

      {/* Decorative blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-800/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Eyebrow badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center mb-10"
        >
          <span className="inline-flex items-center gap-2 bg-amber-500 text-white text-sm font-bold uppercase tracking-widest px-5 py-2 rounded-full shadow-lg">
            <Flame size={16} className="animate-pulse" />
            Offre Exclusive
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left – text */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              {PROMO.title}
              <span className="block text-amber-400 mt-1">{PROMO.highlight}</span>
            </h2>

            <p className="text-green-200 text-lg leading-relaxed">
              {PROMO.description}
            </p>

            {/* Perks */}
            <ul className="space-y-3">
              {PROMO.perks.map((perk, i) => (
                <li key={i} className="flex items-center gap-3 text-green-100 text-sm font-medium">
                  <span className="flex-shrink-0 w-6 h-6 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center">
                    <PackageCheck size={13} />
                  </span>
                  {perk}
                </li>
              ))}
            </ul>

            {/* Discount badge + CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
              <div className="flex items-center gap-2 bg-amber-500 text-white font-extrabold text-3xl px-6 py-3 rounded-2xl shadow-xl">
                <BadgePercent size={28} />
                {PROMO.discount}
              </div>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-green-900 hover:bg-amber-400 hover:text-white font-bold px-8 py-4 rounded-2xl text-sm transition-colors duration-300 shadow-lg"
              >
                Profiter de l'offre →
              </button>
            </div>

            {/* Urgency */}
            <p className="flex items-center gap-2 text-amber-300 text-xs font-semibold">
              <Clock size={14} />
              {PROMO.urgency}
            </p>
          </motion.div>

          {/* Right – image */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            {/* Glow ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 bg-amber-500/20 rounded-full blur-2xl" />
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-400/30 max-w-sm w-full">
              <img
                src={PROMO.image}
                alt={PROMO.title}
                className="w-full h-80 object-cover"
              />
              {/* Overlay tag */}
              <div className="absolute bottom-4 left-4 right-4 bg-green-950/80 backdrop-blur-sm rounded-2xl px-4 py-3 text-white">
                <p className="text-xs text-amber-400 font-semibold uppercase tracking-wider">Produit vedette</p>
                <p className="font-bold text-base mt-0.5">{PROMO.product}</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

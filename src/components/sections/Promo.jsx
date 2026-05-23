import { useState } from 'react'
import { motion } from 'framer-motion'
import { Flame, BadgePercent, Clock, PackageCheck } from 'lucide-react'
import { slideLeft, slideRight, fadeUp } from '../ui/animations'
import { useLanguage } from '../../context/LanguageContext'
import Particles from '../ui/Particles'
import Magnetic from '../ui/Magnetic'

export default function Promo() {
  const { PROMO, t, isRtl } = useLanguage()

  // Wholesale Palettes Calculator state
  const [palettes, setPalettes] = useState(5)
  const [badgeScale, setBadgeScale] = useState(1)

  const handleSliderChange = (e) => {
    setPalettes(Number(e.target.value))
    // Trigger elastic scale bounce on discount badge
    setBadgeScale(1.15)
    setTimeout(() => setBadgeScale(1), 150)
  }

  return (
    <section id="promo" className="py-20 bg-green-950 relative overflow-hidden">

      {/* Decorative blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-800/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
      <Particles count={25} color="rgba(245, 158, 11, 0.18)" />

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
            {t('exclusiveOffer')}
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
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight text-start">
              {PROMO.title}
              <span className="block text-amber-400 mt-1">{PROMO.highlight}</span>
            </h2>

            <p className="text-green-200 text-lg leading-relaxed text-start">
              {PROMO.description}
            </p>

            {/* Perks */}
            <ul className="space-y-3 text-start">
              {PROMO.perks.map((perk, i) => (
                <li key={i} className="flex items-center gap-3 text-green-100 text-sm font-medium">
                  <span className="flex-shrink-0 w-6 h-6 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center">
                    <PackageCheck size={13} />
                  </span>
                  {perk}
                </li>
              ))}
            </ul>

            {/* Interactive Quantity Slider */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-3 text-start backdrop-blur-sm shadow-inner">
              <div className="flex justify-between items-center text-sm">
                <span className="text-green-200 font-medium">{isRtl ? 'حجم الطلبية (منصات)' : 'Volume de commande (Palettes)'}</span>
                <span className="text-amber-400 font-extrabold text-lg">{palettes}</span>
              </div>
              <input
                type="range"
                min="1"
                max="20"
                value={palettes}
                onChange={handleSliderChange}
                className="w-full accent-amber-400 h-2 bg-green-900/60 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex flex-col sm:flex-row justify-between text-xs text-green-200 pt-3 border-t border-white/5 gap-2">
                <div>
                  <span className="opacity-70">{isRtl ? 'الشحنة المقدرة: ' : 'Volume estimé: '}</span>
                  <span className="font-bold text-white">{(palettes * 1440).toLocaleString()} {isRtl ? 'وحدة' : 'unités'}</span>
                </div>
                <div>
                  <span className="opacity-70">{isRtl ? 'شروط التوصيل: ' : 'Livraison: '}</span>
                  <span className={`font-bold ${palettes >= 5 ? 'text-amber-400' : 'text-white'}`}>
                    {palettes >= 5 
                      ? (isRtl ? 'توصيل مجاني ✓' : 'Livraison gratuite ✓') 
                      : (isRtl ? 'تكاليف توصيل عادية' : 'Frais de livraison standard')
                    }
                  </span>
                </div>
              </div>
            </div>

            {/* Discount badge + CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
              <motion.div
                animate={{ scale: badgeScale }}
                transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                className="flex items-center gap-2 bg-amber-500 text-white font-extrabold text-3xl px-6 py-3 rounded-2xl shadow-xl select-none"
              >
                <BadgePercent size={28} />
                {PROMO.discount}
              </motion.div>
              <Magnetic range={70} actionScale={1.04}>
                <button
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white text-green-900 hover:bg-amber-400 hover:text-white font-bold px-8 py-4 rounded-2xl text-sm transition-all duration-300 shadow-lg cursor-pointer"
                >
                  {t('getOffer')}
                </button>
              </Magnetic>
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
              <div className="absolute bottom-4 left-4 right-4 bg-green-950/80 backdrop-blur-sm rounded-2xl px-4 py-3 text-white text-start">
                <p className="text-xs text-amber-400 font-semibold uppercase tracking-wider">{t('featuredProduct')}</p>
                <p className="font-bold text-base mt-0.5">{PROMO.product}</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

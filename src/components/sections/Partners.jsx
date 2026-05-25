import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ShieldCheck, Handshake, CheckCircle2, ChevronRight, Sparkles, Layers,
} from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import { useLanguage } from '../../context/LanguageContext'
import { fadeUp, staggerContainer } from '../ui/animations'

// Brand-specific custom color schemes (Glow shadow, border color, and badge styling)
const BRAND_THEMES = {
  famico: {
    glow: 'group-hover:shadow-[0_0_25px_rgba(245,158,11,0.15)] group-hover:border-amber-400/50',
    badge: 'bg-amber-50 text-amber-700 border-amber-200/50',
    colorCode: 'rgba(245,158,11,0.03)'
  },
  jumbo: {
    glow: 'group-hover:shadow-[0_0_25px_rgba(239,68,68,0.15)] group-hover:border-red-400/50',
    badge: 'bg-red-50 text-red-700 border-red-200/50',
    colorCode: 'rgba(239,68,68,0.03)'
  },
  amour: {
    glow: 'group-hover:shadow-[0_0_25px_rgba(239,68,68,0.15)] group-hover:border-red-400/50',
    badge: 'bg-red-50 text-red-700 border-red-200/50',
    colorCode: 'rgba(239,68,68,0.03)'
  },
  sosemie: {
    glow: 'group-hover:shadow-[0_0_25px_rgba(239,68,68,0.15)] group-hover:border-red-400/50',
    badge: 'bg-red-50 text-red-700 border-red-200/50',
    colorCode: 'rgba(239,68,68,0.03)'
  },
  safina: {
    glow: 'group-hover:shadow-[0_0_25px_rgba(245,158,11,0.15)] group-hover:border-amber-400/50',
    badge: 'bg-amber-50 text-amber-700 border-amber-200/50',
    colorCode: 'rgba(245,158,11,0.03)'
  },
  henkel: {
    glow: 'group-hover:shadow-[0_0_25px_rgba(37,99,235,0.15)] group-hover:border-blue-400/50',
    badge: 'bg-blue-50 text-blue-700 border-blue-200/50',
    colorCode: 'rgba(37,99,235,0.03)'
  },
  cevital: {
    glow: 'group-hover:shadow-[0_0_25px_rgba(245,158,11,0.15)] group-hover:border-amber-400/50',
    badge: 'bg-amber-50 text-amber-700 border-amber-200/50',
    colorCode: 'rgba(245,158,11,0.03)'
  },
  ifri: {
    glow: 'group-hover:shadow-[0_0_25px_rgba(16,185,129,0.15)] group-hover:border-emerald-400/50',
    badge: 'bg-emerald-50 text-emerald-700 border-emerald-200/50',
    colorCode: 'rgba(16,185,129,0.03)'
  },
  zaim: {
    glow: 'group-hover:shadow-[0_0_25px_rgba(245,158,11,0.15)] group-hover:border-amber-400/50',
    badge: 'bg-amber-50 text-amber-700 border-amber-200/50',
    colorCode: 'rgba(245,158,11,0.03)'
  },
  sos: {
    glow: 'group-hover:shadow-[0_0_25px_rgba(245,158,11,0.15)] group-hover:border-amber-400/50',
    badge: 'bg-amber-50 text-amber-700 border-amber-200/50',
    colorCode: 'rgba(245,158,11,0.03)'
  },
  azzouz: {
    glow: 'group-hover:shadow-[0_0_25px_rgba(239,68,68,0.15)] group-hover:border-red-400/50',
    badge: 'bg-red-50 text-red-700 border-red-200/50',
    colorCode: 'rgba(239,68,68,0.03)'
  },
  'sarl telwas': {
    glow: 'group-hover:shadow-[0_0_25px_rgba(16,185,129,0.15)] group-hover:border-emerald-400/50',
    badge: 'bg-emerald-50 text-emerald-700 border-emerald-200/50',
    colorCode: 'rgba(16,185,129,0.03)'
  },
  'hamoud boualem': {
    glow: 'group-hover:shadow-[0_0_25px_rgba(16,185,129,0.15)] group-hover:border-emerald-400/50',
    badge: 'bg-emerald-50 text-emerald-700 border-emerald-200/50',
    colorCode: 'rgba(16,185,129,0.03)'
  },
}

// Real 100% authentic corporate brand logos from the actual companies
function PartnerLogo({ name, className = '' }) {
  const n = name.toLowerCase().trim()

  let src = ''
  let padding = 'p-3'

  if (n.includes('amour')) {
    src = '/logos/amor benamor.svg'
    padding = 'p-3.5'
  } else if (n.includes('safina')) {
    src = '/logos/safina.svg'
    padding = 'p-4'
  } else if (n.includes('sosemie')) {
    src = '/logos/sosemie.svg'
    padding = 'p-3'
  } else if (n.includes('cevital')) {
    src = '/logos/cevital.svg'
    padding = 'p-4'
  } else if (n.includes('ifri')) {
    src = '/logos/IFRI-logo.svg'
    padding = 'p-3'
  } else if (n.includes('henkel') || n.includes('heinkel')) {
    src = '/logos/henkel.svg'
    padding = 'p-4.5'
  } else if (n.includes('jumbo')) {
    src = '/logos/jumbo.svg'
    padding = 'p-3'
  } else if (n.includes('azzouz')) {
    src = '/logos/azzouz.svg'
    padding = 'p-3'
  } else if (n.includes('famico')) {
    src = '/logos/famico.svg'
    padding = 'p-3'
  } else if (n.includes('zaim')) {
    src = '/logos/zaim.svg'
    padding = 'p-3.5'
  } else if (n.includes('sos')) {
    src = '/logos/sos.svg'
    padding = 'p-3.5'
  } else if (n.includes('telwas')) {
    src = '/logos/telwas.svg'
    padding = 'p-3'
  } else if (n.includes('hamoud') || n.includes('boualem')) {
    src = '/logos/hamoud_boualem_spa_logo.svg'
    padding = 'p-3.5'
  }

  if (src) {
    return (
      <img
        src={src}
        alt={name}
        className={`w-full h-full object-contain ${padding} select-none pointer-events-none transition-transform duration-500 group-hover:scale-105 ${className}`}
      />
    )
  }

  return (
    <svg viewBox="0 0 160 60" className="w-full h-full bg-green-700 p-2" xmlns="http://www.w3.org/2000/svg">
      <circle cx="35" cy="30" r="18" fill="none" stroke="#ffffff" strokeWidth="2" />
      <text x="35" y="36" fill="#ffffff" fontSize="16" fontWeight="bold" textAnchor="middle">{name.substring(0, 2).toUpperCase()}</text>
      <text x="75" y="36" fill="#ffffff" fontSize="16" fontWeight="bold" fontFamily="Inter, sans-serif">{name.toUpperCase()}</text>
    </svg>
  )
}

export default function Partners() {
  const { PARTNERS, t, isRtl } = useLanguage()
  const [activeFilter, setActiveFilter] = useState('all')

  // Categories filter configuration
  const filters = [
    { id: 'all', label: t('partnersFilterAll') },
    { id: 'grocery', label: t('partnersFilterGrocery') },
    { id: 'beverage', label: t('partnersFilterBeverage') },
    { id: 'hygiene', label: t('partnersFilterHygiene') }
  ]

  // Filter partners dynamically
  const filteredPartners = PARTNERS.filter((partner) => {
    if (activeFilter === 'all') return true
    return partner.category === activeFilter
  })

  // Group partners for the double scrolling rows
  // Row 1 (scrolling left): First 7 partners
  // Row 2 (scrolling right): Remaining 7 partners
  const row1Partners = PARTNERS.slice(0, 7)
  const row2Partners = PARTNERS.slice(7)

  return (
    <section id="partners" className="py-24 bg-gradient-to-b from-white via-[#faf9f6] to-white overflow-hidden relative">
      
      {/* Self-contained CSS for high-performance GPU-accelerated twin endless scrolling */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll-left {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes scroll-right {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        .animate-scroll-left {
          display: flex;
          width: max-content;
          animation: scroll-left 38s linear infinite;
        }
        .animate-scroll-right {
          display: flex;
          width: max-content;
          animation: scroll-right 38s linear infinite;
        }
        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}} />

      {/* Aesthetic glowing background shapes */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-green-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <SectionHeader
            eyebrow={t('partnersEyebrow')}
            title={t('partnersTitle')}
            subtitle={t('partnersSubtitle')}
          />
        </motion.div>

        {/* 1. Twin Scrolling Endless Carousels (Stunning Visual Showcase) */}
        <div className="space-y-6 my-16 relative">
          {/* Soft blur side gradient masks to seamlessly blend the scrolling content */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          {/* Row 1: Leftward Scrolling Carousel */}
          <div className="overflow-hidden py-2 select-none">
            <div className="animate-scroll-left gap-6">
              {[...row1Partners, ...row1Partners, ...row1Partners].map((partner, idx) => (
                <div
                  key={`r1-${idx}`}
                  className="w-44 h-24 bg-white border border-gray-100 hover:border-green-600/30 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_-6px_rgba(20,83,45,0.08)] flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
                >
                  <PartnerLogo name={partner.name} />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Rightward Scrolling Carousel */}
          <div className="overflow-hidden py-2 select-none">
            <div className="animate-scroll-right gap-6">
              {[...row2Partners, ...row2Partners, ...row2Partners].map((partner, idx) => (
                <div
                  key={`r2-${idx}`}
                  className="w-44 h-24 bg-white border border-gray-100 hover:border-amber-600/30 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_-6px_rgba(180,83,9,0.08)] flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
                >
                  <PartnerLogo name={partner.name} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 2. Interactive Spotlight Brand Hub */}
        <div className="mt-20 space-y-10">
          
          {/* Category Tabs Switcher */}
          <div className="flex flex-wrap items-center justify-center gap-2 select-none">
            {filters.map((f) => {
              const active = activeFilter === f.id
              return (
                <button
                  key={f.id}
                  onClick={() => setActiveFilter(f.id)}
                  className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border cursor-pointer ${
                    active
                      ? 'bg-green-900 text-amber-400 border-green-900 shadow-md shadow-green-900/10 scale-105'
                      : 'bg-white text-gray-500 hover:text-gray-900 hover:bg-gray-50 border-gray-200'
                  }`}
                >
                  {f.label}
                </button>
              )
            })}
          </div>

          {/* Dynamic Grid using AnimatePresence */}
          <motion.div
            layout
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 min-h-[300px]"
          >
            <AnimatePresence mode="popLayout">
              {filteredPartners.map((partner, i) => {
                const theme = BRAND_THEMES[partner.name.toLowerCase().trim()] || {
                  glow: 'group-hover:shadow-[0_0_25px_rgba(16,185,129,0.15)] group-hover:border-emerald-400/50',
                  badge: 'bg-emerald-50 text-emerald-700 border-emerald-200/50',
                  colorCode: 'rgba(16,185,129,0.03)'
                }
                const labelKey = partner.category === 'grocery' 
                  ? t('partnersFilterGrocery') 
                  : partner.category === 'beverage' 
                    ? t('partnersFilterBeverage') 
                    : t('partnersFilterHygiene')

                return (
                  <motion.div
                    layout
                    key={partner.name}
                    initial={{ opacity: 0, scale: 0.9, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 15 }}
                    transition={{ duration: 0.3 }}
                    className="group bg-white border border-gray-100 hover:border-gray-200 rounded-3xl p-5 flex flex-col justify-between items-stretch transition-all duration-300 relative overflow-hidden text-start shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)]"
                    style={{ '--brand-bg': theme.colorCode }}
                  >
                    {/* Hover micro-background glow */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{ backgroundColor: theme.colorCode }} 
                    />

                    <div>
                      {/* Logo Frame */}
                      <div className={`w-full h-28 bg-white border border-gray-50 rounded-2xl overflow-hidden flex items-center justify-center transition-all duration-300 group-hover:shadow-lg ${theme.glow}`}>
                        <PartnerLogo name={partner.name} />
                      </div>

                      {/* Header Data */}
                      <div className="mt-4 flex items-center justify-between">
                        <h4 className="font-extrabold text-gray-900 text-lg tracking-tight group-hover:text-green-800 transition-colors">
                          {partner.name}
                        </h4>
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${theme.badge}`}>
                          {labelKey}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="mt-3 text-gray-500 text-xs sm:text-sm leading-relaxed font-medium">
                        {partner.description}
                      </p>
                    </div>

                    {/* Interactive spotlight link */}
                    <div className="mt-5 pt-3 border-t border-gray-50 flex items-center justify-between text-xs font-bold text-gray-400 group-hover:text-green-700 transition-colors">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {isRtl ? 'توزيع معتمد ✓' : 'Distribution Agréée ✓'}
                      </span>
                      <button 
                        onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="flex items-center gap-1 hover:underline cursor-pointer group-hover:text-amber-500"
                      >
                        {isRtl ? 'طلب المنتجات' : 'Commander'} 
                        <ChevronRight size={13} className="transform group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* 3. Luxury Trust Pillars & Interactive Banner */}
        <div className="mt-24 space-y-12">
          
          {/* Trust Pillars Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {/* Pillar 1: Direct Partner */}
            <motion.div
              variants={fadeUp}
              className="bg-white/40 backdrop-blur-sm border border-gray-100 hover:border-amber-400/40 rounded-3xl p-6 text-start flex gap-4 transition-all hover:shadow-[0_12px_30px_-6px_rgba(245,158,11,0.06)] group"
            >
              <div className="w-12 h-12 bg-amber-50 text-amber-600 border border-amber-100 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Handshake size={22} className="animate-pulse" />
              </div>
              <div>
                <h5 className="font-extrabold text-gray-900 text-sm sm:text-base mb-1">
                  {t('partnersDirectDist')}
                </h5>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-medium">
                  {t('partnersDirectDistDesc')}
                </p>
              </div>
            </motion.div>

            {/* Pillar 2: Standard Logistics */}
            <motion.div
              variants={fadeUp}
              className="bg-white/40 backdrop-blur-sm border border-gray-100 hover:border-green-600/40 rounded-3xl p-6 text-start flex gap-4 transition-all hover:shadow-[0_12px_30px_-6px_rgba(20,83,45,0.06)] group"
            >
              <div className="w-12 h-12 bg-green-50 text-green-700 border border-green-100 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <ShieldCheck size={22} />
              </div>
              <div>
                <h5 className="font-extrabold text-gray-900 text-sm sm:text-base mb-1">
                  {t('partnersLogistic')}
                </h5>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-medium">
                  {t('partnersLogisticDesc')}
                </p>
              </div>
            </motion.div>

            {/* Pillar 3: Guaranteed Stock */}
            <motion.div
              variants={fadeUp}
              className="bg-white/40 backdrop-blur-sm border border-gray-100 hover:border-blue-600/40 rounded-3xl p-6 text-start flex gap-4 transition-all hover:shadow-[0_12px_30px_-6px_rgba(37,99,235,0.06)] group"
            >
              <div className="w-12 h-12 bg-blue-50 text-blue-700 border border-blue-100 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <CheckCircle2 size={22} />
              </div>
              <div>
                <h5 className="font-extrabold text-gray-900 text-sm sm:text-base mb-1">
                  {t('partnersStock')}
                </h5>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-medium">
                  {t('partnersStockDesc')}
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Interactive B2B Partnership Banner */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-green-950 via-green-900 to-emerald-950 border border-green-800/40 rounded-[2rem] p-8 sm:p-12 overflow-hidden shadow-xl"
          >
            {/* Ambient gold glow orbs inside the dark banner */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3" />
            <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-green-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-start">
              <div className="space-y-4 max-w-2xl">
                <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-400/20 text-amber-400 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full select-none">
                  <Sparkles size={12} className="animate-pulse" />
                  {isRtl ? 'شراكة تجارية B2B' : 'Opportunité Partenariat B2B'}
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                  {t('partnersTrustText')}
                </h3>
                <p className="text-green-200 text-sm sm:text-base leading-relaxed font-medium">
                  {t('partnersTrustTextEnd')}
                </p>
              </div>

              <div className="shrink-0">
                <button
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-amber-500 hover:bg-amber-400 text-white font-extrabold px-8 py-4 rounded-2xl text-sm transition-all duration-300 shadow-lg cursor-pointer transform hover:scale-[1.03] active:scale-[0.98] inline-flex items-center gap-2"
                >
                  {t('partnersTrustCTA')}
                  <ChevronRight size={16} className={`transform transition-transform ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

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

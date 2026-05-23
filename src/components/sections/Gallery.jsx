import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import { useLanguage } from '../../context/LanguageContext'
import { fadeUp, staggerContainer } from '../ui/animations'

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)
  const { GALLERY_IMAGES, t } = useLanguage()

  return (
    <section id="gallery" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <SectionHeader
            eyebrow={t('galleryEyebrow')}
            title={t('galleryTitle')}
            subtitle={t('gallerySubtitle')}
          />
        </motion.div>

        {/* Masonry grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[180px]"
        >
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer shadow-md ${
                i === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
              } ${i === 3 ? 'lg:row-span-2' : ''}`}
              onClick={() => setLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-green-950/0 group-hover:bg-green-950/60 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center gap-2 text-white">
                  <ZoomIn size={28} />
                  <span className="text-xs font-semibold bg-amber-500 px-3 py-1 rounded-full">{img.category}</span>
                </div>
              </div>
              {/* Category badge */}
              <div className="absolute top-3 start-3 bg-black/40 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                {img.alt}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 25 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={GALLERY_IMAGES[lightbox].src.replace('w=600', 'w=1200')}
                alt={GALLERY_IMAGES[lightbox].alt}
                className="w-full rounded-2xl shadow-2xl"
              />
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-3 end-3 w-10 h-10 bg-white/20 hover:bg-white/30 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-colors cursor-pointer"
                aria-label={t('close')}
              >
                <X size={18} />
              </button>
              <div className="absolute bottom-4 start-4 text-white text-sm font-semibold bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                {GALLERY_IMAGES[lightbox].alt}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'
import { PRODUCTS } from '../../data/content'
import { fadeUp, staggerContainer } from '../ui/animations'

export default function Products() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <SectionHeader
            eyebrow="Nos Produits"
            title="Catalogue de produits alimentaires"
            subtitle="Une sélection rigoureuse des meilleures marques algériennes et internationales, disponibles en quantités grossistes livrées directement chez vous."
          />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {PRODUCTS.map((product, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              className="group relative rounded-3xl overflow-hidden shadow-md bg-white cursor-default"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={product.image}
                  alt={product.category}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-950/80 via-green-950/20 to-transparent" />
                {/* Category chip */}
                <div className="absolute top-4 left-4 bg-amber-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                  {product.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-gray-900 text-xl mb-2 group-hover:text-green-700 transition-colors">
                  {product.category}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{product.description}</p>

                {/* Hover reveal */}
                <AnimatePresence>
                  {hovered === i && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="mt-4"
                    >
                      <button
                        onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="w-full bg-green-700 hover:bg-green-600 text-white font-semibold py-2.5 rounded-xl text-sm transition-colors"
                      >
                        Commander ce produit
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

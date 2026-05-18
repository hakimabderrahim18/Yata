import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import { fadeUp, slideLeft, slideRight } from '../ui/animations'

const INFO = [
  {
    icon: Phone,
    label: 'Téléphone',
    value: '+213 46 000 0000',
    sub: '+213 555 000 000',
    color: 'bg-green-100 text-green-700',
    href: 'tel:+21346000000',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@yata-distribution.dz',
    sub: 'commercial@yata-distribution.dz',
    color: 'bg-amber-100 text-amber-700',
    href: 'mailto:contact@yata-distribution.dz',
  },
  {
    icon: MapPin,
    label: 'Adresse',
    value: 'Zone Industrielle, Tiaret',
    sub: '14000 - Tiaret, Algérie',
    color: 'bg-blue-100 text-blue-700',
    href: 'https://maps.google.com/?q=Tiaret,Algeria',
  },
  {
    icon: Clock,
    label: 'Horaires',
    value: 'Dim – Jeu : 8h00 – 17h00',
    sub: 'Sam : 8h00 – 13h00',
    color: 'bg-purple-100 text-purple-700',
    href: null,
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1500)
  }

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <SectionHeader
            eyebrow="Contactez-nous"
            title="Parlons de vos besoins"
            subtitle="Notre équipe commerciale est disponible pour répondre à vos demandes, établir vos devis et organiser vos livraisons dans les meilleurs délais."
          />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            {INFO.map(({ icon: Icon, label, value, sub, color, href }) => (
              <div key={label} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex gap-4 items-start">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${color}`}>
                  <Icon size={20} />
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">{label}</div>
                  {href ? (
                    <a href={href} className="font-semibold text-gray-900 hover:text-green-700 transition-colors text-sm block">
                      {value}
                    </a>
                  ) : (
                    <div className="font-semibold text-gray-900 text-sm">{value}</div>
                  )}
                  <div className="text-gray-400 text-xs mt-0.5">{sub}</div>
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="relative bg-gradient-to-br from-green-100 to-teal-50 rounded-2xl overflow-hidden h-48 border border-green-100 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=500&q=70"
                alt="Carte localisation Tiaret"
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white rounded-2xl shadow-xl px-5 py-3 text-center">
                  <MapPin size={20} className="text-green-700 mx-auto mb-1" />
                  <div className="font-bold text-gray-900 text-sm">Tiaret, Algérie</div>
                  <a
                    href="https://maps.google.com/?q=Tiaret,Algeria"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 text-xs font-medium hover:underline"
                  >
                    Voir sur Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              {submitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Message envoyé !</h3>
                  <p className="text-gray-500">Merci pour votre message. Notre équipe vous contactera dans les 24 heures.</p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }) }}
                    className="mt-6 text-green-700 font-semibold text-sm hover:underline"
                  >
                    Envoyer un autre message
                  </button>
                </motion.div>
              ) : (
                <>
                  <h3 className="font-bold text-gray-900 text-xl mb-6">Envoyez-nous un message</h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Nom complet *</label>
                        <input
                          required
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Votre nom"
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Téléphone</label>
                        <input
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+213 ..."
                          type="tel"
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Email *</label>
                      <input
                        required
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="votre@email.com"
                        type="email"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Sujet *</label>
                      <select
                        required
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all bg-white"
                      >
                        <option value="">Sélectionnez un sujet</option>
                        <option value="devis">Demande de devis</option>
                        <option value="commande">Passer une commande</option>
                        <option value="partenariat">Proposition de partenariat</option>
                        <option value="info">Informations générales</option>
                        <option value="reclamation">Réclamation</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Message *</label>
                      <textarea
                        required
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Décrivez votre besoin..."
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 bg-green-700 hover:bg-green-600 disabled:bg-green-400 text-white font-bold py-3.5 rounded-xl transition-colors text-sm shadow-md shadow-green-700/20"
                    >
                      {loading ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send size={16} />
                          Envoyer le message
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

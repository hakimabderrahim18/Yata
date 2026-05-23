import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import { useLanguage } from '../../context/LanguageContext'
import { fadeUp, slideLeft, slideRight } from '../ui/animations'

const INFO_ICONS = [Phone, Mail, MapPin, Clock]

export default function Contact() {
  const { CONTACT_INFO, t, isRtl } = useLanguage()
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('https://formsubmit.co/ajax/hakimaitabderrahim18@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Nom: form.name,
          Telephone: form.phone || 'Non renseigné',
          Email: form.email,
          Message: form.message
        })
      })

      if (response.ok) {
        setSubmitted(true)
      } else {
        triggerMailtoFallback()
      }
    } catch (error) {
      console.error('Submission error, falling back to mailto:', error)
      triggerMailtoFallback()
    } finally {
      setLoading(false)
    }
  }

  const triggerMailtoFallback = () => {
    const subject = `Nouveau message YATA de ${form.name}`
    const body = `Nom complet : ${form.name}\n` +
                 `Téléphone : ${form.phone || 'Non renseigné'}\n` +
                 `Email : ${form.email}\n\n` +
                 `Message :\n${form.message}`

    const mailtoUrl = `mailto:hakimaitabderrahim18@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoUrl
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <SectionHeader
            eyebrow={t('contactEyebrow')}
            title={t('contactTitle')}
            subtitle={t('contactSubtitle')}
          />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4 text-start"
          >
            {CONTACT_INFO.map(({ label, value, sub, color, href }, i) => {
              const Icon = INFO_ICONS[i] || Phone
              return (
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
              )
            })}

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
                  <div className="font-bold text-gray-900 text-sm">{isRtl ? 'المنطقة الصناعية، تيارت' : 'Zone Industrielle, Tiaret'}</div>
                  <a
                    href="https://maps.app.goo.gl/u7rBXBEEmZtj8v7T6?g_st=ic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 text-xs font-medium hover:underline block mt-1"
                  >
                    {t('viewOnGoogleMaps')}
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
            className="lg:col-span-3 text-start"
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t('successSent')}</h3>
                  <p className="text-gray-500 max-w-sm">{t('successSentDesc')}</p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', message: '' }) }}
                    className="mt-6 text-green-700 font-semibold text-sm hover:underline cursor-pointer"
                  >
                    {t('sendAnother')}
                  </button>
                </motion.div>
              ) : (
                <>
                  <h3 className="font-bold text-gray-900 text-xl mb-6">{t('sendUsMessage')}</h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-semibold text-gray-700 mb-1.5 block">{t('fullName')}</label>
                        <input
                          required
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder={t('fullNamePlaceholder')}
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all text-start"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-semibold text-gray-700 mb-1.5 block">{t('phoneLabel')}</label>
                        <input
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+213 ..."
                          type="tel"
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all text-start"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-gray-700 mb-1.5 block">{t('emailLabel')}</label>
                      <input
                        required
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="votre@email.com"
                        type="email"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all text-start"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-semibold text-gray-700 mb-1.5 block">{t('messageLabel')}</label>
                      <textarea
                        required
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder={t('messagePlaceholder')}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all resize-none text-start"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 bg-green-700 hover:bg-green-600 disabled:bg-green-400 text-white font-bold py-3.5 rounded-xl transition-colors text-sm shadow-md shadow-green-700/20 cursor-pointer"
                    >
                      {loading ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send size={16} className={isRtl ? 'rotate-180' : ''} />
                          {t('sendMessageBtn')}
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

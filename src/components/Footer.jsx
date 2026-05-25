import { useState } from 'react'
import { Mail, Phone, MapPin, Send, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const SvgFacebook = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)
const SvgInstagram = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16" aria-hidden="true">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
)
const SvgLinkedin = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
)
const SvgWhatsApp = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.729-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.428 2.016 13.99 1.01 11.999 1.01c-5.439 0-9.862 4.372-9.865 9.801-.001 1.836.5 3.626 1.448 5.194l-1.001 3.654 3.748-.983l-.683-.393zm11.367-7.904c-.318-.159-1.884-.93-2.175-1.036-.291-.106-.503-.159-.715.159-.211.318-.82.159-1.006 1.164-.185.212-.37.212-.688.053-.318-.159-1.341-.494-2.553-1.576-.943-.841-1.58-1.88-1.765-2.198-.185-.318-.02-.489.14-.647.143-.143.318-.371.477-.557.159-.186.212-.318.318-.53.106-.212.053-.397-.026-.557-.08-.159-.715-1.722-.979-2.357-.257-.619-.519-.536-.715-.546-.185-.01-.397-.01-.608-.01-.212 0-.556.08-.847.4-.291.318-1.111 1.087-1.111 2.65 0 1.563 1.137 3.072 1.296 3.284.159.212 2.238 3.418 5.423 4.793.757.327 1.348.522 1.81.668.761.242 1.453.208 2.002.126.612-.091 1.884-.77 2.148-1.511.265-.74.265-1.378.185-1.511-.08-.133-.291-.212-.609-.371z" />
  </svg>
)

export default function Footer() {
  const [showQrModal, setShowQrModal] = useState(false)
  const { NAV_LINKS, t, isRtl } = useLanguage()

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-gradient-to-br from-[#01140f] to-[#03241b] text-white border-t border-white/5">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-start">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1 text-start">
            <div className="flex items-center gap-2.5 mb-5">
              <svg viewBox="0 0 100 100" className="w-10 h-10 shrink-0 filter drop-shadow-[0_2px_10px_rgba(37,99,235,0.3)]" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="blueGradFoot" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1e3a8a" />
                    <stop offset="50%" stopColor="#2563eb" />
                    <stop offset="100%" stopColor="#60a5fa" />
                  </linearGradient>
                  <linearGradient id="greenGradFoot" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#14532d" />
                    <stop offset="50%" stopColor="#22c55e" />
                    <stop offset="100%" stopColor="#4ade80" />
                  </linearGradient>
                  <linearGradient id="yellowGradFoot" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#854d0e" />
                    <stop offset="50%" stopColor="#eab308" />
                    <stop offset="100%" stopColor="#fde047" />
                  </linearGradient>
                  <linearGradient id="orangeRedGradFoot" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7f1d1d" />
                    <stop offset="50%" stopColor="#ef4444" />
                    <stop offset="100%" stopColor="#f97316" />
                  </linearGradient>
                </defs>

                {/* Blue head circle */}
                <circle cx="50" cy="22" r="10" fill="url(#blueGradFoot)" />

                {/* Green arm (left) */}
                <path d="M 47 38 C 36 29, 23 30, 23 40 C 23 48, 33 49, 44 44 C 47 42, 48 40, 47 38 Z" fill="url(#greenGradFoot)" />

                {/* Yellow arm (right & diagonal body) */}
                <path d="M 48 35 C 58 25, 70 17, 77 18 C 63 28, 54 44, 52 54 C 50 64, 53 74, 57 80 C 53 70, 50 58, 48 35 Z" fill="url(#yellowGradFoot)" />

                {/* Orange-Red bottom loop */}
                <path d="M 50 54 C 46 64, 38 72, 39 78 C 41 83, 48 83, 52 78 C 53 72, 51 62, 50 54 Z" fill="url(#orangeRedGradFoot)" />
              </svg>
              <div className="text-start">
                <span className="block text-white font-extrabold text-lg leading-none">YATA</span>
                <span className="block text-amber-400 text-[10px] font-semibold tracking-widest uppercase">{t('logoSub')}</span>
              </div>
            </div>
            <p className="text-green-300 text-sm leading-relaxed mb-6">
              {t('footerDesc')}
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {[
                { icon: SvgFacebook, href: 'https://www.facebook.com/share/1CQEZmJpHx/?mibextid=wwXIfr', label: 'Facebook' },
                { icon: SvgInstagram, href: 'https://instagram.com/yatadistribution', label: 'Instagram' },
                { icon: SvgLinkedin, href: 'https://www.linkedin.com/in/yata-distribution-99a82a3b6?utm_source=share_via&utm_content=profile&utm_medium=member_ios', label: 'LinkedIn' },
                { icon: SvgWhatsApp, href: 'https://wa.me/213770590510', label: 'WhatsApp' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 bg-white/10 hover:bg-amber-500 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
            {/* QR Code Scan Footer */}
            <div className="mt-8 pt-6 border-t border-white/10 text-start group">
              <span className="block text-white font-extrabold text-xs uppercase tracking-widest mb-3.5">
                {isRtl ? 'رمز الاستجابة السريعة (QR)' : 'QR Code Officiel'}
              </span>
              <div className="flex items-start gap-4">
                <div 
                  onClick={() => setShowQrModal(true)}
                  className="w-28 h-28 rounded-2xl overflow-hidden border-2 border-white/20 bg-white p-1.5 shrink-0 shadow-lg group-hover:border-amber-400 transition-colors duration-300 cursor-zoom-in"
                  title={isRtl ? 'اضغط لتكبير الرمز' : 'Cliquez pour agrandir'}
                >
                  <img
                    src="/YATAQR.jpg"
                    alt="QR Code YATA"
                    className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="pt-1">
                  <span className="block text-amber-400 font-bold text-xs mb-1">YATA Link</span>
                  <p className="text-green-300 text-[10px] leading-relaxed max-w-[150px]">
                    {isRtl
                      ? 'امسح هذا الرمز للوصول الفوري إلى واتساب، وروابطنا الرسمية.'
                      : 'Scannez ce code pour accéder instantanément à notre WhatsApp et liens officiels.'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div className="text-start">
            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">{t('navigationHeader')}</h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="text-green-300 hover:text-amber-400 text-sm transition-colors text-start cursor-pointer"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="text-start">
            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">{t('contactHeader')}</h4>
            <ul className="space-y-3.5">
              <li className="flex gap-3 items-start">
                <MapPin size={16} className="text-amber-400 mt-0.5 shrink-0" />
                <span className="text-green-300 text-sm">{isRtl ? 'المنطقة الصناعية، تيارت 14000، الجزائر' : 'Zone Industrielle, Tiaret 14000, Algérie'}</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={16} className="text-amber-400 shrink-0" />
                <a href="tel:+213770590510" className="text-green-300 hover:text-white text-sm transition-colors">+213 (0) 770 59 05 10</a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={16} className="text-amber-400 shrink-0" />
                <a href="mailto:sarlyata14@gmail.com" className="text-green-300 hover:text-white text-sm transition-colors break-all">
                  sarlyata14@gmail.com
                </a>
              </li>
            </ul>
          </div>


        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-green-400">
          <span>{t('copyrightText')}</span>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white transition-colors">{t('legal')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('privacy')}</a>
          </div>
        </div>
      </div>

      {/* Immersive Lightbox Modal for QR Code */}
      <AnimatePresence>
        {showQrModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowQrModal(false)}
            className="fixed inset-0 z-[200] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-6 sm:p-8 max-w-sm w-full relative flex flex-col items-center shadow-2xl border border-gray-100 cursor-default"
            >
              <button
                onClick={() => setShowQrModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 hover:bg-gray-100 p-2 rounded-full transition-colors cursor-pointer"
                aria-label="Fermer"
              >
                <X size={18} />
              </button>

              <div className="w-64 h-64 rounded-2xl overflow-hidden border border-gray-100 bg-white p-2 shadow-inner mb-6 mt-2">
                <img
                  src="/YATAQR.jpg"
                  alt="QR Code YATA Agrandit"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              <div className="text-center">
                <h3 className="font-extrabold text-gray-900 text-lg tracking-tight">
                  {isRtl ? 'رمز الاستجابة السريعة YATA' : 'YATA Scan-to-Connect'}
                </h3>
                <p className="text-amber-500 font-bold text-xs mt-1 uppercase tracking-widest">
                  {isRtl ? 'تواصل فوري' : 'Accès Direct'}
                </p>
                <p className="text-gray-500 text-xs mt-3 leading-relaxed">
                  {isRtl
                    ? 'امسح هذا الرمز باستخدام كاميرا هاتفك للوصول الفوري إلى واتساب، موقعنا، وروابطنا الرسمية.'
                    : 'Scannez ce code avec la caméra de votre téléphone pour accéder instantanément à notre WhatsApp et nos liens officiels.'}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  )
}

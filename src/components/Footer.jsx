import { useState } from 'react'
import { Truck, Mail, Phone, MapPin, Send } from 'lucide-react'
import { NAV_LINKS } from '../data/content'

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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)
const SvgX = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) setSubscribed(true)
  }

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-green-950 text-white">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center">
                <Truck size={20} className="text-white" />
              </div>
              <div>
                <span className="block text-white font-extrabold text-lg leading-none">YATA</span>
                <span className="block text-amber-400 text-[10px] font-semibold tracking-widest uppercase">Distribution</span>
              </div>
            </div>
            <p className="text-green-300 text-sm leading-relaxed mb-6">
              Votre partenaire de confiance dans la distribution alimentaire en gros. Depuis Tiaret, nous approvisionnons les commerces de 24 wilayas algériennes.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {[
                { icon: SvgFacebook, href: '#', label: 'Facebook' },
                { icon: SvgInstagram, href: '#', label: 'Instagram' },
                { icon: SvgLinkedin, href: '#', label: 'LinkedIn' },
                { icon: SvgX, href: '#', label: 'X (Twitter)' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 bg-white/10 hover:bg-amber-500 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="text-green-300 hover:text-amber-400 text-sm transition-colors text-left"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3.5">
              <li className="flex gap-3 items-start">
                <MapPin size={16} className="text-amber-400 mt-0.5 shrink-0" />
                <span className="text-green-300 text-sm">Zone Industrielle, Tiaret 14000, Algérie</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={16} className="text-amber-400 shrink-0" />
                <a href="tel:+21346000000" className="text-green-300 hover:text-white text-sm transition-colors">+213 46 000 0000</a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={16} className="text-amber-400 shrink-0" />
                <a href="mailto:contact@yata-distribution.dz" className="text-green-300 hover:text-white text-sm transition-colors break-all">
                  contact@yata-distribution.dz
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">Newsletter</h4>
            <p className="text-green-300 text-sm mb-4">Recevez nos offres grossistes et actualités directement dans votre boîte mail.</p>
            {subscribed ? (
              <div className="bg-green-800/50 border border-green-600 rounded-xl px-4 py-3 text-green-300 text-sm">
                ✓ Vous êtes abonné(e) !
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre@email.com"
                  required
                  className="flex-1 bg-white/10 border border-white/20 text-white placeholder-green-400/60 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                />
                <button
                  type="submit"
                  className="w-10 h-10 bg-amber-500 hover:bg-amber-400 rounded-xl flex items-center justify-center transition-colors shrink-0"
                  aria-label="S'abonner"
                >
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-green-400">
          <span>© {new Date().getFullYear()} YATA Distribution. Tous droits réservés.</span>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

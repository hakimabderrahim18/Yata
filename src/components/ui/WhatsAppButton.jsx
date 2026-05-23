import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLanguage } from '../../context/LanguageContext'

export default function WhatsAppButton() {
  const { t } = useLanguage()

  return (
    <motion.a
      href="https://wa.me/213770590510"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t('whatsappLabel')}
      className="fixed bottom-6 end-6 z-50 flex items-center gap-2 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-600 transition-colors cursor-pointer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle size={22} />
      <span className="text-sm font-semibold hidden sm:inline">WhatsApp</span>
    </motion.a>
  )
}

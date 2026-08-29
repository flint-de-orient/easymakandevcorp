import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Phone, Mail } from 'lucide-react';

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl border border-gray-100 w-72 overflow-hidden"
          >
            <div className="bg-[#0a1628] px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#d4af37] flex items-center justify-center text-[#0a1628] font-bold text-sm">
                  EM
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">Easy Makan</p>
                  <p className="text-[#d4af37] text-xs">Typically replies instantly</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white">
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="p-4 bg-gray-50">
              <div className="bg-white rounded-xl p-3 shadow-sm text-sm text-gray-700 mb-1">
                Hi! Welcome to Easy Makan. How can we help you find your dream home? 🏡
              </div>
              <p className="text-xs text-gray-400 ml-1">Easy Makan</p>
            </div>

            <div className="p-4 flex flex-col gap-2">
              <a
                href="https://wa.me/918777654651?text=Hello%2C%20I%20am%20interested%20in%20your%20properties."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#25D366] text-white rounded-xl px-4 py-3 text-sm font-medium hover:bg-[#1ebe5d] transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </a>
              <a
                href="tel:+918777654651"
                className="flex items-center gap-3 bg-[#0a1628] text-white rounded-xl px-4 py-3 text-sm font-medium hover:bg-[#0a1628]/90 transition-colors"
              >
                <Phone className="h-4 w-4" />
                Call +91 8777654651
              </a>
              <a
                href="mailto:easymakandev@gmail.com"
                className="flex items-center gap-3 border border-[#d4af37] text-[#d4af37] rounded-xl px-4 py-3 text-sm font-medium hover:bg-[#d4af37]/10 transition-colors"
              >
                <Mail className="h-4 w-4" />
                Send an Email
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center hover:bg-[#1ebe5d] transition-colors"
        aria-label="Open chat"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <X className="h-6 w-6" />
            </motion.span>
          ) : (
            <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <MessageCircle className="h-6 w-6" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}

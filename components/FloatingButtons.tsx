import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { PHONE_NUMBER, WHATSAPP_NUMBER } from '../constants';

const FloatingButtons: React.FC = () => {
  return (
    <>
      {/* Bottom LEFT - Phone Call */}
      <motion.a
        href={`tel:${PHONE_NUMBER}`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
        className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue shadow-lg shadow-blue-900/40 transition-colors hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
        aria-label="Ligar agora"
      >
        <Phone className="h-6 w-6 text-white" />
        <span className="absolute -top-2 -right-2 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-500"></span>
        </span>
      </motion.a>

      {/* Bottom RIGHT - WhatsApp */}
      <motion.a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1.2 }}
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 shadow-lg shadow-green-600/40 transition-colors hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300"
        aria-label="Contactar via WhatsApp"
      >
        <MessageCircle className="h-8 w-8 text-white" />
        <span className="absolute -top-1 -right-1 flex h-5 w-5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-5 w-5 bg-green-400"></span>
        </span>
      </motion.a>
    </>
  );
};

export default FloatingButtons;
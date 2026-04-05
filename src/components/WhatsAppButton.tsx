import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  const phoneNumber = "254722838336"; 
  const message = encodeURIComponent("Hello Kesma Contractor's, I would like to inquire about your construction services.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
      title="Book via WhatsApp"
    >
      <div className="absolute right-full mr-3 bg-white text-slate-900 px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Book Services Online
      </div>
      <MessageCircle size={32} />
    </motion.a>
  );
};

export default WhatsAppButton;
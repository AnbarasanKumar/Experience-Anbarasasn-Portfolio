import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

interface FloatingWhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

const FloatingWhatsAppButton: React.FC<FloatingWhatsAppButtonProps> = ({
  phoneNumber,
  message = "",
}) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-5 rounded-3xl shadow-2xl flex items-center justify-center group"
      title="Chat with me on WhatsApp"
    >
      {/* Ping Animation Ring */}
      <span className="absolute inset-0 rounded-3xl bg-[#25D366] animate-ping opacity-20 group-hover:opacity-40" />
      
      <div className="absolute inset-0 bg-[#25D366] rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
      <FaWhatsapp className="w-8 h-8 relative z-10" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl text-xs font-bold text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat with me
      </span>
    </motion.a>
  );
};

export default FloatingWhatsAppButton;

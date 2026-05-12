import React from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import QRCode from "react-qr-code";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/AnbarasanKumar", label: "GitHub" },
    { icon: FaEnvelope, href: "mailto:anbarasanpno18@gmail.com", label: "Email" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/anbarasan-kumar-ab2a40288", label: "LinkedIn" },
  ];

  const quickLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Connect", id: "connect" },
  ];

  const scrollToSection = (id: string) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const section = document.getElementById(id);
    if (!section) return;
    const y = section.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#1a1a1a] text-white py-24 overflow-hidden border-t border-white/5">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-500/5 blur-[120px] rounded-full" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20"
        >
          {/* Brand Column */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            className="lg:col-span-4 space-y-8"
          >
            <motion.button
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("home")}
              className="relative w-24 h-24 rounded-3xl overflow-hidden border-2 border-white/10 p-1 group shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src="Anbarasan%20logo.png"
                alt="Logo"
                className="w-full h-full rounded-2xl object-cover relative z-10"
              />
            </motion.button>
            <div className="space-y-4">
              <h3 className="text-2xl font-black tracking-tight text-white uppercase tracking-[0.2em]">Anbarasan Kumar</h3>
              <p className="text-gray-400 leading-relaxed max-w-sm text-sm">
                Engineering sophisticated digital experiences with a focus on scalable backend architecture and intuitive full-stack solutions.
              </p>
            </div>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -8, scale: 1.1, backgroundColor: "rgba(45, 212, 191, 0.1)" }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-gray-400 hover:text-white border border-white/5 hover:border-teal-500/30 transition-all duration-300"
                  aria-label={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            className="lg:col-span-2 space-y-8"
          >
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-teal-400">Navigation</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-teal-400 transition-colors duration-300 font-bold text-sm tracking-wide"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Details */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            className="lg:col-span-3 space-y-8"
          >
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-indigo-400">Contact Info</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4 text-gray-400 group cursor-pointer">
                <FaMapMarkerAlt className="mt-1 text-indigo-500 group-hover:scale-125 transition-transform" />
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Parangipettai%2C+Tamil+Nadu%2C+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group-hover:text-white transition-colors text-sm"
                >
                  Parangipettai, Tamil Nadu, India
                </a>
              </div>
              <div className="flex items-start gap-4 text-gray-400 group cursor-pointer">
                <FaPhoneAlt className="mt-1 text-indigo-500 group-hover:scale-125 transition-transform" />
                <a href="tel:+919787638123" className="group-hover:text-white transition-colors text-sm">+91 9787638123</a>
              </div>
              <div className="flex items-start gap-4 text-gray-400 group cursor-pointer">
                <FaEnvelope className="mt-1 text-indigo-500 group-hover:scale-125 transition-transform" />
                <a href="mailto:anbarasanpno18@gmail.com" className="group-hover:text-white transition-colors text-sm">anbarasanpno18@gmail.com</a>
              </div>
            </div>
          </motion.div>

          {/* QR Column */}
          <motion.div 
            id="connect"
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
            }}
            className="lg:col-span-3 flex flex-col items-center lg:items-end space-y-8"
          >
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white">Digital Handshake</h4>
            <motion.div 
              whileHover={{ scale: 1.05, rotate: -2 }}
              className="p-5 bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-4 border-white/10"
            >
              <QRCode
                value="https://wa.me/919787638123"
                size={140}
                bgColor="#ffffff"
                fgColor="#1a1a1a"
                level="H"
              />
            </motion.div>
            <p className="text-gray-500 text-[10px] text-center lg:text-right font-bold uppercase tracking-widest italic">
              Scan to connect directly via WhatsApp
            </p>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            © {currentYear} Anbarasan K. Built with Passion & Precision.
          </p>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-gray-600">
            <span className="hover:text-teal-400 cursor-default transition-colors">React</span>
            <span className="hover:text-indigo-400 cursor-default transition-colors">Spring Boot</span>
            <span className="hover:text-teal-400 cursor-default transition-colors">Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer >
  );
};

export default Footer;
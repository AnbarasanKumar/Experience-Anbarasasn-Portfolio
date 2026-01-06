import React from "react";
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
    { label: "Contact", id: "contact" },
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
    <footer className="relative bg-gray-900 text-white py-10 font-sans overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full opacity-20 bg-gradient-to-tr from-blue-500 to-green-400 animate-float -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-20 bg-gradient-to-br from-purple-500 to-pink-400 animate-float delay-4s -z-10"></div>
      <div className="absolute top-1/2 right-1/2 w-72 h-72 rounded-full opacity-10 bg-gradient-to-r from-yellow-300 to-red-400 animate-float delay-8s -z-10"></div>

      <div className="max-w-6xl mx-auto px-4 animate-fade-up space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center md:text-left">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <button
              onClick={() => scrollToSection("home")}
              aria-label="Back to top"
              className="relative w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 mb-3 rotate-logo"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-green-400 via-blue-500 to-yellow-300"></div>
              <div className="absolute inset-[4px] rounded-full bg-gray-900 overflow-hidden flex items-center justify-center">
                <img
                  /* FIXED: Removed leading slash and added URL encoding for the space */
                  src="Anbarasan%20logo.png"
                  alt="anbarasan Logo"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </button>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base max-w-xs">
              Full-Stack & Backend with hands-on experience in web development and Java backend development, focused on building scalable and secure applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-1.5">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Services</h3>
            <ul className="space-y-1.5 text-gray-300">
              <li>Full-Stack Development</li>
              <li>Web Development</li>
              <li>Backend Development</li>
            </ul>
          </div>

          {/* Location */}
          <div>
  <h3 className="text-lg font-semibold mb-3">Location</h3>
  
  {/* Location */}
  <div className="flex items-center gap-2 text-gray-300 justify-center md:justify-start mb-2">
    <FaMapMarkerAlt className="w-4 h-4 flex-shrink-0" />
    <span>Parangipettai</span>
  </div>

  {/* Phone - Optimized for mobile tap */}
  <div className="flex items-center gap-2 text-gray-300 justify-center md:justify-start mb-2">
    <FaPhoneAlt className="w-4 h-4 flex-shrink-0" />
    <a 
      href="tel:+919787638123" 
      className="hover:text-white transition-colors duration-200"
    >
      +91 9787638123
    </a>
  </div>

  {/* Email - Fixed to prevent auto-launch warnings */}
  <div className="flex items-center gap-2 text-gray-300 justify-center md:justify-start">
    <FaEnvelope className="w-4 h-4 flex-shrink-0" />
    <a 
      href="mailto:anbarasanpno18@gmail.com" 
      className="hover:text-white text-sm transition-colors duration-200"
      /* We use div instead of p to avoid browser parsing conflicts with nested links */
    >
      anbarasanpno18@gmail.com
    </a>
  </div>
</div>

          {/* QR Code */}
          <div className="flex flex-col items-center md:items-end mt-4 md:mt-0">
            <p className="font-semibold mb-2 text-center md:text-right">Scan to WhatsApp</p>
            <div className="bg-white p-2 rounded-lg">
              <QRCode
  value="https://wa.me/919787638123"
  size={120}
  bgColor="#ffffff"
  fgColor="#000000"
  level="H" // 'H' (High) helps the QR code scan even if slightly damaged
/>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-6 flex-wrap">
          {socialLinks.map(({ icon: Icon, href, label }, i) => (
            <a
              key={i}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full relative overflow-hidden group"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-yellow-400 to-yellow-300 animate-spin-smooth"></div>
              <div className="absolute inset-[2px] rounded-full bg-gray-900 flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                <Icon className="relative w-6 h-6 text-white group-hover:text-black z-10" />
              </div>
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-4 text-center">
          <p className="text-sm tracking-wider text-gray-400">
            © {currentYear} Anbarasan K. All rights reserved.
          </p>
        </div>
      </div>

      <style>
        {`
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-up { animation: fadeUp 1s ease-out forwards; }

          @keyframes rotateLogo { to { transform: rotate(360deg); } }
          .rotate-logo { animation: rotateLogo 20s linear infinite; }

          @keyframes float { 0%,100%{transform:translateY(0);}50%{transform:translateY(-30px);} }
          .animate-float { animation: float 12s ease-in-out infinite; }
          .delay-4s { animation-delay: 4s; }
          .delay-8s { animation-delay: 8s; }

          @keyframes spin-smooth {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .animate-spin-smooth { animation: spin-smooth 8s linear infinite; }
        `}
      </style>
    </footer>
  );
};

export default Footer;
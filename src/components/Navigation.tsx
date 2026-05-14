"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Methodology", id: "methodology" },
  { label: "Services", id: "services" },
  { label: "Philosophy", id: "values" },
  { label: "Projects", id: "projects" },
  { label: "Connect", id: "contact" },
];

const NAVBAR_HEIGHT = 80;

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (id: string) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsMobileMenuOpen(false);
      return;
    }

    const el = document.getElementById(id);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;

    window.scrollTo({ top: y, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (window.scrollY < 100) {
        setActiveSection("home");
        return;
      }

      const scrollPosition = window.scrollY + NAVBAR_HEIGHT + 10;

      for (const item of NAV_ITEMS) {
        if (item.id === "home") continue;

        const section = document.getElementById(item.id);
        if (!section) continue;

        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Profile picture */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed top-3 left-4 md:top-4 md:left-6 z-[60] w-10 h-10 md:w-14 md:h-14 rounded-full border-2 border-indigo-600/50 shadow-2xl overflow-hidden backdrop-blur-sm pointer-events-auto"
      >
        <img
          src="Anbarasan%20logo.png" 
          alt="Anbarasan"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </motion.div>

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "py-4 bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-lg" 
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-end items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
            className="hidden md:flex items-center space-x-2"
          >
            {NAV_ITEMS.map((item) => (
              <motion.button
                key={item.id}
                variants={{
                  hidden: { opacity: 0, y: -20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                }}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-5 py-2.5 rounded-xl font-bold text-sm tracking-wide transition-all duration-300
                  ${
                    activeSection === item.id
                      ? "text-teal-600 bg-slate-50 shadow-sm"
                      : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                  }
                `}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div 
                    layoutId="navActive"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-teal-500 rounded-full shadow-[0_0_8px_rgba(20,184,166,0.5)]"
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          <button
            className="md:hidden p-2 text-slate-500 hover:text-slate-900 transition-colors z-[70] relative"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden fixed inset-0 top-0 left-0 w-full h-screen bg-white z-[65] flex flex-col pt-24 px-8 overflow-y-auto"
            >
              <div className="flex flex-col space-y-4 pb-20">
                {NAV_ITEMS.map((item, idx) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-8 py-5 rounded-2xl font-bold text-left text-lg transition-all
                      ${
                        activeSection === item.id
                          ? "bg-indigo-600 text-white shadow-xl shadow-indigo-600/20"
                          : "text-slate-500 bg-slate-50 hover:text-slate-900 border border-slate-100"
                      }
                    `}
                  >
                    <div className="flex items-center justify-between">
                      {item.label}
                      {activeSection === item.id && (
                        <motion.div 
                          layoutId="mobileNavActive"
                          className="w-2 h-2 bg-white rounded-full"
                        />
                      )}
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navigation;

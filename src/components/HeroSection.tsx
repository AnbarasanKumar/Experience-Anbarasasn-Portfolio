import React, { useState, useEffect, memo } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import {
  FaPython, FaJava, FaHtml5, FaCss3Alt, FaGitAlt,
} from 'react-icons/fa';
import {
  SiMysql, SiJavascript,
} from 'react-icons/si';

const Icon = memo(({ icon: IconComp, title, color }: any) => (
  <motion.div
    className="relative group p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/5 hover:border-white/20 transition-all duration-300"
    whileHover={{ y: -5, scale: 1.1 }}
  >
    <IconComp
      title={title}
      className={`text-gray-400 group-hover:text-white transition-colors duration-300`}
    />
  </motion.div>
));

const HeroSection: React.FC = () => {
  const roles = [
    'Full Stack Engineer',
    'Java Specialist',
    'Spring Boot Developer',
    'React & Frontend Expert'
  ];

  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(70);

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;

  useEffect(() => {
    const currentRole = `I am a ${roles[roleIndex]}`;
    const timer = setTimeout(() => {
      const adjustedSpeed = speed + (isMobile ? -20 : 0);

      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentRole.length) {
          setIsDeleting(true);
          setSpeed(1500);
        } else {
          setSpeed(70);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
        setSpeed(50);
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, roles, speed, isMobile]);

  const techIcons = [
    { icon: FaPython, title: "Python" },
    { icon: FaJava, title: "Java" },
    { icon: FaHtml5, title: "HTML5" },
    { icon: FaCss3Alt, title: "CSS3" },
    { icon: SiJavascript, title: "JavaScript" },
    { icon: SiMysql, title: "MySQL" },
    { icon: FaGitAlt, title: "GitHub" },
  ];

  const iconScrollDuration = isMobile ? 25 : 40;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="hero" className="min-h-screen bg-[#1a1a1a] flex items-center justify-center px-6 relative overflow-hidden">
      {/* Animated Background Mesh */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ 
            background: [
              "radial-gradient(circle at 20% 20%, rgba(79, 70, 229, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 80%, rgba(20, 184, 166, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 80%, rgba(79, 70, 229, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(20, 184, 166, 0.15) 0%, transparent 50%)",
            ]
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10 w-full py-20 md:py-0">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-white space-y-10"
        >
          <div className="space-y-4">
            <motion.h1 
              variants={itemVariants}
              id="hero-heading" 
              className="text-5xl md:text-8xl font-extrabold tracking-tight leading-tight"
            >
              Anbarasan <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-teal-400 to-indigo-400 bg-[length:200%_auto] animate-gradient-x">Kumar</span>
            </motion.h1>
            
            <motion.div variants={itemVariants} className="h-12 flex items-center">
              <p className="text-2xl md:text-4xl text-gray-300 font-medium">
                {displayText}
                <motion.span 
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-1 h-8 bg-teal-400 ml-2 align-middle shadow-[0_0_15px_#2dd4bf]"
                />
              </p>
            </motion.div>
          </div>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-2xl text-gray-400 leading-relaxed max-w-2xl font-light"
          >
            Engineering enterprise-grade systems like <span className="text-white font-semibold">Hostel Management, Course Registration, and E-commerce platforms</span>. Specializing in scalable Java architectures and robust full-stack digital solutions.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-6">
            <motion.button 
              onClick={() => {
                const el = document.getElementById('projects');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="bg-indigo-600 hover:bg-indigo-700 px-12 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-indigo-500/20"
            >
              View Projects
            </motion.button>
            <motion.button 
              onClick={() => {
                const el = document.getElementById('connect');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.05, y: -2, backgroundColor: "rgba(45, 212, 191, 0.1)" }}
              whileTap={{ scale: 0.98 }}
              className="border-2 border-teal-500/30 text-teal-400 px-12 py-5 rounded-2xl font-bold text-lg transition-all backdrop-blur-sm"
            >
              Get In Touch
            </motion.button>
          </motion.div>

          <motion.div variants={itemVariants} className="pt-12 space-y-6">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500 font-bold">Tech Stack Expertise</p>
            <div className="overflow-hidden relative w-full h-24 group">
              <motion.div
                className="absolute flex gap-4 md:gap-8"
                animate={{ x: ['0%', '-50%'] }}
                transition={{ x: { repeat: Infinity, repeatType: 'loop', duration: iconScrollDuration, ease: 'linear' } }}
              >
                {[...techIcons, ...techIcons].map((t, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
                    className="text-3xl md:text-4xl text-gray-500 hover:text-white transition-all duration-300 bg-white/5 p-4 md:p-5 rounded-2xl backdrop-blur-md border border-white/5 cursor-pointer shadow-lg"
                  >
                    <t.icon />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative flex justify-center items-center"
        >
          {/* Decorative Elements */}
          <div className="absolute w-[130%] h-[130%] rounded-full border border-indigo-500/10 animate-[spin_30s_linear_infinite] pointer-events-none" />
          <div className="absolute w-[115%] h-[115%] rounded-full border border-teal-500/10 animate-[spin_25s_linear_infinite_reverse] pointer-events-none" />
          
          <div className="relative z-10">
            <motion.div
              animate={{ 
                y: [0, -30, 0],
                rotate: [0, 2, 0]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/40 to-teal-500/40 rounded-[4rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute -inset-1 bg-gradient-to-tr from-indigo-500 to-teal-500 rounded-[4rem] opacity-20 blur group-hover:opacity-40 transition duration-1000" />
              <img 
                src="Anbarasan-image.png" 
                alt="Anbarasan Kumar"
                className="w-80 h-80 md:w-[500px] md:h-[500px] object-cover rounded-[4rem] border-2 border-white/10 shadow-2xl relative z-10 transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          animation: gradient-x 5s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
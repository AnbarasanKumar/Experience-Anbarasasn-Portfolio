import React, { useState, useEffect, memo } from 'react';
import { motion, AnimatePresence, Variants, useScroll, useTransform } from 'framer-motion';
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
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

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
    <section id="hero" className="min-h-screen bg-gradient-to-br from-white via-indigo-50/40 to-teal-50/30 flex items-center justify-center px-6 relative overflow-hidden">
      {/* Animated Background Mesh */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          style={{ y: y1 }}
          animate={{ 
            background: [
              'radial-gradient(circle at 20% 20%, rgba(20, 184, 166, 0.05) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 80%, rgba(79, 70, 229, 0.05) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 20%, rgba(20, 184, 166, 0.05) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0"
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-teal-500/5 blur-[120px] rounded-full"
        />
        <motion.div 
          style={{ y: y1 }}
          className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-indigo-500/5 blur-[120px] rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10 w-full py-20 md:py-0">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-slate-900 space-y-10"
        >
          <div className="space-y-4">
            {/* Availability Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 border border-teal-200 rounded-full"
            >
              <motion.span
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-2 h-2 bg-teal-500 rounded-full"
              />
              <span className="text-teal-700 text-xs font-black uppercase tracking-widest">Available for Work</span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              id="hero-heading" 
              className="text-5xl md:text-8xl font-extrabold tracking-tight leading-tight text-slate-900"
            >
              Anbarasan <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-teal-500 to-indigo-600 bg-[length:200%_auto] animate-gradient-x">Kumar</span>
            </motion.h1>
            
            <motion.div variants={itemVariants} className="h-12 flex items-center">
              <p className="text-2xl md:text-4xl text-slate-600 font-medium">
                {displayText}
                <motion.span 
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-1 h-8 bg-teal-500 ml-2 align-middle shadow-[0_0_15px_rgba(20,184,166,0.3)]"
                />
              </p>
            </motion.div>
          </div>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-2xl text-slate-500 leading-relaxed max-w-2xl font-light"
          >
            Engineering enterprise-grade systems like <span className="text-slate-900 font-semibold">Hostel Management, Course Registration, and E-commerce platforms</span>. Specializing in scalable Java architectures and robust full-stack digital solutions.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-6">
            <motion.button 
              onClick={() => {
                const el = document.getElementById('projects');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="bg-indigo-600 hover:bg-indigo-700 px-12 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-indigo-600/20 text-white"
            >
              View Projects
            </motion.button>
            <motion.button 
              onClick={() => {
                const el = document.getElementById('connect');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.05, y: -2, backgroundColor: "rgba(20, 184, 166, 0.05)" }}
              whileTap={{ scale: 0.98 }}
              className="border-2 border-teal-500/30 text-teal-600 px-12 py-5 rounded-2xl font-bold text-lg transition-all backdrop-blur-sm"
            >
              Get In Touch
            </motion.button>
          </motion.div>

          <motion.div variants={itemVariants} className="pt-12 space-y-6">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400 font-bold">Tech Stack Expertise</p>
            <div className="overflow-hidden relative w-full h-24 group">
              <motion.div
                className="absolute flex gap-4 md:gap-8"
                animate={{ x: ['0%', '-50%'] }}
                transition={{ x: { repeat: Infinity, repeatType: 'loop', duration: iconScrollDuration, ease: 'linear' } }}
              >
                {[...techIcons, ...techIcons].map((t, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.05)" }}
                    className="text-3xl md:text-4xl text-slate-400 hover:text-slate-900 transition-all duration-300 bg-slate-100 p-4 md:p-5 rounded-2xl border border-slate-200 cursor-pointer shadow-sm"
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
            {/* Thought/Innovation Orbs */}
            <div className="absolute inset-0 pointer-events-none">
              {[
                { icon: <FaJava />, delay: 0, x: -100, y: -150, size: "text-2xl" },
                { icon: <FaPython />, delay: 2, x: 120, y: -180, size: "text-xl" },
                { icon: <SiJavascript />, delay: 1, x: -150, y: 50, size: "text-2xl" },
                { icon: <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity }} className="w-3 h-3 bg-teal-400 rounded-full" />, delay: 0.5, x: 180, y: 100, size: "" },
                { icon: <motion.div animate={{ opacity: [0.2, 0.8, 0.2] }} transition={{ duration: 3, repeat: Infinity }} className="w-2 h-2 bg-indigo-400 rounded-full" />, delay: 1.5, x: -80, y: 180, size: "" },
              ].map((orb, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: [0, 0.8, 0],
                    x: [orb.x, orb.x + 20, orb.x],
                    y: [orb.y, orb.y - 30, orb.y],
                    scale: [0.8, 1.1, 0.8]
                  }}
                  transition={{ 
                    duration: 5 + i, 
                    repeat: Infinity, 
                    delay: orb.delay,
                    ease: "easeInOut" 
                  }}
                  className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 text-teal-500 shadow-xl ${orb.size}`}
                >
                  {orb.icon}
                </motion.div>
              ))}
            </div>

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
              
              {/* Thinking Halo Effect */}
              <motion.div 
                animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 bg-teal-400/20 blur-[60px] rounded-full pointer-events-none"
              />

              <img 
                src="Anbarasan-image.png" 
                alt="Anbarasan Kumar"
                className="w-80 h-80 md:w-[500px] md:h-[500px] object-cover rounded-[4rem] border-2 border-white shadow-2xl relative z-10 transition-transform duration-700 group-hover:scale-[1.02]"
              />
              {/* Professional Role Overlay */}
              <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-[4rem] flex flex-col items-center justify-center bg-white/20 backdrop-blur-2xl p-8 text-center border-4 border-white/40 shadow-[inset_0_0_100px_rgba(255,255,255,0.2)]">
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 100 }}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <p className="text-indigo-600 font-black text-sm uppercase tracking-[0.4em] mb-4">Professional Profile</p>
                    <div className="h-1 w-16 bg-gradient-to-r from-teal-500 to-indigo-600 mx-auto rounded-full" />
                  </div>
                  
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <p className="text-slate-900 font-black text-3xl md:text-4xl leading-tight">Software Engineer</p>
                      <p className="text-teal-600 font-bold text-xl">Full Stack Specialist</p>
                    </div>
                    
                    <div className="flex flex-wrap justify-center gap-3 pt-4">
                      {['Java', 'Spring Boot', 'React', 'Cloud'].map((skill) => (
                        <span key={skill} className="px-4 py-2 bg-white/40 backdrop-blur-md rounded-xl text-[10px] font-black text-slate-800 uppercase tracking-widest border border-white/50 shadow-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8">
                    <motion.div 
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-2xl text-xs font-black uppercase tracking-widest shadow-xl shadow-indigo-600/30"
                    >
                      <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
                      Open for Collaboration
                    </motion.div>
                  </div>
                </motion.div>
              </div>
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

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: [0, 12, 0] }}
        transition={{ delay: 2, duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        onClick={() => {
          const el = document.getElementById('about');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group"
      >
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 group-hover:text-teal-600 transition-colors">Scroll</span>
        <div className="w-6 h-10 border-2 border-slate-300 group-hover:border-teal-500 rounded-full flex items-start justify-center pt-2 transition-colors">
          <motion.div
            animate={{ y: [0, 8, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-slate-400 group-hover:bg-teal-500 rounded-full transition-colors"
          />
        </div>
      </motion.div>

    </section>
  );
};

export default HeroSection;

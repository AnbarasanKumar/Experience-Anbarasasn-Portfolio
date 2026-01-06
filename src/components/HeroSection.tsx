import React, { useState, useEffect, memo } from 'react';
import { motion } from 'framer-motion';
import {
  FaPython, FaJava, FaHtml5, FaCss3Alt, FaGitAlt,
} from 'react-icons/fa';
import {
  SiMysql, SiJavascript,
} from 'react-icons/si';

const Icon = memo(({ icon: IconComp, title, color }: any) => (
  <motion.div
    className="relative group"
    initial={{ filter: 'hue-rotate(0deg)' }}
    animate={{ filter: ['hue-rotate(0deg)', 'hue-rotate(360deg)'] }}
    transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
  >
    <IconComp
      title={title}
      className={`text-gray-300 hover:text-${color} transition-transform duration-300 hover:scale-110`}
    />
    <motion.div
      className="absolute w-2 h-2 bg-white rounded-full opacity-0"
      initial={{ opacity: 0, scale: 0 }}
      whileHover={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
      transition={{ duration: 0.6, repeat: 1 }}
      style={{ top: "-4px", left: "50%" }}
    />
  </motion.div>
));

const HeroSection: React.FC = () => {
  const roles = [
    'Software Engineer',
    'Problem Solver',
    'Full-Stack Developer',
    'Web Developer'
  ];

  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(70);

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;

  useEffect(() => {
    const currentRole = `Hi, I'm a ${roles[roleIndex]}`;
    const timer = setTimeout(() => {
      const adjustedSpeed = speed + (isMobile ? -20 : 0);

      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentRole.length) {
          setIsDeleting(true);
          setSpeed(isMobile ? 300 : 500);
        } else {
          setSpeed(adjustedSpeed);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
        setSpeed(isMobile ? 50 : 70);
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, roles, speed, isMobile]);

  const techIcons = [
    { icon: FaPython, title: "Python", color: "yellow-400" },
    { icon: FaJava, title: "Java", color: "red-500" },
    { icon: FaHtml5, title: "HTML5", color: "orange-500" },
    { icon: FaCss3Alt, title: "CSS3", color: "blue-400" },
    { icon: SiJavascript, title: "JavaScript", color: "yellow-300" },
    { icon: SiMysql, title: "MySQL", color: "blue-400" },
    { icon: FaGitAlt, title: "GitHub", color: "red-400" },
  ];

  const iconsLayer1 = isMobile ? [...techIcons, ...techIcons] : [...techIcons, ...techIcons];
  const iconsLayer2 = isMobile ? [...techIcons.reverse(), ...techIcons.reverse()] : [...techIcons.reverse(), ...techIcons.reverse()];

  const [particles] = useState(() =>
    Array.from({ length: 10 }).map(() => ({
      top: Math.random() * 24 + 'px',
      left: Math.random() * 100 + '%',
      size: Math.random() * 5 + 2 + 'px',
      delay: Math.random() * 5,
    }))
  );

  const iconScrollDuration = isMobile ? 30 : 60;

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center px-4 relative">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="text-white space-y-3 md:space-y-4 z-5 relative">
          <h1 className="text-2xl md:text-2xl font-bold leading-tight whitespace-nowrap">
            <span className="text-blue-200">Anbarasan K</span>
          </h1>
          <p className="text-3xl md:text-4xl text-gray-300 font-semibold h-10">
            {displayText}
            <span className="border-r-2 border-gray-300 animate-pulse ml-1"></span>
          </p>
          <p className="text-xl md:text-xl text-gray-200 leading-relaxed max-w-lg mt-2">
            I am a passionate Java / Full Stack Developer skilled in Java, Spring Boot, MySQL, HTML, CSS, and JavaScript. I enjoy problem-solving and developing secure, scalable applications.
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <a href="#projects" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg text-white">Projects</a>
            <a href="#contact" className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg">Contact</a>
          </div>

          <div className="overflow-hidden relative h-24 w-full mt-12 z-10">
            <motion.div
              className="absolute flex gap-10 text-6xl md:text-7xl"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ x: { repeat: Infinity, repeatType: 'loop', duration: iconScrollDuration, ease: 'linear' } }}
            >
              {iconsLayer1.map((t, i) => <Icon key={i} {...t} />)}
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex justify-center z-10"
        >
          <motion.div
            className="relative group"
            animate={{ y: [0, isMobile ? -5 : -10, 0] }}
            transition={{ repeat: Infinity, repeatType: 'loop', duration: 4, ease: 'easeInOut' }}
          >
            <motion.img
              /* FIXED PATH FOR GITHUB PAGES */
              src="Anbarasan-image.jpeg" 
              alt="Anbarasan"
              loading="lazy"
              className="w-80 h-80 md:w-96 md:h-96 rounded-full object-cover border-4 border-blue-400 shadow-2xl"
              whileHover={{ scale: 1.05 }}
            />
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-30 animate-pulse group-hover:opacity-50 transition-opacity duration-500"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
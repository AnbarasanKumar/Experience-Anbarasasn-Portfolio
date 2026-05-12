import React from 'react';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import SkillsSection from './SkillsSection';
import Experience from './Experience'; 
import ProjectsSection from './ProjectsSection';
import TestimonialsSection from './TestimonialsSection';
import Footer from './Footer';
import FloatingWhatsAppButton from './FloatingWhatsAppButton';

import { motion, useScroll, useSpring } from 'framer-motion';

import CustomCursor from './CustomCursor';

const AppLayout: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="min-h-screen relative overflow-x-hidden bg-[#f8fafc]"
    >
      <CustomCursor />
      <div className="fixed inset-0 z-[-1] opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/white-diamond.png')]" />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 via-indigo-500 to-teal-500 z-[100] origin-left"
        style={{ scaleX }}
      />
      <a href="#main" className="sr-only">Skip to main content</a>
      <Navigation />
      <main id="main" role="main" aria-label="Main content">
        <section aria-labelledby="hero-heading">
          <HeroSection />
        </section>
        <section aria-labelledby="about-heading">
          <AboutSection />
        </section>
        <section aria-labelledby="skills-heading">
          <SkillsSection />
        </section>
        <section aria-labelledby="experience-heading">
          <Experience /> 
        </section>
        <section aria-labelledby="projects-heading">
          <ProjectsSection />
        </section>
        <section aria-labelledby="testimonials-heading">
          <TestimonialsSection />
        </section>
      </main>
      <Footer />

      <FloatingWhatsAppButton
        phoneNumber="+919787638123"
        message="Hi Anbarasan — I saw your portfolio and would like to connect!"
      />
    </motion.div>
  );
};

export default AppLayout;

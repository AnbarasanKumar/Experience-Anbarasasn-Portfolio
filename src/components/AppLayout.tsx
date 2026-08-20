import React, { lazy, Suspense } from 'react';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import SkillsSection from './SkillsSection';

const Experience = lazy(() => import('./Experience'));
const ProjectsSection = lazy(() => import('./ProjectsSection'));
const MethodologySection = lazy(() => import('./MethodologySection'));
const ServicesSection = lazy(() => import('./ServicesSection'));
const TestimonialsSection = lazy(() => import('./TestimonialsSection'));
const ValuesSection = lazy(() => import('./ValuesSection'));
const ContactSection = lazy(() => import('./ContactSection'));
const Footer = lazy(() => import('./Footer'));
const FloatingWhatsAppButton = lazy(() => import('./FloatingWhatsAppButton'));

import { motion, useScroll, useSpring } from 'framer-motion';


const AppLayout: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="min-h-screen relative overflow-x-hidden bg-[#f8fafc] dark:bg-slate-950 text-slate-900 dark:text-slate-50"
    >
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
        <Suspense fallback={<div className="min-h-[50vh] flex items-center justify-center">Loading...</div>}>
          <section aria-labelledby="experience-heading">
            <Experience /> 
          </section>
          <section aria-labelledby="methodology-heading">
            <MethodologySection />
          </section>
          <section aria-labelledby="services-heading">
            <ServicesSection />
          </section>
          <section aria-labelledby="values-heading">
            <ValuesSection />
          </section>
          <section aria-labelledby="projects-heading">
            <ProjectsSection />
          </section>
          <section aria-labelledby="testimonials-heading">
            <TestimonialsSection />
          </section>
          <section aria-labelledby="contact-heading">
            <ContactSection />
          </section>
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />

        <FloatingWhatsAppButton
          phoneNumber="+919787638123"
          message="Hi Anbarasan — I saw your portfolio and would like to connect!"
        />
      </Suspense>
    </motion.div>
  );
};

export default AppLayout;

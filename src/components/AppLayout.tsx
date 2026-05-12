import React from 'react';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import SkillsSection from './SkillsSection';
import Experience from './Experience'; 
import ProjectsSection from './ProjectsSection';
import TestimonialsSection from './TestimonialsSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import FloatingWhatsAppButton from './FloatingWhatsAppButton';

const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen relative">
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
        <section aria-labelledby="contact-heading">
          <ContactSection />
        </section>
      </main>
      <Footer />

      <FloatingWhatsAppButton
        phoneNumber="+919787638123"
        message="Hi Anbarasan — I saw your portfolio and would like to connect!"
      />
    </div>
  );
};

export default AppLayout;
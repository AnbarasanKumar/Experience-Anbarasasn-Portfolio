import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCogs, FaDatabase, FaBrain, FaTimes, FaCheckCircle } from 'react-icons/fa';

const services = [
  {
    title: 'Enterprise Full-Stack Systems',
    description: 'Building end-to-end scalable solutions using Java, Spring Boot, and React with a core focus on complex business logic and seamless user experiences.',
    icon: <FaCogs />,
    color: 'from-blue-600 to-indigo-600',
    solutions: [
      'Architecting Scalable E-Commerce Platforms',
      'Modular Management Portals (Hostel & Course)',
      'Custom ERP & Enterprise CRM Integrations',
      'High-Performance Progressive Web Apps (PWAs)'
    ]
  },
  {
    title: 'High-Performance Backend Architectures',
    description: 'Designing and optimizing RESTful APIs and microservices engineered for sub-second latency and high-concurrency enterprise environments.',
    icon: <FaDatabase />,
    color: 'from-teal-500 to-emerald-600',
    solutions: [
      'Microservices Decomposition & Orchestration',
      'Database Optimization (MySQL / Oracle)',
      'Advanced Security Hardening & JWT Auth',
      'High-Concurrency API Gateway Engineering'
    ]
  },
  {
    title: 'Intelligent AI & Automation Integration',
    description: 'Implementing smart monitoring systems and automated workflows using Python and Computer Vision to drive operational efficiency and data-driven insights.',
    icon: <FaBrain />,
    color: 'from-indigo-500 to-purple-600',
    solutions: [
      'Computer Vision Monitoring (YOLO / OpenCV)',
      'Automated Data Processing & ETL Pipelines',
      'Predictive Analytics & Intelligence Dashboards',
      'Smart Content Filtering & Digital Safety Tools'
    ]
  }
];

const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] bg-teal-500/5 blur-[120px] rounded-full" />
        <div className="absolute -bottom-[10%] -left-[10%] w-[40%] h-[40%] bg-indigo-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 id="services-heading" className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-indigo-600">Services & Solutions</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-600 to-teal-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed font-light">
            Delivering high-impact engineering solutions tailored for enterprise growth and digital transformation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedService(service)}
              whileHover={{ 
                y: -12,
                boxShadow: "0 40px 80px -15px rgba(0,0,0,0.1)"
              }}
              className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 hover:border-teal-500/20 transition-all duration-500 group cursor-pointer"
            >
              <div className={`w-20 h-20 rounded-[2rem] bg-gradient-to-br ${service.color} flex items-center justify-center text-3xl text-white mb-8 shadow-lg group-hover:rotate-6 transition-transform duration-500`}>
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-extrabold text-slate-900 mb-6 leading-tight group-hover:text-teal-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed text-sm mb-8">
                {service.description}
              </p>

              <div className="flex items-center gap-2 text-teal-600 font-bold text-xs uppercase tracking-widest transition-all group-hover:gap-4">
                <span>View Specialized Solutions</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Solutions Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-md"
            onClick={() => setSelectedService(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              className="bg-white rounded-[3rem] p-10 md:p-16 max-w-2xl w-full relative shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-0 right-0 p-8">
                <button 
                  onClick={() => setSelectedService(null)}
                  aria-label="Close modal"
                  title="Close Solutions View"
                  className="p-3 bg-slate-50 rounded-2xl text-slate-400 hover:text-slate-900 transition-colors border border-slate-100"
                >
                  <FaTimes />
                </button>
              </div>

              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${selectedService.color} flex items-center justify-center text-3xl text-white mb-8`}>
                {selectedService.icon}
              </div>

              <h3 className="text-3xl font-black text-slate-900 mb-4">{selectedService.title}</h3>
              <p className="text-slate-500 mb-10 leading-relaxed">Specialized technical implementations designed for high-performance and business growth.</p>

              <div className="grid gap-4">
                {selectedService.solutions.map((sol, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:border-teal-500/20 transition-all group"
                  >
                    <FaCheckCircle className="text-teal-500 flex-shrink-0" />
                    <span className="text-slate-700 font-bold text-sm md:text-base group-hover:text-teal-600 transition-colors">{sol}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <button 
                  onClick={() => {
                    setSelectedService(null);
                    document.getElementById('connect')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-teal-600 transition-colors shadow-lg"
                >
                  Inquire About This Solution
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServicesSection;

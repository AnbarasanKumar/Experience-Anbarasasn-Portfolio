import React from 'react';
import { motion } from 'framer-motion';
import { FaLayerGroup, FaCodeBranch, FaRocket } from 'react-icons/fa';

const methodologySteps = [
  {
    id: '01',
    title: 'Architectural Blueprint',
    description: 'Specializing in designing high-availability foundations for enterprise ecosystems. I prioritize modular Java architectures and scalable database schemas from day one.',
    icon: <FaLayerGroup className="text-3xl" />,
    gradient: 'from-indigo-600 to-teal-500'
  },
  {
    id: '02',
    title: 'Full-Stack Integration',
    description: 'Bridging the technical gap by seamlessly connecting robust Spring Boot backends with pixel-perfect, responsive React interfaces for a cohesive user experience.',
    icon: <FaCodeBranch className="text-3xl" />,
    gradient: 'from-teal-500 to-indigo-600'
  },
  {
    id: '03',
    title: 'Precision Optimization',
    description: 'Relentless focus on performance tuning, security hardening, and sub-second response times. I ensure every line of code contributes to a faster, safer digital reality.',
    icon: <FaRocket className="text-3xl" />,
    gradient: 'from-indigo-600 to-teal-400'
  }
];

const MethodologySection: React.FC = () => {
  return (
    <section id="methodology" className="py-24 bg-gradient-to-br from-slate-50 to-indigo-50/30 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 id="methodology-heading" className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-indigo-600 mb-6 uppercase tracking-tight">
            Strategic Methodology
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-600 to-teal-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed font-light">
            My professional development lifecycle is engineered for precision, scalability, and technical excellence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {methodologySteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white/80 backdrop-blur-xl p-10 rounded-[2.5rem] border border-slate-200 shadow-xl group hover:border-teal-500/30 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8">
                <span className="text-6xl font-black text-slate-100 group-hover:text-teal-50 transition-colors duration-500">
                  {step.id}
                </span>
              </div>
              
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white mb-8 shadow-lg shadow-indigo-200 group-hover:scale-110 transition-transform duration-500`}>
                {step.icon}
              </div>

              <h3 className="text-2xl font-extrabold text-slate-900 mb-6 group-hover:text-teal-600 transition-colors duration-300">
                {step.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed text-sm">
                {step.description}
              </p>

              <div className="mt-8 h-1 w-0 bg-gradient-to-r from-teal-500 to-indigo-600 group-hover:w-full transition-all duration-700 rounded-full opacity-50" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;

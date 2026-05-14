import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaRocket, FaLayerGroup, FaUserCheck } from 'react-icons/fa';

const engineeringValues = [
  {
    title: 'Clean Code Architecture',
    subtitle: 'Pattern-Driven & Maintainable',
    description: 'Prioritizing architectural integrity and long-term maintainability through industry-standard design patterns.',
    icon: <FaCode />,
    color: 'from-blue-500 to-indigo-600'
  },
  {
    title: 'Performance Optimization',
    subtitle: 'Latency-Focused & High-Speed',
    description: 'Engineering systems with a "Speed First" mindset, ensuring ultra-low latency and smooth user interactions.',
    icon: <FaRocket />,
    color: 'from-teal-400 to-emerald-600'
  },
  {
    title: 'Enterprise Scalability',
    subtitle: 'Cloud-Ready & Robust',
    description: 'Designing data schemas and microservices architectures that scale seamlessly with global user demand.',
    icon: <FaLayerGroup />,
    color: 'from-indigo-500 to-purple-600'
  },
  {
    title: 'User-Centric Logic',
    subtitle: 'Intuitive & High-End UX',
    description: 'Bridging the gap between complex backend logic and premium, user-friendly digital experiences.',
    icon: <FaUserCheck />,
    color: 'from-amber-400 to-orange-500'
  }
];

const ValuesSection: React.FC = () => {
  return (
    <section id="values" className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-indigo-500/5 blur-[120px] rounded-full"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] bg-teal-500/5 blur-[120px] rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-indigo-600 font-black text-sm uppercase tracking-[0.4em] mb-4 text-center">Core Philosophy</p>
          <h2 id="values-heading" className="text-4xl md:text-5xl font-black text-slate-900 mb-6 text-center">
            Strategic Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-teal-500 text-center">Values</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-600 to-teal-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {engineeringValues.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="bg-white/70 backdrop-blur-xl p-6 rounded-3xl border border-slate-200 shadow-lg hover:border-indigo-500/30 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center text-xl text-white shadow-lg mb-8 group-hover:scale-110 transition-transform duration-500`}>
                {value.icon}
              </div>

              <h3 className="text-xl font-black text-slate-900 mb-2">{value.title}</h3>
              <p className="text-indigo-600 font-bold text-[10px] uppercase tracking-widest mb-4">{value.subtitle}</p>
              
              <p className="text-slate-500 text-sm leading-relaxed">
                {value.description}
              </p>
              
              <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="h-0.5 w-12 bg-gradient-to-r from-indigo-500 to-teal-400 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;

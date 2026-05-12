import React from "react";
import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Frontend Architecture",
    skills: [
      { name: "ReactJs", level: 85 },
      { name: "JavaScript (ES6+)", level: 92 },
      { name: "HTML5 / CSS3", level: 95 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    category: "Backend Engineering",
    skills: [
      { name: "Java", level: 95 },
      { name: "Spring Boot", level: 92 },
      { name: "Python", level: 90 },
      { name: "RESTful APIs", level: 95 },
    ],
  },
  {
    category: "Data & Infrastructure",
    skills: [
      { name: "MySQL", level: 90 },
      { name: "OracleDB", level: 75 },
      { name: "Git / GitHub", level: 92 },
      { name: "Postman / Swagger", level: 95 },
    ],
  },
];

const SkillsSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-teal-50 via-cyan-50/80 to-emerald-50/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 id="skills-heading" className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-indigo-600 mb-6">
            Technical Proficiency
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-600 to-teal-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {skillsData.map((cat, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.98 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" } }
              }}
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                y: {
                  duration: 4 + idx,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              whileHover={{ 
                y: -15, 
                scale: 1.03,
                boxShadow: "0 25px 50px -12px rgba(20, 184, 166, 0.25)"
              }}
              className="bg-white p-10 rounded-[3rem] border border-slate-200 shadow-xl hover:border-teal-500/40 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-xl font-extrabold text-slate-900 mb-10 group-hover:text-teal-600 transition-colors duration-300 tracking-[0.2em] uppercase text-xs">
                {cat.category}
              </h3>
              <div className="space-y-10">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-4">
                    <div className="flex justify-between text-sm font-bold">
                      <span className="text-slate-600 tracking-wide">{skill.name}</span>
                      <motion.span 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-teal-600"
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden border border-slate-200 shadow-inner">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.8, ease: [0.34, 1.56, 0.64, 1] }} // Spring-like ease
                        className="h-full bg-gradient-to-r from-indigo-600 via-teal-500 to-indigo-400 rounded-full shadow-[0_0_15px_rgba(20,184,166,0.2)]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-teal-500/10 blur-[120px] rounded-full" />
      </div>
    </section>
  );
};

export default SkillsSection;

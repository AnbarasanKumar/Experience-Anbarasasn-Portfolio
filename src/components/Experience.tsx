"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaServer, FaDesktop, FaCode, FaEnvelope, FaGraduationCap } from "react-icons/fa";

interface ExperienceItem {
  title: string;
  company: string;
  companyUrl: string;
  period: string;
  responsibilities: string[];
  icon: React.ReactNode;
}

interface EducationItem {
  school: string;
  qualification: string;
  period: string;
  icon?: React.ReactNode;
  description?: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "Full Stack Engineer",
    company: "Keyan Technologies",
    companyUrl: "#",
    period: "2025 - Present",
    icon: <FaCode size={32} className="text-teal-400" />,
    responsibilities: [
      "Architected and engineered a comprehensive Hostel Management System utilizing React, Java, MySQL, and Spring Boot to streamline campus operations.",
      "Developed enterprise-grade features for automated room allocation, real-time student registration tracking, and secure digital fee management.",
      "Engineered high-performance RESTful APIs and optimized database schemas to ensure sub-second response times for critical administrative tasks.",
      "Led the end-to-end SDLC, from initial requirement gathering and system architecture to production deployment and technical documentation.",
      "Spearheaded technical collaborations to implement agile methodologies and maintain high standards of code quality and system reliability."
    ],
  },
  {
    title: "Backend Developer Specialist",
    company: "Inetz Internship",
    companyUrl: "#",
    period: "Sept 2025 – Dec 2025",
    icon: <FaServer size={32} className="text-teal-400" />,
    responsibilities: [
      "Engineered scalable backend microservices using Java and Spring Boot, focusing on modular architecture and high-availability design.",
      "Designed and implemented high-throughput RESTful APIs for complex data processing, product catalog management, and user session handling.",
      "Optimized MySQL database performance through advanced indexing and query optimization, significantly reducing data retrieval latency.",
      "Implemented robust security protocols, including role-based access control (RBAC) and JWT-based authentication for secure data transmission.",
      "Collaborated in a fast-paced environment to conduct unit testing, performance debugging, and system scalability enhancements."
    ],
  },
  {
    title: "Frontend Engineering Associate",
    company: "Inetz Technology",
    companyUrl: "#",
    period: "Jun 2024 – Aug 2024",
    icon: <FaDesktop size={32} className="text-teal-400" />,
    responsibilities: [
      "Developed sophisticated, pixel-perfect user interfaces using modern HTML5, CSS3, and JavaScript (ES6+), ensuring 100% responsive design across all devices.",
      "Seamlessly integrated frontend architectures with complex backend REST APIs, focusing on asynchronous data fetching and state management.",
      "Optimized client-side performance and rendering efficiency, resulting in a significantly improved Core Web Vitals score.",
      "Executed rigorous cross-browser testing and UI debugging to deliver a consistent, high-quality user experience.",
      "Partnered with backend engineers to define API contracts and ensure cohesive full-stack integration."
    ],
  },
];


const education: EducationItem[] = [
  {
    school: "CK COLLEGE OF ENGINEERING AND TECHNOLOGY",
    qualification: "Computer Science and Engineering",
    period: "2020 - 2024",
    icon: <FaGraduationCap className="text-indigo-400" />,
    description: "Specialized in enterprise software architecture, advanced data structures, and full-stack system design."
  },
  {
    school: "SEVAMANDIR MATRIC HR SEC SCHOOL",
    qualification: "Computer Science",
    period: "2019 - 2020",
    icon: <FaGraduationCap className="text-indigo-400" />,
    description: "Foundational studies in algorithms, logical problem solving, and computational fundamentals."
  },
  {
    school: "SEVAMANDIR MATRIC HR SEC SCHOOL",
    qualification: "State Board",
    period: "2017 - 2018",
    icon: <FaGraduationCap className="text-indigo-400" />,
    description: "Completed State Board curriculum with a strong foundation in core subjects such as Mathematics, Science, and English, developing analytical thinking and problem-solving skills."
  }
];

const additionalCourses: EducationItem[] = [
  {
    school: "QSPIDERS",
    qualification: "Java Full Stack Development",
    period: "2024 - 2025",
    icon: <FaGraduationCap className="text-teal-400" />,
    description: "Intensive six-month specialized training in enterprise Java, Spring Boot architecture, and full-stack integration."
  },
  {
    school: "GUVI",
    qualification: "Python Programming",
    period: "2024",
    icon: <FaGraduationCap className="text-teal-400" />,
    description: "Advanced certification in Python programming, focusing on algorithmic problem solving and data processing fundamentals."
  }
];

const Experience: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="experience" className="relative py-24 bg-slate-50 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-teal-500/5 blur-[100px] rounded-full" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-500/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 id="experience-heading" className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-indigo-600 mb-6">
            Professional Journey
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-600 to-teal-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Work Experience Timeline */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-8 space-y-8"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
              <span className="w-8 h-8 bg-teal-500/10 rounded-lg flex items-center justify-center text-teal-600 text-sm">01</span>
              Work Experience
            </h3>
            
            <div className="space-y-8">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, x: -30 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
                  }}
                  whileHover={{ 
                    x: 12,
                    backgroundColor: "rgba(255, 255, 255, 0.5)"
                  }}
                  className="bg-white rounded-[2.5rem] p-10 border border-slate-200 hover:border-teal-500/30 transition-all duration-300 shadow-xl group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-6 relative z-10">
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 bg-slate-50 rounded-[1.25rem] flex items-center justify-center text-teal-600 group-hover:scale-110 group-hover:bg-teal-500/10 transition-all duration-500 shadow-sm border border-slate-100">
                        {exp.icon}
                      </div>
                      <div>
                        <h4 className="text-2xl font-extrabold text-slate-900 tracking-tight">{exp.title}</h4>
                        <p className="text-teal-600 font-bold uppercase text-xs tracking-widest">{exp.company}</p>
                      </div>
                    </div>
                    <span className="px-5 py-2 bg-slate-50 rounded-full text-slate-500 text-xs font-black border border-slate-200 uppercase tracking-widest shadow-sm">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-4 relative z-10">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-4 text-slate-600 text-sm leading-relaxed group/item">
                        <span className="mt-2 w-2 h-2 bg-teal-500 rounded-full flex-shrink-0 shadow-[0_0_10px_rgba(20,184,166,0.2)] group-hover/item:scale-125 transition-transform" />
                        <span className="group-hover/item:text-slate-900 transition-colors">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Sidebar */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-16"
          >
            {/* 02 Education */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <span className="w-8 h-8 bg-indigo-500/10 rounded-lg flex items-center justify-center text-indigo-600 text-sm">02</span>
                Education
              </h3>

              <div className="relative pl-8 space-y-12 before:absolute before:left-0 before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-indigo-500 before:to-transparent">
                {education.map((edu, idx) => (
                  <motion.div 
                    key={idx}
                    variants={itemVariants}
                    className="relative"
                  >
                    <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-white border-2 border-indigo-500 z-10 shadow-sm" />
                    <div className="space-y-2">
                      <span className="text-indigo-600 text-xs font-bold uppercase tracking-widest">{edu.period}</span>
                      <h4 className="text-lg font-bold text-slate-900 leading-tight">{edu.school}</h4>
                      <p className="text-slate-600 text-sm">{edu.qualification}</p>
                      {edu.description && <p className="text-slate-500 text-xs italic mt-2">{edu.description}</p>}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* 03 Additional Courses */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <span className="w-8 h-8 bg-teal-500/10 rounded-lg flex items-center justify-center text-teal-600 text-sm">03</span>
                Certifications
              </h3>

              <div className="relative pl-8 space-y-12 before:absolute before:left-0 before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-teal-500 before:to-transparent">
                {additionalCourses.map((edu, idx) => (
                  <motion.div 
                    key={idx}
                    variants={itemVariants}
                    className="relative"
                  >
                    <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-white border-2 border-teal-500 z-10 shadow-sm" />
                    <div className="space-y-2">
                      <span className="text-teal-600 text-xs font-bold uppercase tracking-widest">{edu.period}</span>
                      <h4 className="text-lg font-bold text-slate-900 leading-tight">{edu.school}</h4>
                      <p className="text-slate-600 text-sm">{edu.qualification}</p>
                      {edu.description && <p className="text-slate-500 text-xs italic mt-2">{edu.description}</p>}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

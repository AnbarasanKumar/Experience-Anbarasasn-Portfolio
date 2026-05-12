import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FaEye } from "react-icons/fa";
import CountUp from "react-countup";

const stats = [
  { label: "Year Experience", value: "1" },
  { label: "Technologies", value: "15+" },
  { label: "Clients Served", value: "3+" },
  { label: "Projects Completed", value: "5+" },
  { label: "Satisfaction", value: "99%" },
];

const bulletItems = [
  {
    title: "Full-Stack Architecture",
    description: "Architecting scalable enterprise applications with Java, Spring Boot, and modern React. Delivering high-availability systems with sub-second response times.",
    images: [
      "https://i.pinimg.com/736x/08/72/8f/08728f42513b4d9194d46d0d6655cde0.jpg",
      "https://i.pinimg.com/736x/40/26/ba/4026ba46fd98ac6223e83607e0de1709.jpg",
      "https://i.pinimg.com/1200x/02/f2/cc/02f2cca1044cad7e4b878aaf75583a42.jpg",
    ],
  },
  {
    title: "AI & Smart Integration",
    description: "Leveraging Python and Computer Vision (YOLO) to build intelligent monitoring systems. Merging real-time analytics with robust web infrastructures.",
    images: [
      "https://media.istockphoto.com/id/1271697681/photo/science-technology-concept-education-technology-edtech.jpg?s=612x612&w=0&k=20&c=SpzEqDnbyDr-X-_jmNveQKh9o-QVUuT-oWQ8e1ixS_4=",
      "https://i.pinimg.com/736x/d2/78/0a/d2780aaa5f367ba0be55e20e1c2e96cc.jpg",
      "https://i.pinimg.com/1200x/0e/6e/d1/0e6ed19c5195302fb9b0ffbaf68f5076.jpg",
    ],
  },
];

const AboutSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <section id="about" className="py-24 bg-[#1a1a1a] relative overflow-hidden flex items-center justify-center">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/5 blur-[120px] rounded-full"
        />
        <motion.div 
          animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-500/5 blur-[120px] rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Stats Row */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mb-24"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
              }}
              className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 text-center shadow-2xl group hover:border-teal-500/30 transition-all duration-500"
            >
              <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-indigo-400 mb-2">
                <CountUp end={parseInt(stat.value)} suffix={stat.value.replace(/\d+/g, "")} enableScrollSpy />
              </h3>
              <p className="text-gray-400 font-medium tracking-wide uppercase text-xs">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Content Panel */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Transforming <span className="text-teal-400">Vision</span> into Digital <span className="text-indigo-400">Reality</span>
              </h2>
              <div className="w-20 h-1.5 bg-teal-500 rounded-full" />
            </div>

            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                As a specialized Full Stack Engineer, I bridge the gap between complex backend architectures and intuitive user interfaces. My journey is defined by a passion for solving enterprise-scale challenges using <span className="text-white font-semibold">Java, Spring Boot, and React</span>.
              </p>
              <p>
                I don't just write code; I engineer systems that are built to scale, secure by design, and optimized for peak performance. Whether it's a high-concurrency E-commerce engine or an AI-driven monitoring tool, I deliver precision in every line.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              <motion.a 
                href="/Anbarasan.K Resume-1.pdf"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-white/5 border border-white/10 hover:border-white/20 px-10 py-4 rounded-2xl font-bold text-white transition-all shadow-xl"
              >
                <FaEye className="text-teal-400" /> View Credentials
              </motion.a>
            </div>
          </motion.div>

          {/* Feature Grid */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } }
            }}
            className="space-y-8"
          >
            {bulletItems.map((item, idx) => (
              <motion.div 
                key={idx}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white/5 backdrop-blur-xl p-8 rounded-[2rem] border border-white/10 space-y-6 shadow-2xl hover:border-teal-500/30 transition-all duration-500"
              >
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-teal-400">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {item.images.map((img, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ scale: 1.15, rotate: i % 2 === 0 ? 3 : -3, zIndex: 20 }}
                      className="h-24 rounded-xl overflow-hidden shadow-lg border border-white/5 relative"
                    >
                      <img src={img} alt="Detail" className="w-full h-full object-cover" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

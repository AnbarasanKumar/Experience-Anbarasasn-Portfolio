"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
    title: "Backend Developer Intern",
    company: "Itenz Internship",
    companyUrl: "#",
    period: "Sept 2025 – Dec 2025",
    icon: <FaServer size={32} className="text-teal-400" />,
    responsibilities: [
      "Developed backend modules using Java and Spring Boot for web-based applications.",
      "Designed and implemented RESTful APIs for user, product, and data management.",
      "Integrated MySQL databases with backend services and optimized queries.",
      "Implemented role-based access control and authentication mechanisms.",
      "Collaborated with team members to test, debug, and improve application performance."
    ],
  },
  {
    title: "Front-End Developer Intern",
    company: "Itenz Technology",
    companyUrl: "#",
    period: "Jun 2024 – Aug 2024",
    icon: <FaDesktop size={32} className="text-teal-400" />,
    responsibilities: [
      "Developed responsive user interfaces using HTML, CSS, and JavaScript.",
      "Integrated frontend components with backend REST APIs.",
      "Improved UI usability and performance across multiple screen sizes.",
      "Debugged and fixed UI-related issues to enhance user experience.",
      "Worked closely with backend developers to ensure smooth data flow."
    ],
  },
  {
    title: "Full Stack Developer Course",
    company: "QSpider",
    companyUrl: "#",
    period: "Nov 2023 – Apr 2024",
    icon: <FaServer size={32} className="text-teal-400" />,
    responsibilities: [
      "Learned full-stack development using Java, Spring Boot, HTML, CSS, and JavaScript.",
      "Built RESTful web applications with proper MVC architecture.",
      "Implemented basic authentication and authorization concepts.",
      "Worked with MySQL databases for CRUD operations and schema design.",
      "Developed mini-projects to apply real-world full-stack concepts."
    ],
  },
  {
    title: "Full Stack Software Engineer",
    company: "Freelance / Personal Projects",
    companyUrl: "#",
    period: "2024 – 2025",
    icon: <FaCode size={32} className="text-teal-400" />,
    responsibilities: [
      "Developed a full-stack E-Commerce Platform using Java, MySQL, HTML, CSS, and JavaScript with features such as authentication, product management, shopping cart, and order processing.",
      "Built a Course Registration System using Java and Spring Boot, implementing RESTful APIs, role-based access control, and database-driven workflows.",
      "Implemented an Intelligent Parental Control System using Python and YOLO for real-time video analysis, alert generation, and reporting.",
      "Designed responsive frontends and ensured smooth integration with backend services.",
      "Managed the complete software development lifecycle including requirement analysis, development, testing, and documentation."
    ],
  },
];


const education: EducationItem[] = [
  {
    school: "CK COLLEGE OF ENGINEERING AND TECHNOLOGY",
    qualification: "Computer Science and Engineering",
    period: "2020 - 2024",
    icon: <FaGraduationCap className="text-gray-900" />,
    description:
  "Studied core Computer Science concepts including Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networks, and Software Engineering, with hands-on project development.",

  },
  {
    school: "SEVAMANDIR MATRIC HR SEC SCHOOL",
    qualification: "Computer Science",
    period: "2019 - 2020",
    icon: <FaGraduationCap className="text-gray-900" />,
    description:
  "Developed a foundational understanding of Computer Science with basic programming, logical problem-solving, algorithms, and computer fundamentals.",

  },
  {
    school: "SEVAMANDIR MATRIC HR SEC SCHOOL",
    qualification: "State Board",
    period: "2017 - 2018",
    icon: <FaGraduationCap className="text-gray-900" />,
    description:
  "Completed State Board curriculum with a strong foundation in core subjects such as Mathematics, Science, and English, developing analytical thinking and problem-solving skills.",
  },
];

// Typewriter for "Available for Hire"
const TypewriterText: React.FC<{ text: string }> = ({ text }) => {
  const [displayed, setDisplayed] = React.useState("");
  const [index, setIndex] = React.useState(0);
  const [deleting, setDeleting] = React.useState(false);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplayed(text.slice(0, index + 1));
        setIndex(index + 1);
        if (index + 1 === text.length) setDeleting(true);
      } else {
        setDisplayed(text.slice(0, index - 1));
        setIndex(index - 1);
        if (index - 1 === 0) setDeleting(false);
      }
    }, deleting ? 80 : 120);
    return () => clearTimeout(timeout);
  }, [index, deleting, text]);

  return (
    <span className="overflow-hidden text-white font-bold text-lg">
      {displayed}
      <span className="animate-blink">|</span>
      <style>{`
        @keyframes blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }
        .animate-blink { display:inline-block; margin-left:2px; animation:blink 1s infinite; }
      `}</style>
    </span>
  );
};

// Framer Motion variants for Education
const educationContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const educationItem = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Experience: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mouseTilt, setMouseTilt] = useState({ x: 0, y: 0 });

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
    setMouseTilt({ x, y });
  };

  const hoverAnimation = (idx: number) => ({
    scale: 1.05,
    rotateX: hoveredCard === idx ? mouseTilt.y : 0,
    rotateY: hoveredCard === idx ? mouseTilt.x : 0,
    boxShadow: "0 0 30px #14B8A6, 0 0 60px #00ffff",
    transition: { type: "spring", stiffness: 200, damping: 15 },
  });

  return (
    <section id="experience" className="relative py-16 bg-gray-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Work Experience */}
        <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-400 via-green-400 to-blue-500 animate-gradient">
          Work Experience
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="relative bg-gray-800/70 backdrop-blur-md rounded-2xl p-6 shadow-lg cursor-pointer border border-white/10 overflow-hidden"
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
              onMouseMove={handleCardMouseMove}
              animate={hoveredCard === idx ? hoverAnimation(idx) : { scale: 1, rotateX: 0, rotateY: 0, boxShadow: "0 0 10px #00000050" }}
            >
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-red-500 via-yellow-400 via-green-400 to-blue-500 opacity-20 animate-gradient blur-xl rounded-2xl" />
              <div className="relative z-10 flex justify-center mb-4">{exp.icon}</div>
              <h3 className="text-xl font-semibold text-teal-400 text-center mb-1">{exp.title}</h3>
              <p className="text-teal-300 font-medium text-center mb-1">
                <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:text-teal-200">
                  {exp.company}
                </a>
              </p>
              <p className="text-sm text-gray-400 italic text-center mb-4">{exp.period}</p>
              <div className="space-y-2 text-gray-300 text-sm">
                {exp.responsibilities.map((item, i) => (
                  <p key={i}>• {item}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <h2 className="text-3xl font-bold text-center mt-16 mb-8 text-teal-400">EDUCATION</h2>
        <motion.div
          className="relative max-w-4xl mx-auto"
          variants={educationContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="absolute left-5 top-0 w-1 bg-teal-500 h-full rounded" />

          <div className="space-y-12">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                variants={educationItem}
                whileHover={{ y: -6, boxShadow: "0 0 25px #14B8A6, 0 0 50px #00ffff" }}
                transition={{ type: "spring", stiffness: 180, damping: 18 }}
                className="relative pl-16 flex items-start cursor-pointer"
              >
                <div className="absolute left-0 top-2">
                  <div className="w-10 h-10 bg-teal-400 rounded-full flex items-center justify-center shadow-lg">
                    {edu.icon || <FaGraduationCap className="text-gray-900" />}
                  </div>
                </div>
                <div className="bg-gray-800/70 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/10 w-full">
                  <h3 className="text-lg font-semibold text-teal-400 mb-1">{edu.school}</h3>
                  <p className="text-gray-300 mb-1">{edu.qualification}</p>
                  <p className="text-sm text-gray-400 italic mb-2">{edu.period}</p>
                  {edu.description && <p className="text-gray-300 text-sm">{edu.description}</p>}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Available for Hire */}
        <div className="flex justify-center mt-12">
          <motion.a
            href="mailto:anbarasanpno18@gmail.com"
            className="flex items-center gap-2 px-6 py-3 bg-gray-900/80 backdrop-blur-md rounded-full shadow-lg cursor-pointer overflow-hidden"
            animate={{
              boxShadow: [
                "0 0 10px #ff0000, 0 0 20px #ff9900, 0 0 30px #ffff00",
                "0 0 15px #00ff00, 0 0 25px #00ffff, 0 0 35px #ff00ff",
                "0 0 10px #ff0000, 0 0 20px #ff9900, 0 0 30px #ffff00",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 20px #ff0000,0 0 30px #ff9900,0 0 40px #ffff00,0 0 25px #00ff00,0 0 35px #00ffff,0 0 45px #ff00ff",
              transition: { duration: 0.3, type: "spring", stiffness: 300 },
            }}
          >
            <motion.div
              className="text-white"
              whileHover={{ scale: 1.3, textShadow: "0 0 8px #ffffff,0 0 12px #14B8A6" }}
              transition={{ duration: 0.3 }}
            >
              <FaEnvelope />
            </motion.div>
            <TypewriterText text="Available For Hire" />
          </motion.a>
        </div>

      </div>

      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient { background-size: 200% 200%; animation: gradientShift 6s ease infinite; }
      `}</style>
    </section>
  );
};

export default Experience;

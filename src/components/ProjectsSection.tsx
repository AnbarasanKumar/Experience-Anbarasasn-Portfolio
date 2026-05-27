import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  category: 'Full Stack' | 'Backend';
}

const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Full Stack'>('All');
  const filters: ('All' | 'Full Stack')[] = ['All', 'Full Stack'];

  const projects: Project[] = [
    {
      title: 'Enterprise E-Commerce Platform',
      description: 'A robust, full-stack e-commerce solution engineered with Java and MySQL for scalable backend performance, paired with a dynamic React-based frontend. This enterprise application features secure JWT authentication, a sophisticated product catalog management system, complex shopping cart logic, and an automated order processing pipeline.',
      image: 'https://i.pinimg.com/1200x/eb/09/7a/eb097ad94bfe6075f3ba5c8a752fd56e.jpg',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'React', 'Tailwind CSS'],
      githubUrl: 'https://github.com/AnbarasanKumar/E-Commerce_ShoppingCart.git',
      category: 'Full Stack'
    },
    {
      title: 'Smart Course Registration System',
      description: 'An advanced academic management portal developed using Java and Spring Boot. This system provides a high-performance RESTful API architecture enabling seamless student enrollment and administrative course management. It features granular role-based access control (RBAC), optimized MySQL schema design, and a responsive interface for superior user experience.',
      image: 'https://cdn.slidesharecdn.com/ss_thumbnails/onlinecourseregistrationsystemdevelopmentsoftwareengineeringprojectpresentation-170505033339-thumbnail.jpg?width=560&fit=bounds',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'REST API', 'JavaScript'],
      githubUrl: 'https://github.com/AnbarasanKumar/Course-Registration-System.git',
      category: 'Full Stack'
    },
    {
      title: 'Automated Hostel Management System',
      description: 'A comprehensive ERP-style solution designed to digitize hostel operations. Built with a React and Spring Boot stack, it streamlines complex workflows including automated room allocation, real-time resident tracking, and secure digital fee processing. The system emphasizes high availability, data integrity, and cross-platform responsiveness.',
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      technologies: ['React', 'Java', 'MySQL', 'Spring Boot', 'Cloud Deployment'],
      githubUrl: 'https://github.com/AnbarasanKumar/hostel-management.git',
      category: 'Full Stack'
    }
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-16 md:py-20 bg-gradient-to-br from-blue-50 via-sky-50/80 to-indigo-50/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 id="projects-heading" className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-indigo-600 mb-6">Featured Engineering</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-600 to-teal-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg mb-8">
            A showcase of enterprise-grade applications demonstrating proficiency in full-stack architecture, backend efficiency, and modern user experiences.
          </p>
        </motion.div>

        {/* Dynamic Filter Tabs */}
        <div className="flex justify-center items-center gap-3 mb-16 flex-wrap">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`relative px-6 py-2.5 rounded-full text-xs font-black tracking-wider uppercase transition-colors duration-300 z-10 border ${
                  isActive 
                    ? "text-white border-transparent" 
                    : "text-slate-500 hover:text-indigo-600 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFilterPill"
                    className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-teal-500 rounded-full -z-10 shadow-lg shadow-indigo-600/30"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {filter}
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 min-h-[400px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                transition={{ duration: 0.4 }}
                whileHover={{ 
                  y: -20, 
                  scale: 1.02,
                  boxShadow: "0 40px 80px -15px rgba(79, 70, 229, 0.25)"
                }}
                className="group relative bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-lg transition-all duration-500 hover:border-teal-500/30 will-change-transform flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-60 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-6 left-8">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "4rem" }}
                        className="h-1.5 bg-teal-500 rounded-full mb-4"
                      />
                    </div>
                  </div>
                  
                  <div className="p-7 pb-0">
                    <h3 className="text-2xl font-extrabold text-slate-900 mb-4 group-hover:text-teal-600 transition-colors duration-300">{project.title}</h3>
                    <p className="text-slate-600 mb-8 leading-relaxed line-clamp-4 group-hover:text-slate-700 transition-colors duration-300 text-sm">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="p-7 pt-0">
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-1.5 bg-indigo-50 text-indigo-600 text-[10px] font-black rounded-full border border-indigo-100 uppercase tracking-[0.15em] shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`View ${project.title} source code on GitHub`}
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.02)" }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-grow text-center text-slate-700 bg-slate-50 px-6 py-4 rounded-2xl font-bold border border-slate-200 transition-all text-sm uppercase tracking-wider"
                    >
                      Source Code
                    </motion.a>
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`View live demo of ${project.title}`}
                        whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(79, 70, 229, 0.2)" }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-grow text-center text-white bg-gradient-to-r from-indigo-600 to-teal-500 px-6 py-4 rounded-2xl font-bold transition-all text-sm uppercase tracking-wider shadow-lg shadow-indigo-600/20"
                      >
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;

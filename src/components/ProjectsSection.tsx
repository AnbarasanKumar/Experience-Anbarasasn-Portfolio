import React from 'react';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
}

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
     title: 'E-Commerce Platform',
     description: 'Full-stack e-commerce application developed using Java for backend logic, MySQL for database management, and HTML, CSS, and JavaScript for a responsive frontend. Includes features such as user authentication, product management, shopping cart, and order processing.',
     image: 'https://i.pinimg.com/1200x/eb/09/7a/eb097ad94bfe6075f3ba5c8a752fd56e.jpg',
     technologies: ['Java', 'HTML', 'MySQL', 'CSS', 'JavaScript'],
     githubUrl: 'https://github.com/AnbarasanKumar/E-Commerce_ShoppingCart.git'
    },
   {
  title: 'Course Registration System',
  description: 'Web-based course registration system developed using Java and Spring Boot, enabling students to enroll in courses and administrators to manage courses and users. Features include RESTful APIs, role-based access control for admin and students, and a MySQL database for managing students, courses, and registrations, with a responsive frontend built using HTML, CSS, and JavaScript.',
  image: 'https://cdn.slidesharecdn.com/ss_thumbnails/onlinecourseregistrationsystemdevelopmentsoftwareengineeringprojectpresentation-170505033339-thumbnail.jpg?width=560&fit=bounds',
  technologies: ['Java', 'Spring Boot', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
  githubUrl: 'https://github.com/AnbarasanKumar/Course-Registration-System.git'
}


,

{
  title: 'Hostel Management System',
  description: 'A comprehensive hostel management system developed using modern web technologies to streamline room allocations, student registrations, fee management, and administrative tasks. Features include user authentication, real-time availability tracking, and responsive design for efficient hostel operations.',
  image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  technologies: ['React', 'Java', 'MySql', 'Spring Boot'],
  githubUrl: 'https://github.com/AnbarasanKumar/Hostel-Management-System.git',
}

  ];

  return (
    <section id="projects" className="py-20 bg-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 id="projects-heading" className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-400 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
  A showcase of my featured projects demonstrating expertise in full-stack web development, backend engineering, and real-world application development.
</p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-xl rounded-xl shadow-2xl overflow-hidden border border-white/10 transform transition duration-300 hover:scale-105 hover:shadow-indigo-500/20"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-teal-400 mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white/10 text-teal-300 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 mt-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg font-semibold transition"
                    >
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-white px-4 py-2 rounded-lg font-semibold border border-white/20 transition hover:bg-white/10"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

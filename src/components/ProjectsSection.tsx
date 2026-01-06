import React from 'react';

const ProjectsSection: React.FC = () => {
  const projects = [
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
  title: 'Parental Control System (YOLO)',
  description: 'Intelligent parental control system developed to monitor and detect inappropriate content in real time using computer vision. The system implements the YOLO object detection algorithm to analyze live video streams, generate alerts, and produce reports for effective parental monitoring, with a strong focus on enhancing child safety through automated content analysis.',
  image: 'https://media.istockphoto.com/id/1271697681/photo/science-technology-concept-education-technology-edtech.jpg?s=612x612&w=0&k=20&c=SpzEqDnbyDr-X-_jmNveQKh9o-QVUuT-oWQ8e1ixS_4=',
  technologies: ['Python', 'YOLO', 'Computer Vision']
}

  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
  A showcase of my featured projects demonstrating expertise in full-stack web development, backend engineering, and real-world application development.
</p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 mt-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-semibold transition"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-gray-900 px-4 py-2 rounded-lg font-semibold border border-gray-300 transition"
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

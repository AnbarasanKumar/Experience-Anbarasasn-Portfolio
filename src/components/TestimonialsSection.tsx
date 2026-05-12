import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Technical Mentor',
      position: 'Software Engineering Review',
      content: 'The e-commerce platform built by Anbarasan showcases solid full-stack development skills. The application effectively integrates Java backend services with MySQL.',
      rating: 5,
    },
    {
      name: 'Project Reviewer',
      position: 'Academic Project Evaluation',
      content: 'Anbarasan designed and implemented a robust Course Registration System using Java and Spring Boot. Strong backend architecture and RESTful APIs.',
      rating: 5,
    },
    {
      name: 'System Architect',
      position: 'Technical Portfolio Review',
      content: 'The Hostel Management System developed by Anbarasan demonstrates exceptional full-stack expertise. The integration of React with a robust Spring Boot backend is highly impressive.',
      rating: 5,
    },
  ];

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-700'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <section id="testimonials" className="relative py-24 overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50/70 to-fuchsia-50/40">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 id="testimonials-heading" className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-indigo-600 mb-6">Peer Recognition</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-600 to-teal-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              animate={{ y: [0, -10, 0] }}
              transition={{
                opacity: { delay: i * 0.1, duration: 0.5 },
                scale: { delay: i * 0.1, duration: 0.5 },
                y: {
                  duration: 3 + i * 1.3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              whileHover={{ 
                y: -14,
                scale: 1.02,
                boxShadow: "0 30px 60px -12px rgba(79, 70, 229, 0.2)"
              }}
              className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-xl hover:border-teal-500/30 transition-all duration-300 group"
            >
              <div className="mb-6">
                <StarRating rating={t.rating} />
              </div>
              <blockquote className="text-slate-600 text-lg leading-relaxed mb-8 italic">
                "{t.content}"
              </blockquote>
              <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 font-bold border border-indigo-100">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-slate-900 group-hover:text-teal-600 transition-colors">{t.name}</p>
                  <p className="text-slate-500 text-sm">{t.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="md:hidden">
          <Slider {...settings}>
            {testimonials.map((t, i) => (
              <div key={i} className="px-2 pb-12">
                <div className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-xl">
                  <StarRating rating={t.rating} />
                  <blockquote className="text-slate-600 text-lg leading-relaxed mt-6 mb-8 italic">
                    "{t.content}"
                  </blockquote>
                  <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                    <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 font-bold border border-indigo-100">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">{t.name}</p>
                      <p className="text-slate-500 text-sm">{t.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

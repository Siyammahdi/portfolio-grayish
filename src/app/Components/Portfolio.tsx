import { ScrollArea } from '@/components/ui/scroll-area';
import Image from 'next/image';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  siteUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Grocery Solution",
    description:
      "A robust e-commerce grocery platform developed with Next.js, delivering pixel-perfect conversion of intricate Figma designs into a highly responsive web application. The solution features dynamic product listings, secure checkout processes, and optimized performance for fast load times. Built with scalability in mind, it includes SEO-friendly architecture, reusable components, and seamless third-party API integrations. Enhanced user experience through intuitive UI/UX, mobile responsiveness, and accessibility standards ensures broader reach. The project emphasizes modern web performance techniques like image optimization, code-splitting, and server-side rendering for superior user engagement and conversion rates.",
    category: "Web Development",
    imageUrl: "/portfolio/nest-mart.gif",
    siteUrl: "https://nest-mart-livid.vercel.app/",
  },
  {
    id: 2,
    title: "Learning Platform Management",
    description:
      "An advanced, scalable learning management system (LMS) designed with Next.js, TypeScript, and Tailwind CSS, focusing on interactive data visualization. The platform efficiently handles large datasets, providing real-time analytics with dynamic charts and graphs to track learner progress. It features role-based access control, intuitive dashboards, and modular architecture for easy customization. Optimized for performance with server-side rendering, lazy loading, and responsive design, ensuring seamless experiences across devices. The solution also supports seamless API integrations, secure authentication, and efficient user management, making it ideal for educational institutions and corporate training environments.",
    category: "Web Development",
    imageUrl: "/portfolio/an-nahda.gif",
    siteUrl: "https://an-nahda-academy.vercel.app/",
  },
  {
    id: 3,
    title: "Online Interview Solution",
    description:
      "A comprehensive digital interview platform built for streamlined recruitment processes, featuring real-time scheduling, candidate profile management, and integrated video conferencing. Developed using scalable web technologies, the solution ensures secure, lag-free communication with robust authentication and encryption protocols. It supports multi-role management for interviewers, candidates, and administrators, providing automated notifications, interview reminders, and feedback systems. The intuitive UI offers responsive design for accessibility across devices. Optimized with server-side rendering, performance enhancements, and cloud storage integration, it delivers a seamless hiring experience, reducing recruitment time while maintaining data privacy and security standards.",
    category: "Web Application",
    imageUrl: "/portfolio/interviewer.gif",
    siteUrl: "https://interviewer-new.vercel.app/",
  },
  {
    id: 5,
    title: "Uqidev Landing Page",
    description:
      "The official landing page of Uqidev, a modern software company delivering innovative digital solutions. Designed to reflect the brand's cutting-edge vision, the site features a sleek, responsive interface with smooth animations, strategic content sections, and interactive elements. Built with Next.js, Tailwind CSS, and TypeScript, it showcases services, portfolio, and client testimonials with fast-loading performance and SEO optimization. The landing page supports dynamic routing, image optimization, and modular component structure for maintainability. Deployed on Vercel, it also includes contact integrations and a call-to-action-driven layout to enhance user engagement and lead generation.",
    category: "Landing Page",
    imageUrl: "/portfolio/uqidev.png",
    siteUrl: "https://uqidev-landing.vercel.app/",
  },
  {
    id: 6,
    title: "Riflesso Landing Page",
    description:
      "Riflesso is a visually immersive landing page crafted for a premium lifestyle brand. It combines elegant typography, high-resolution imagery, and smooth parallax effects to create a luxurious first impression. Built with modern web technologies like Next.js and Tailwind CSS, Riflesso ensures responsiveness across all devices and blazing-fast load times. The layout emphasizes storytelling with minimalistic design, scroll-triggered animations, and subtle transitions. Integrated with analytics and lead capture forms, the page is optimized for both aesthetics and conversion, making it ideal for product launches, brand showcases, or high-end campaigns.",
    category: "Landing Page",
    imageUrl: "/portfolio/reffelsso.png",
    siteUrl: "https://rifflesso.vercel.app/",
  }
];

const categories = ["All", "Web Development", "Web Application", "Landing Page"];

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.5 }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 0.5 
      }
    },
    hover: { 
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { 
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const nextProject = () => {
    if (selectedProject) {
      const currentIndex = projects.findIndex(p => p.id === selectedProject.id);
      const nextIndex = (currentIndex + 1) % projects.length;
      setSelectedProject(projects[nextIndex]);
    }
  };

  const prevProject = () => {
    if (selectedProject) {
      const currentIndex = projects.findIndex(p => p.id === selectedProject.id);
      const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
      setSelectedProject(projects[prevIndex]);
    }
  };

  return (
    <ScrollArea className="h-[70vh] md:h-[74vh]">
      <div className="text-gray-200 flex flex-col items-center py-6 md:py-12 px-4 md:px-8 relative">
        {/* Subtle background effect */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10 -z-10">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        
        {/* Portfolio Introduction */}
        <motion.div
          className="text-center max-w-3xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="relative inline-block px-2 py-1 mb-2 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-500/20 before:to-purple-500/20 before:rounded-md">
              <span className="relative text-sm font-medium text-blue-400">SHOWCASE</span>
            </span>
          </motion.div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            My Portfolio
          </h1>
          <p className="text-sm md:text-base leading-relaxed text-gray-300 font-light">
            I am passionate about crafting modern, scalable web applications using 
            <span className="text-blue-400 font-medium"> Next.js</span>, 
            <span className="text-purple-400 font-medium"> TypeScript</span>, and 
            <span className="text-teal-400 font-medium"> Tailwind CSS</span>. 
            Here are a few projects that showcase my expertise and dedication to delivering high-quality solutions.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="w-full max-w-3xl mb-12">
          <motion.div 
            className="flex flex-wrap justify-center md:justify-center gap-2 md:gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm md:text-base transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white font-medium"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {category}
                {activeCategory === category && (
                  <motion.div
                    className="underline-indicator"
                    layoutId="activeCategory"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Portfolio Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-6xl"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover="hover"
                onClick={() => handleProjectClick(project)}
                className="relative bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    height={250}
                    width={400}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                </div>
                
                <div className="p-5">
                  <span className="text-xs font-medium text-blue-400 mb-2 block">{project.category}</span>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-300 transition-colors">{project.title}</h3>
                  <p className="text-gray-400 text-sm line-clamp-2 mb-4">
                    {project.description.substring(0, 120)}...
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">{new Date().getFullYear()}</span>
                    <motion.div 
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500/20 text-blue-400"
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(59, 130, 246, 0.3)" }}
                    >
                      <FiExternalLink size={14} />
                    </motion.div>
                  </div>
                </div>
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Modal for Project Details */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-50 p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl max-w-4xl w-full overflow-hidden border border-gray-700/50"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative h-56 md:h-72 lg:h-96 overflow-hidden">
                  <Image
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                    height={500}
                    width={900}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                  
                  {/* Navigation buttons */}
                  <button 
                    onClick={prevProject}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white border border-gray-600/30 hover:bg-black/50 transition-colors"
                  >
                    <FiChevronLeft />
                  </button>
                  
                  <button 
                    onClick={nextProject}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white border border-gray-600/30 hover:bg-black/50 transition-colors"
                  >
                    <FiChevronRight />
                  </button>
                </div>
                
                <div className="p-6 md:p-8 text-white">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <span className="text-sm font-medium text-blue-400 mb-2 block">{selectedProject.category}</span>
                      <h3 className="text-2xl md:text-3xl font-bold">{selectedProject.title}</h3>
                    </div>
                    <button
                      onClick={closeModal}
                      className="p-2 rounded-full hover:bg-gray-700/50 transition-colors"
                    >
                      <FiX size={24} />
                    </button>
                  </div>
                  
                  <div className="prose prose-invert prose-sm md:prose-base max-w-none">
                    <p className="text-gray-300 font-light leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-700/50 flex justify-between items-center">
                    <div className="flex gap-2">
                      <span className="px-3 py-1 text-xs rounded-full bg-blue-500/20 text-blue-300">Next.js</span>
                      <span className="px-3 py-1 text-xs rounded-full bg-purple-500/20 text-purple-300">TypeScript</span>
                      <span className="px-3 py-1 text-xs rounded-full bg-teal-500/20 text-teal-300">Tailwind</span>
                    </div>
                    <a 
                      href={selectedProject.siteUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
                    >
                      Visit Site <FiExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ScrollArea>
  );
};

export default Portfolio;

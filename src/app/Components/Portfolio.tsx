import { ScrollArea } from '@/components/ui/scroll-area';
import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Grocery Solution",
    description:
      "A robust e-commerce grocery platform developed with Next.js, delivering pixel-perfect conversion of intricate Figma designs into a highly responsive web application. The solution features dynamic product listings, secure checkout processes, and optimized performance for fast load times. Built with scalability in mind, it includes SEO-friendly architecture, reusable components, and seamless third-party API integrations. Enhanced user experience through intuitive UI/UX, mobile responsiveness, and accessibility standards ensures broader reach. The project emphasizes modern web performance techniques like image optimization, code-splitting, and server-side rendering for superior user engagement and conversion rates.",
    category: "Web Development",
    imageUrl: "/portfolio/nest-mart.gif",
  },
  {
    id: 2,
    title: "Learning Platform Management",
    description:
      "An advanced, scalable learning management system (LMS) designed with Next.js, TypeScript, and Tailwind CSS, focusing on interactive data visualization. The platform efficiently handles large datasets, providing real-time analytics with dynamic charts and graphs to track learner progress. It features role-based access control, intuitive dashboards, and modular architecture for easy customization. Optimized for performance with server-side rendering, lazy loading, and responsive design, ensuring seamless experiences across devices. The solution also supports seamless API integrations, secure authentication, and efficient user management, making it ideal for educational institutions and corporate training environments.",
    category: "Web Development",
    imageUrl: "/portfolio/an-nahda.gif",
  },
  {
    id: 3,
    title: "Online Interview Solution",
    description:
      "A comprehensive digital interview platform built for streamlined recruitment processes, featuring real-time scheduling, candidate profile management, and integrated video conferencing. Developed using scalable web technologies, the solution ensures secure, lag-free communication with robust authentication and encryption protocols. It supports multi-role management for interviewers, candidates, and administrators, providing automated notifications, interview reminders, and feedback systems. The intuitive UI offers responsive design for accessibility across devices. Optimized with server-side rendering, performance enhancements, and cloud storage integration, it delivers a seamless hiring experience, reducing recruitment time while maintaining data privacy and security standards.",
    category: "Web Application",
    imageUrl: "/portfolio/interviewer.gif",
  },
];

const categories = ["All", "Web Development", "Web Application"];

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

  return (
    <ScrollArea>
      <div className="text-gray-200 h-[70vh] md:h-[74vh] flex flex-col items-center md:py-12 px-1 md:px-5">
        {/* Portfolio Introduction */}
        <motion.div
          className="md:px-4 mb-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.h1
            className="text-3xl lg:text-5xl font-bold text-gray-300 mb-4"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          >
            My Portfolio
          </motion.h1>
          <motion.p
            className="text-sm lg:text-lg leading-relaxed text-gray-300 font-light mb-6"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 0.1 } } }}
          >
            I am passionate about crafting modern, scalable web applications using Next.js, TypeScript, and Tailwind CSS. Here are a few projects that showcase my expertise and dedication to delivering high-quality solutions.
          </motion.p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="text-[10px] md:text-sm lg:text-lg leading-relaxed flex space-x-4 mb-8 font-light border-b w-full border-gray-700"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
          }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`md:px-4 py-2 rounded-full transition ${activeCategory === category
                ? "bg-transparent font-medium text-white"
                : "bg-transparent text-gray-400 hover:-translate-y-1"
                }`}
              variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 w-full max-w-5xl px-1 md:px-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
          }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              onClick={() => handleProjectClick(project)}
              className="relative cursor-pointer overflow-hidden group rounded-xl shadow-lg"
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
              }}
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-44 md:h-64 object-cover transform transition-transform duration-300 group-hover:scale-105 rounded-xl"
                height={250}
                width={400}
              />
              <div className="absolute inset-0 bg-black backdrop-blur-sm bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-sm mt-2 font-light">click to view more details</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal for Project Details */}
        {selectedProject && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
            <motion.div
              className="relative bg-white rounded-lg max-w-2xl p-6 text-gray-800 w-full mx-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={closeModal}
                className="absolute top-0 right-2 text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                &times;
              </button>
              <Image
                src={selectedProject.imageUrl}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-md mb-4"
                height={250}
                width={400}
              />
              <h3 className="text-2xl font-semibold">{selectedProject.title}</h3>
              <p className="mt-4 text-gray-600 text-base font-light">
                {selectedProject.description}
              </p>
            </motion.div>
          </div>
        )}
      </div>
    </ScrollArea>
  );
};

export default Portfolio;

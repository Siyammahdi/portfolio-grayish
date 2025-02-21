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
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with custom shopping cart and payment integration.",
    category: "Web Development",
    imageUrl: "/portfolio/portfolio1.png",
  },
  {
    id: 2,
    title: "Project Management Tool",
    description: "A collaborative tool for managing projects and tasks with team members.",
    category: "Web Development",
    imageUrl: "/portfolio/portfolio2.png",
  },
  {
    id: 3,
    title: "Social Media App",
    description: "A modern social media platform with real-time messaging and activity feeds.",
    category: "Mobile Development",
    imageUrl: "/portfolio/portfolio3.png",
  },
  {
    id: 4,
    title: "Social Media App",
    description: "A modern social media platform with real-time messaging and activity feeds.",
    category: "Mobile Development",
    imageUrl: "/portfolio/portfolio3.png",
  },
  {
    id: 5,
    title: "Social Media App",
    description: "A modern social media platform with real-time messaging and activity feeds.",
    category: "Mobile Development",
    imageUrl: "/portfolio/portfolio3.png",
  },
  {
    id: 6,
    title: "Social Media App",
    description: "A modern social media platform with real-time messaging and activity feeds.",
    category: "Mobile Development",
    imageUrl: "/portfolio/portfolio3.png",
  },
];

const categories = ["All", "Web Development", "Mobile Development", "Marketing"];

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <ScrollArea>
      <div className="text-gray-200 h-[70vh] md:h-[74vh] flex flex-col items-center md:py-12 px-1 md:px-5">
        {/* Marketing Text */}
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
            Portfolio
          </motion.h1>
          <motion.p
            className="text-sm lg:text-lg leading-relaxed text-gray-300 font-light mb-6"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 0.1 } } }}
          >
            At Uqidev, we believe in crafting innovative and scalable software solutions that help businesses achieve their goals. With a team of passionate developers, we specialize in creating customized applications that deliver exceptional user experiences and measurable results.
          </motion.p>
          <motion.p
            className="text-sm lg:text-lg leading-relaxed font-light text-gray-300"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 0.2 } } }}
          >
            Explore our portfolio and see the quality we deliver to help clients achieve success.
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
              className={`md:px-4 py-2 rounded-full transition ${
                activeCategory === category
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
          className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 w-full max-w-5xl px-1 md:px-4"
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
              className="relative cursor-pointer overflow-hidden group"
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
              }}
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-44 md:h-64 object-cover transform transition-transform duration-300 group-hover:scale-105"
                height={250}
                width={250}
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-sm mt-2">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal for Project Details */}
        {selectedProject && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
            <div className="relative bg-white rounded-lg max-w-2xl p-6 text-gray-800 w-full mx-4">
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
                width={250}
              />
              <h3 className="text-2xl font-semibold">{selectedProject.title}</h3>
              <p className="mt-4 text-gray-600 text-base font-light">{selectedProject.description}</p>
            </div>
          </div>
        )}
      </div>
    </ScrollArea>
  );
};

export default Portfolio;

"use client";

import { ScrollArea } from '@/components/ui/scroll-area';
import React, { useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { FaCode, FaLaptopCode, FaLightbulb } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import { TbBrandNextjs, TbBrandTailwind } from 'react-icons/tb';
import { SiTypescript, SiNodedotjs, SiExpress, SiMongodb, SiPostgresql } from 'react-icons/si';
import Image from 'next/image';

// Stagger container for the main div
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

// Stagger item for each element
const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, type: "spring", stiffness: 100 } },
};

// Text animation for headings
const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8,
      type: "spring",
      stiffness: 100
    }
  }
};

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const controls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <ScrollArea className="h-[70vh] md:h-[74vh] w-full">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10 -z-10">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-purple-500 rounded-full blur-3xl"></div>
      </div>
      
      <motion.div
        className="flex flex-col items-center justify-center text-gray-200 px-4 md:px-8 lg:px-12 py-8"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={staggerContainer}
      >
        {/* Header Badge */}
        <motion.div
          variants={staggerItem}
          className="mb-8"
        >
          <span className="relative inline-block px-3 py-1 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-500/20 before:to-purple-500/20 before:rounded-md">
            <span className="relative text-sm font-medium text-blue-400">ABOUT ME</span>
          </span>
        </motion.div>
        
        {/* Personal Details Section */}
        <div className="w-full max-w-5xl">
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center md:items-start">
            {/* Image and Tech stack */}
            <motion.div
              variants={staggerItem}
              className="w-full md:w-2/5 flex flex-col items-center"
            >
              <div className="relative">
                {/* Background shape */}
                <div className="absolute -top-4 -right-4 w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-md"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-bl from-teal-500/20 to-blue-500/20 blur-md"></div>
                
                {/* Profile image */}
                <div className="relative z-10 w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl">
                  <Image
                    src="/siyammahdi.jpg"
                    alt="Siyam Mahdi - Developer"
                    layout="fill"
                    objectFit="cover"
                    className="z-10"
                  />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-3 -left-3 w-6 h-6 bg-blue-500/30 rounded-full backdrop-blur-sm"></div>
                <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-purple-500/30 rounded-full backdrop-blur-sm"></div>
              </div>
              
              {/* Tech Stack Pills */}
              <motion.div 
                variants={staggerItem}
                className="mt-8 w-full max-w-xs"
              >
                <h3 className="text-sm text-center uppercase tracking-widest text-gray-400 mb-4">Tech Stack</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  <TechPill icon={<TbBrandNextjs />} label="Next.js" color="blue" />
                  <TechPill icon={<SiTypescript />} label="TypeScript" color="purple" />
                  <TechPill icon={<TbBrandTailwind />} label="Tailwind" color="teal" />
                  <TechPill icon={<SiNodedotjs />} label="Node.js" color="green" />
                  <TechPill icon={<SiExpress />} label="Express" color="gray" />
                  <TechPill icon={<SiMongodb />} label="MongoDB" color="green" />
                  <TechPill icon={<SiPostgresql />} label="PostgreSQL" color="amber" />
                </div>
              </motion.div>
            </motion.div>
            
            {/* Bio and Introduction */}
            <motion.div
              variants={staggerItem}
              className="w-full md:w-3/5"
            >
              <motion.h1 
                variants={textVariant}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 relative"
              >
                <span className="relative z-10">Developer &</span>
                <span className="relative z-10 block md:inline text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"> Web Enthusiast</span>
                <span className="absolute -top-6 left-0 text-7xl text-gray-800/20 font-bold -z-10 opacity-20">DEVELOPER</span>
              </motion.h1>
              
              <motion.p 
                variants={staggerItem}
                className="text-sm md:text-base text-gray-300 mb-6 leading-relaxed"
              >
                Hi, I am a passionate front-end developer specializing in building modern, responsive web applications using Next.js, TypeScript, Tailwind CSS, Framer Motion, and Shadcn UI. I craft smooth user experiences with clean, maintainable code and pixel-perfect designs.
              </motion.p>
              
              <motion.div
                variants={staggerItem}
                className="flex flex-wrap gap-6 mb-8"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  <span className="text-gray-300 text-sm">Available for Freelance</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  <span className="text-gray-300 text-sm">Remote Work</span>
                </div>
              </motion.div>
              
              {/* Experience Box */}
              <motion.div
                variants={staggerItem}
                className="p-4 border border-gray-800/60 rounded-xl backdrop-blur-sm bg-white/5"
              >
                <div className="flex flex-wrap gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">2+</h3>
                    <p className="text-sm text-gray-400">Years of Experience</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">40+</h3>
                    <p className="text-sm text-gray-400">Completed Projects</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">15+</h3>
                    <p className="text-sm text-gray-400">Happy Clients</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Expertise Section */}
        <motion.div 
          variants={staggerItem}
          className="w-full max-w-5xl mt-16 md:mt-24"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between mb-10">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Expertise</span>
              </h2>
              <p className="text-sm text-gray-400 mt-2 max-w-md">Services I offer and skills I specialize in</p>
            </div>
            
            <div className="h-px w-full md:w-1/3 bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                className="relative group p-6 bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden transition-all duration-300 hover:border-gray-600/50 hover:shadow-lg"
                variants={staggerItem}
                whileHover={{ y: -5 }}
              >
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                
                <div className="relative z-10">
                  <div className="flex justify-start items-center mb-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">{feature.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values and Goals Section */}
        <motion.div 
          variants={staggerItem}
          className="w-full max-w-5xl mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {/* Core Values */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <h2 className="text-2xl md:text-3xl font-bold text-white">Core Values</h2>
              <div className="h-px flex-grow bg-gradient-to-r from-gray-700 to-transparent"></div>
            </div>
            
            <ul className="space-y-5">
              <motion.li 
                className="flex gap-4 items-start" 
                variants={staggerItem}
              >
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <HiSparkles className="text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Performance Focused</h3>
                  <p className="text-sm text-gray-400">Optimizing every aspect for speed and efficiency.</p>
                </div>
              </motion.li>
              
              <motion.li 
                className="flex gap-4 items-start" 
                variants={staggerItem}
              >
                <div className="p-2 bg-purple-500/20 rounded-lg">
                  <HiSparkles className="text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">User-Centric Design</h3>
                  <p className="text-sm text-gray-400">Building engaging and responsive user experiences.</p>
                </div>
              </motion.li>
              
              <motion.li 
                className="flex gap-4 items-start" 
                variants={staggerItem}
              >
                <div className="p-2 bg-teal-500/20 rounded-lg">
                  <HiSparkles className="text-teal-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Scalable Solutions</h3>
                  <p className="text-sm text-gray-400">Writing clean and maintainable code for long-term success.</p>
                </div>
              </motion.li>
            </ul>
          </div>
          
          {/* Goals */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <h2 className="text-2xl md:text-3xl font-bold text-white">My Goals</h2>
              <div className="h-px flex-grow bg-gradient-to-r from-gray-700 to-transparent"></div>
            </div>
            
            <motion.div
              variants={staggerItem}
              className="p-6 bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700/50"
            >
              <p className="text-gray-300 mb-6 leading-relaxed">
                My mission is to transform ideas into reality through web technologies, offering solutions that are scalable, responsive, and delightful to use. I aim to contribute to projects where innovation and performance matter most.
              </p>
              
              <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg border border-gray-700/50">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm text-gray-300">Looking for new challenges</span>
                </div>
                <span className="text-sm text-green-400">Available</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </ScrollArea>
  );
};

// Tech Pill Component
const TechPill = ({ icon, label, color }: { icon: React.ReactNode, label: string, color: string }) => {
  const getColorClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      blue: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      purple: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      teal: 'bg-teal-500/20 text-teal-400 border-teal-500/30',
      pink: 'bg-pink-500/20 text-pink-400 border-pink-500/30',
      amber: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
      green: 'bg-green-500/20 text-green-400 border-green-500/30',
      gray: 'bg-gray-500/20 text-gray-400 border-gray-500/30',
    };
    return colorMap[color] || colorMap.blue;
  };
  
  return (
    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs border ${getColorClasses(color)}`}>
      {icon} {label}
    </span>
  );
};

export default About;

// Features Data for Cards
const features = [
  {
    id: 1,
    icon: <FaCode size={24} className="text-blue-400" />,
    title: "Modern Web Development",
    description:
      "Building fast, scalable web applications using Next.js, TypeScript, and Tailwind CSS.",
  },
  {
    id: 2,
    icon: <FaLaptopCode size={24} className="text-purple-400" />,
    title: "Figma to Next.js",
    description:
      "Converting stunning Figma designs into pixel-perfect, responsive Next.js websites.",
  },
  {
    id: 3,
    icon: <FaLightbulb size={24} className="text-teal-400" />,
    title: "Creative Animations",
    description:
      "Adding smooth, interactive animations with Framer Motion for engaging user experiences.",
  },
];
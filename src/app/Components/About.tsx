"use client";

import { ScrollArea } from '@/components/ui/scroll-area';
import React, { useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { FaCode, FaLaptopCode, FaLightbulb } from 'react-icons/fa';
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
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <ScrollArea className="h-[70vh] md:h-[74vh] w-full">
      <motion.div
        className="flex flex-col items-center justify-center text-gray-200"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={staggerContainer}
      >
        {/* Personal Image Section */}
        <div className='flex m-20 gap-10'>
          <div className='w-1/5'>
            <motion.div
              className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-gray-300 mb-6"
              variants={staggerItem}
            >
              <Image
                src="/siyammahdi.jpg" // Replace with your image path
                alt="My Profile Picture"
                layout="fill"
                objectFit="cover"
              />
            </motion.div>
          </div>

          <div>
            {/* Main Heading */}
            <motion.h1 className="text-3xl lg:text-5xl font-bold text-gray-300 mb-6" variants={staggerItem}>
              Developer & Web Enthusiast
            </motion.h1>

            {/* Intro Paragraph */}
            <motion.p className="text-xs md:text-sm lg:text-base leading-relaxed text-gray-300 mb-4 text-start" variants={staggerItem}>
              Hi, I am a passionate front-end developer specializing in building modern, responsive web applications using Next.js, TypeScript, Tailwind CSS, Framer Motion, and Shadcn UI. I craft smooth user experiences with clean, maintainable code and pixel-perfect designs.
            </motion.p>

          </div>
        </div>
        {/* Expertise Section */}
        <div className="pb-12 w-full max-w-3xl">
          <motion.h2 className="text-3xl font-bold text-gray-300 mb-6 text-center" variants={staggerItem}>
            What I Do Best
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                className="p-6 bg-neutral-800/50 rounded-xl border-2 shadow-lg text-center"
                variants={staggerItem}
              >
                <div className="flex justify-center items-center w-12 h-12 mx-auto bg-gray-300 rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Core Values Section */}
        <div className='mx-28'>
          <motion.h2 className="text-3xl font-bold text-gray-300 mt-8 mb-4" variants={staggerItem}>
            My Core Values
          </motion.h2>
          <motion.p className="text-sm lg:text-lg leading-relaxed text-gray-300 mb-4 text-start" variants={staggerItem}>
            I believe in clean code, intuitive UI/UX, and delivering performant web solutions. My work reflects a strong commitment to innovation, collaboration, and continuous improvement.
          </motion.p>

          {/* Values List */}
          <motion.ul className="list-inside list-disc text-base space-y-3" variants={staggerItem}>
            <motion.li className="text-gray-300" variants={staggerItem}>
              <strong className="font-semibold text-gray-200">Performance Focused:</strong> Optimizing every aspect for speed and efficiency.
            </motion.li>
            <motion.li className="text-gray-300" variants={staggerItem}>
              <strong className="font-semibold text-gray-200">User-Centric Design:</strong> Building engaging and responsive user experiences.
            </motion.li>
            <motion.li className="text-gray-300" variants={staggerItem}>
              <strong className="font-semibold text-gray-200">Scalable Solutions:</strong> Writing clean and maintainable code for long-term success.
            </motion.li>
          </motion.ul>

          {/* Goals Section */}
          <motion.h2 className="text-3xl font-bold text-gray-300 mt-8 mb-4" variants={staggerItem}>
            My Goals
          </motion.h2>
          <motion.p className="text-sm lg:text-lg leading-relaxed text-gray-300 mb-4 text-start" variants={staggerItem}>
            My mission is to transform ideas into reality through web technologies, offering solutions that are scalable, responsive, and delightful to use. I aim to contribute to projects where innovation and performance matter most.
          </motion.p>
        </div>
      </motion.div>
    </ScrollArea>
  );
};

export default About;

// Features Data for Cards
const features = [
  {
    id: 1,
    icon: <FaCode className="text-gray-600" />,
    title: "Modern Web Development",
    description:
      "Building fast, scalable web applications using Next.js, TypeScript, and Tailwind CSS.",
  },
  {
    id: 2,
    icon: <FaLaptopCode className="text-gray-600" />,
    title: "Figma to Next.js",
    description:
      "Converting stunning Figma designs into pixel-perfect, responsive Next.js websites.",
  },
  {
    id: 3,
    icon: <FaLightbulb className="text-gray-600" />,
    title: "Creative Animations",
    description:
      "Adding smooth, interactive animations with Framer Motion for engaging user experiences.",
  },
];

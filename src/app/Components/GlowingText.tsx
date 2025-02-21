"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "React",
    description:
      "The library for web and native user interfaces. Next.js is built on the latest React features, including Server Components and Actions.",
    icon: "/public/background.jpg",
  },
  {
    title: "Next.js",
    description:
      "The React framework for production, enabling server-side rendering and static site generation.",
    icon: "/public/background2.jpg", 
  },
  {
    title: "Tailwind CSS",
    description: "A utility-first CSS framework for rapidly building custom designs.",
    icon: "/public/background3.jpg", 
  },
];

export default function ServiceCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false); // Card starts disappearing
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length); // Change content
        setIsVisible(true); // Card reappears with new content
      }, 800); // Wait for 0.8 seconds before showing new content

    }, 5000); // Change content every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const currentService = services[currentIndex];

  return (
    <div className="relative w-full bg-gray-800">
      <motion.div
        key={currentService.title}
        initial={{ x: 0, opacity: 1 }} // Start at center and visible
        animate={{
          x: isVisible ? 0 : "100%", // Move out to the right when invisible
          opacity: isVisible ? 1 : 0, // Fade out when invisible
        }}
        exit={{ x: "100%", opacity: 0 }} // Slide out to the right and fade
        transition={{ duration: 1 }} // Smooth transition for the movement
        className="relative flex items-center justify-center w-[250px] h-[250px] bg-contain bg-no-repeat bg-center pb-4"
        style={{
          backgroundImage: `url('/textBubble.png')`, // Background for the card
        }}
      >
        <div className="flex items-center mb-4">
          <motion.img
            src={currentService.icon}
            alt={currentService.title}
            className="h-10 w-10 mr-4"
          />
          <h2 className="text-xl font-bold">{currentService.title}</h2>
        </div>
        <motion.p className="text-sm">{currentService.description}</motion.p>
      </motion.div>
    </div>
  );
}

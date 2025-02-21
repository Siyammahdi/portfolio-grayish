import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "React",
    description:
      "The library for web and native user interfaces. Next.js is built on the latest React features, including Server Components and Actions.",
    icon: "/background.jpg",
  },
  {
    title: "Next.js",
    description:
      "The React framework for production, enabling server-side rendering and static site generation.",
    icon: "/background2.jpg",
  },
  {
    title: "Tailwind CSS",
    description: "A utility-first CSS framework for rapidly building custom designs.",
    icon: "/background3.jpg",
  },
];

const ServiceCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-screen h-64 flex items-center justify-end overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={services[currentIndex].title}
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{
            x: { duration: 0.8 },
            opacity: { duration: 0.5 },
          }}
          className="absolute bg-[#1c1b1e] border-[3px] border-[#282829] text-white p-6 rounded-xl shadow-lg w-96"
        >
          <div className="flex items-center mb-4">
            <Image
              src={services[currentIndex].icon}
              alt={services[currentIndex].title}
              className="mr-4 h-10 w-10 rounded-lg"
              width={50}
              height={50}
            />
            <h2 className="text-xl font-bold">{services[currentIndex].title}</h2>
          </div>
          <p className="text-sm">{services[currentIndex].description}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ServiceCard;

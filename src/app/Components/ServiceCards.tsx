import React, { useEffect, useState } from "react";
import { Toaster, toast } from "sonner";
import { FaDesktop, FaCogs, FaCode, FaMobileAlt, FaClipboardCheck } from "react-icons/fa";

const services = [
  {
    title: "Front-end developers",
    description: "Specialists in crafting user interfaces and experiences.",
    icon: <FaDesktop className="text-3xl text-blue-500" />,
    gradient: "linear-gradient(to right, transparent, #00d1ff, transparent)", // Blue
  },
  {
    title: "Back-end developers",
    description: "Experts in server-side logic and database management.",
    icon: <FaCogs className="text-3xl text-green-500" />,
    gradient: "linear-gradient(to right, transparent, #28a745, transparent)", // Green
  },
  {
    title: "Full-stack developers",
    description: "Developers skilled in both front-end and back-end technologies.",
    icon: <FaCode className="text-3xl text-purple-500" />,
    gradient: "linear-gradient(to right, transparent, #6f42c1, transparent)", // Purple
  },
  {
    title: "App developers",
    description: "Designers and developers of both android and ios applications.",
    icon: <FaMobileAlt className="text-3xl text-red-500" />,
    gradient: "linear-gradient(to right, transparent, #dc3545, transparent)", // Red
  },
  {
    title: "Quality Assurance",
    description: "Ensuring the software is bug-free and meets standards.",
    icon: <FaClipboardCheck className="text-3xl text-yellow-500" />,
    gradient: "linear-gradient(to right, transparent, #ffc107, transparent)", // Yellow
  },
];

const ServiceCard = () => {
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    let interval: NodeJS.Timeout;

    const startLoop = () => {
      interval = setInterval(() => {
        if (!isPaused) {
          const service = services[currentIndex];
          toast(
            <div
              className="flex items-start space-x-4 text-white p-4 rounded-lg card"
              style={{ "--card-gradient": service.gradient } as React.CSSProperties}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="bg-gra bg-gradient-to-b from-[#232323] to-[#121212] p-4 rounded-lg ">
                <div className="flex-shrink-0 mb-4">{service.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-200">{service.title}</h3>
                  <p className="text-sm text-gray-400">{service.description}</p>
                </div>
              </div>
            </div>,
            { duration: Infinity }
          );

          currentIndex = (currentIndex + 1) % services.length;
        }
      }, 4000);
    };

    startLoop();

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="relative w-screen h-64 flex items-center justify-center">
      <Toaster className="mb-20" />
    </div>
  );
};

export default ServiceCard;

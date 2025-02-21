import React, { useEffect, useState } from "react";
import { Toaster, toast } from "sonner";
import { FaLaptopCode, FaDatabase, FaPalette, FaProjectDiagram, FaChartLine } from "react-icons/fa";

const services = [
  {
    title: "Front-end Development",
    description:
      "Building responsive, interactive web interfaces using Next.js, React, TypeScript, and Tailwind CSS.",
    icon: <FaLaptopCode className="text-3xl text-blue-500" />,
    gradient: "linear-gradient(to right, transparent, #00d1ff, transparent)",
  },
  {
    title: "Full-stack Development",
    description:
      "Developing scalable full-stack applications with the MERN stack, combining front-end and back-end expertise.",
    icon: <FaDatabase className="text-3xl text-green-500" />,
    gradient: "linear-gradient(to right, transparent, #28a745, transparent)",
  },
  {
    title: "Figma to Next.js Conversion",
    description:
      "Pixel-perfect, high-performance website conversions from Figma designs to React/Next.js applications.",
    icon: <FaPalette className="text-3xl text-purple-500" />,
    gradient: "linear-gradient(to right, transparent, #6f42c1, transparent)",
  },
  {
    title: "Web Automation",
    description:
      "Automating web tasks efficiently using modern technologies for streamlined workflows.",
    icon: <FaProjectDiagram className="text-3xl text-red-500" />,
    gradient: "linear-gradient(to right, transparent, #dc3545, transparent)",
  },
  {
    title: "Data Visualization",
    description:
      "Transforming complex data into interactive, meaningful visualizations for insightful analysis.",
    icon: <FaChartLine className="text-3xl text-yellow-500" />,
    gradient: "linear-gradient(to right, transparent, #ffc107, transparent)",
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
              <div className="bg-gradient-to-b from-[#232323] to-[#121212] p-4 rounded-lg ">
                <div className="flex-shrink-0 mb-4 ">{service.icon}</div>
                <div>
                  <h3 className="text-sm md:text-lg font-bold text-gray-200">{service.title}</h3>
                  <p className="text-[10px] md:text-sm text-gray-400">{service.description}</p>
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
      <Toaster className="" />
    </div>
  );
};

export default ServiceCard;

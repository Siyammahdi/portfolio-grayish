"use client";

import { useState, ReactNode } from "react";
import { IoClose } from "react-icons/io5";
import { FaLinkedin, FaGithub, FaWhatsapp, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";
import Clients from "./Components/Clients";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
import Header from "./Components/Header";
import { AnimatedText } from "./Components/AnimatedText";
// import GlowingText from "./Components/GlowingText";
import LaptopScreen from "./Components/LaptopScreen";
import ServiceCard from "./Components/ServiceCards";
import Link from "next/link";
import Meeting from "./Components/Meeting";

type ModalContentType = "Portfolio" | "About" | "Contact" | "Meeting" | null;


const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "/siyammahdi_resume.pdf";
  link.download = "siyammahdi_resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const social = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 3,
    },
  },
};

const socialItems = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<ModalContentType>(null);

  const openModal = (content: ModalContentType) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  const renderModalContent = (): ReactNode => {
    switch (modalContent) {
      case "Portfolio":
        return <Portfolio />;
      case "About":
        return <About />;
      case "Contact":
        return <Contact />;
      case "Meeting":
        return <Meeting />;
      default:
        return null;
    }
  };

  return (
    <div className="relative text-gray-200">
      <motion.div
        className="absolute bg-[url('/noise-light.png')] h-full w-full -z-50 top-0 left-0 opacity-60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 0.8 }}
      ></motion.div>
      <motion.div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${isModalOpen ? "backdrop-blur-sm opacity-100 z-50" : "opacity-0 pointer-events-none "
          }`}
        onClick={closeModal}
        initial={{ opacity: 0 }}
        animate={{ opacity: isModalOpen ? 1 : 0 }}
        exit={{ opacity: 0 }}
      ></motion.div>
      <motion.div
        className="h-screen flex flex-col justify-between"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item}>
          <Header openModal={openModal} />
        </motion.div>
        <motion.div className="m-5 md:m-10 space-y-5" variants={item}>
          <motion.h2
            className="text-2xl md:text-4xl font-semibold lg:text-6xl md:w-1/2 lg:w-1/2"
            variants={item}
          >
            <AnimatedText
              className="relative -z-10 uppercase"
              text="Building High-Quality Web Solutions with Modern Tech"
            />
          </motion.h2>
          <motion.div
            className="text-[10px] md:text-xs lg:text-sm uppercase w-2/3 lg:w-1/3"
            variants={item}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 3,
              }}
              className="text-[10px] md:text-sm lg:text-2xl normal-case font-semibold relative text-[#5f5f5f] -z-20"
            >

<span className="text-white">Turn ideas into reality,</span> collaborate with dedicated experts for <span className="text-blue-400">lightning-fast</span> delivery and <span className="text-purple-400">flawless precision.</span>
            </motion.p>
            <motion.div className="my-4 space-x-4 relative z-0" variants={item}>
              <button
                onClick={handleDownload}
                className="text-gray-800 px-4 py-2 rounded-full hover:bg-gray-300 bg-gray-200"
              >
                Resume
              </button>
              <button onClick={() => openModal("Meeting")} className="text-gray-200 px-4 py-2 rounded-full hover:bg-gray-200 border-2 hover:border-gray-200 hover:text-gray-800" >Set a meeting</button>

            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div variants={item}>
          <Clients />
        </motion.div>
      </motion.div>

      <div
        className={`fixed inset-0 flex items-center justify-center transition-opacity z-50 duration-200 ${isModalOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}

      >
        <div
          className={`shadow-lg bg-black rounded-3xl p-3 md:p-6 w-11/12 max-w-6xl transform transition-transform duration-200 border-2 border-[#292928] ${isModalOpen ? "translate-y-0" : "translate-y-full"
            }`}

        >
          <button
            onClick={closeModal}
            className="absolute top-8 z-50 right-8 text-gray-500 hover:text-gray-700"
          >
            <IoClose size={32} />
          </button>
          <div
            style={{
              backgroundImage: 'url("/modalBg4.jpg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="text-xl font-semibold bg-[#1c1b1e] rounded-xl"
          >
            {renderModalContent()}
          </div>
        </div>
      </div>
      <motion.div
        className="absolute hidden bottom-6 right-6 lg:right-[430px] md:flex items-center gap-4 text-white mb-12 md:mb-0 text-lg md:text-2xl"
        variants={social}
        initial="hidden"
        animate="show"
      >
        <motion.div className="flex items-center  text-gray-700 md:p-1 pl-2 md:pl-4 rounded-full bg-white">
          <Link href="https://wa.link/hpxctc"><p className="text-[10px] md:text-xs w-20">Connect with</p></Link>
          <FaWhatsapp size={30} />
        </motion.div>

        {[
          {
            href: "https://linkedin.com",
            icon: <FaLinkedin />,
            hover: "hover:text-blue-500",
          },
          {
            href: "https://github.com/Siyammahdi",
            icon: <FaGithub />,
            hover: "hover:text-gray-400",
          },
          {
            href: "https://www.facebook.com/siyammahdi911",
            icon: <FaFacebook />,
            hover: "hover:text-blue-400",
          },
        ].map(({ href, icon, hover }, idx) => (
          <motion.a
            key={idx}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={hover}
            variants={socialItems}
          >
            {icon}
          </motion.a>
        ))}
      </motion.div>

      <div className="absolute top-1/4 right-0 z-0">
        <ServiceCard />
      </div>

      <motion.div
        className=""
        variants={item}
      >
        <LaptopScreen />
      </motion.div>
    </div>
  );
}

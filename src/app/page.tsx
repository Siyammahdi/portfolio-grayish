"use client";

import { useState, ReactNode, JSX } from "react";
import { motion } from "framer-motion";
import SocialLinks from "./Components/SocialLinks";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
import Header from "./Components/Header";
import { AnimatedText } from "./Components/AnimatedText";
import LaptopScreen from "./Components/LaptopScreen";
import ServiceCard from "./Components/ServiceCards";
import Meeting from "./Components/Meeting";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import SkillSlider from "./Components/SkillSlider";

type ModalContentType = "Portfolio" | "About" | "Contact" | "Meeting" | null;

const handleDownload = (): void => {
  const link = document.createElement("a");
  link.href = "/siyammahdi_resume.pdf";
  link.download = "siyammahdi_resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};



const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Home(): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ModalContentType>(null);

  const openModal = (content: ModalContentType): void => {
    setModalContent(content);
    setIsModalOpen(true);
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
    <div className="relative h-screen text-gray-200">
      <motion.div
        className="absolute bg-[url('/noise-light.png')] h-full w-full -z-50 top-0 left-0 opacity-60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 0.8 }}
      />
      
      <motion.div className="h-[80vh] md:h-screen flex flex-col justify-between" initial="hidden" animate="show">
        <motion.div variants={itemVariants}>
          <Header openModal={openModal} />
        </motion.div>

        <motion.div>
          <SkillSlider />
        </motion.div>
        
        <motion.div className="m-5 md:m-10 pb-48 space-y-5" variants={itemVariants}>
          <motion.h2 className="text-2xl md:text-4xl font-semibold lg:text-5xl md:w-1/2 lg:w-1/2">
            <AnimatedText className="relative -z-10 uppercase" text="Building High-Quality Web Solutions with Modern Tech" />
          </motion.h2>
          <motion.p className="w-2/3 md:w-1/3 text-[10px] md:text-sm lg:text-2xl font-semibold text-[#5f5f5f]">
            <span className="text-white">Turn ideas into reality,</span> collaborate with dedicated experts for <span className="text-blue-400">lightning-fast</span> delivery and <span className="text-purple-400">flawless precision.</span>
          </motion.p>
          <motion.div className="relative z-10 my-4 space-x-4">
            <button onClick={handleDownload} className="text-gray-800 px-3 md:px-4 py-2 rounded-full text-xs md:text-base  hover:bg-gray-300 bg-gray-200">
              Resume
            </button>
            <button onClick={() => openModal("About")} className="text-gray-200 px-3 md:px-4 py-2 rounded-full text-xs md:text-base hover:bg-gray-200 border-2 hover:border-gray-200 hover:text-gray-800">
              About Me
            </button>
          </motion.div>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <SocialLinks />
        </motion.div>
      </motion.div>
      
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-black border-2 border-[#292928] text-gray-200">
          <DialogHeader>
            <DialogTitle>{modalContent}</DialogTitle>
          </DialogHeader>
          {renderModalContent()}
        </DialogContent>
      </Dialog>
      

      
      <div className="absolute top-1/4 right-0">
        <ServiceCard />
      </div>
      
      <motion.div variants={itemVariants}>
        <LaptopScreen />
      </motion.div>
    </div>
  );
}
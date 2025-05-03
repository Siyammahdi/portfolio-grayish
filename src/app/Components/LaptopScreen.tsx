"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const GlowingTextBlock = ({
  text,
  isVisible,
}: {
  text: string;
  isVisible: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="absolute w-[300px] md:w-[400px]  top-2/3 md:bottom-1/3  md:left-2/4 mx-7 md:mx-10 md:rotate-[4.5deg]"
    >
      <p className="font-semibold text-white text-[8px] md:text-[10px] lg:text-xs text-center px-4 md:italic">{text}</p>
    </motion.div>
  );
};

const texts = [
  "BUILD THE FUTURE WITH CODE THAT REFLECTS YOUR VISION—BUILT TO SCALE, DESIGNED TO PERFORM.",
  "FACING DEVELOPMENT ROADBLOCKS? I CRAFT SOLUTIONS THAT DRIVE RESULTS AND GROWTH.",
  "KEEP YOUR PROJECT ON TRACK—PERFORMANCE, PRECISION, AND INNOVATION JUST AN EMAIL AWAY.",
  "CUT COSTS, NOT QUALITY—DELIVERING SCALABLE SOLUTIONS WITH CLEAN, MODERN CODE.",
  "NO PROJECT TOO COMPLEX, NO CODE TOO CHALLENGING—I TURN IDEAS INTO DEPLOYED REALITY.",
  "NEED A DEVELOPER WHO DELIVERS? I BUILD, OPTIMIZE, AND SCALE—TAILORED TO YOUR NEEDS.",
  "FROM CODE CHAOS TO SEAMLESS SOLUTIONS—LET’S STREAMLINE YOUR NEXT BIG IDEA.",
  "TURN BOLD IDEAS INTO POWERFUL WEB EXPERIENCES—CLEAN CODE, MODERN STACKS, AND SCALABLE RESULTS.",
];


export default function MainScreen() {
  const [visibleTextIndex, setVisibleTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setVisibleTextIndex((current) => (current + 1) % texts.length);
        setIsVisible(true);
      }, 500);
    }, 8000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="relative -z-20">
      <div className="fixed inset-0 z-50 pointer-events-none">
        <GlowingTextBlock text={texts[visibleTextIndex]} isVisible={isVisible} />
      </div>
    </div>
  );
}

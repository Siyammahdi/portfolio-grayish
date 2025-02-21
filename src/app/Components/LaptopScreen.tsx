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
      className="absolute w-[400px] bottom-1/3 left-2/4 mx-10 rotate-[4.5deg]"
    >
      <p className="font-semibold text-white text-xs text-center px-4 italic">{text}</p>
    </motion.div>
  );
};

const texts = [
  "THE FUTURE OF YOUR STARTUP BEGINS WITH DEV TALENT THAT UNDERSTANDS YOUR VISION",
  "STUCK IN A DEVELOPMENT CRISIS? LET OUR TEAM RESCUE YOU WITH VISIONARY SOLUTIONS",
  "TO KEEP YOUR PROJECT ON TRACK AND DESTINED FOR GREATNESS, WE’RE ONLY AN EMAIL AWAY.",
  "SAVE YOUR STARTUP FROM ALL-CONSUMING BURN RATE ONLY $55 to $95 /hour",
  "NO PROJECT TOO COMPLEX, NO CODE TOO CURIOUS—WE SOLVE IT ALL",
  "AND IF YOUR DEV TURNS INTO A DEVIL, WE DELIVER A NEW DEVOTEE",
  "FROM CODE CHAOS TO STREAMLINED SUCCESS, WE’RE JUST A CLICK AWAY",
  "TURN YOUR IDEAS INTO INNOVATION WITH DEVS WHO BREATHE MAGIC INTO CODE",
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

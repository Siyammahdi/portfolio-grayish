"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaDiscord, FaInstagram, FaSquareXTwitter, FaTelegram } from "react-icons/fa6";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.22,
    },
  },
};

const fadeInFromBottom = {
  hidden: { opacity: 0, y: 10, filter: "blur(10px)", scale: 1.2 },
  show: { opacity: 1, y: 0, filter: "blur(0px)", scale: 1, transition: { duration: 0.5 } },
};

const SocialLinks = () => {
  const discordUsername = "siyammahdi";
  const telegramUsername = "@Siyammahdi";
  const [copied, setCopied] = useState(false);
  const [telegramCopied, setTelegramCopied] = useState(false);

  const copyToClipboard = (username: string, setter: React.Dispatch<React.SetStateAction<boolean>>) => {
    navigator.clipboard.writeText(username);
    setter(true);
    setTimeout(() => setter(false), 2000);
  };

  return (
    <TooltipProvider>
      <motion.div
        className="absolute hidden bottom-10 left-10 md:flex items-center gap-4 text-white text-lg md:text-2xl"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        {/* WhatsApp Link */}
        <motion.div
          className="flex items-center text-gray-700 p-1 pl-2 rounded-full bg-white"
          variants={fadeInFromBottom}
        >
          <Link href="https://wa.link/hpxctc">
            <p className="text-[10px] md:text-xs w-20">Connect with</p>
          </Link>
          <FaWhatsapp size={30} />
        </motion.div>

        {/* Social Media Links */}
        {[  
          { href: "https://linkedin.com", icon: <FaLinkedin />, hover: "hover:text-blue-500" },
          { href: "https://github.com/Siyammahdi", icon: <FaGithub />, hover: "hover:text-gray-400" },
          { href: "https://www.facebook.com/siyammahdi911", icon: <FaFacebook />, hover: "hover:text-blue-400" },
          { href: "https://x.com/siyam_mahdi", icon: <FaSquareXTwitter />, hover: "hover:text-blue-400" },
          { href: "https://www.instagram.com/siyam.mah/", icon: <FaInstagram />, hover: "hover:text-blue-400" },
        ].map(({ href, icon, hover }, idx) => (
          <motion.a
            key={idx}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={hover}
            variants={fadeInFromBottom}
          >
            {icon}
          </motion.a>
        ))}

        {/* Discord with Tooltip and Copy Functionality */}
        <motion.div variants={fadeInFromBottom}>
          <Tooltip>
            <TooltipTrigger asChild>
              <button onClick={() => copyToClipboard(discordUsername, setCopied)} className="relative flex items-center justify-center">
                <FaDiscord className="hover:text-blue-400" />
              </button>
            </TooltipTrigger>
            <TooltipContent side="top">
              {copied ? "Copied!" : discordUsername}
            </TooltipContent>
          </Tooltip>
        </motion.div>

        {/* Telegram with Tooltip and Copy Functionality */}
        <motion.div variants={fadeInFromBottom}>
          <Tooltip>
            <TooltipTrigger asChild>
              <button onClick={() => copyToClipboard(telegramUsername, setTelegramCopied)} className="relative flex items-center justify-center">
              <FaTelegram className="hover:text-blue-400" />
              </button>
            </TooltipTrigger>
            <TooltipContent side="top">
              {telegramCopied ? "Copied!" : telegramUsername}
            </TooltipContent>
          </Tooltip>
        </motion.div>
      </motion.div>
    </TooltipProvider>
  );
};

export default SocialLinks;

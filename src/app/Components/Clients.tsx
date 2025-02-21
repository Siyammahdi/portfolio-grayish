import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react';
import Logo1 from "@/../public/clients/logo1.png";
import Logo2 from "@/../public/clients/logo2.png";
import Logo3 from "@/../public/clients/logo3.png";
import Logo4 from "@/../public/clients/logo4.png";
import Logo5 from "@/../public/clients/logo5.png";
import Logo6 from "@/../public/clients/logo6.png";
import Logo7 from "@/../public/clients/logo7.png";

const staggerContainer = {
  show: {
    transition: {
      staggerChildren: 0.22,
    },
  },
};

const fadeInFromBottom = {
  hidden: { opacity: 0, y: 10, filter: "blur(10px)", scale: 1.2 },
  show: { opacity: 1, y: 0, filter: "blur(0px)", scale: 1 },
};

const Clients = () => {
  return (
    <motion.div
      className="fixed -z-10 left-0 flex gap-5 p-5 md:gap-10 md:p-10 top-16 mx-5 lg:top-auto lg:bottom-0"
      variants={staggerContainer}
      initial="hidden"
      animate="show"
    >
      {[Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7].map((logo, index) => (
        <motion.div key={index} variants={fadeInFromBottom}>
          <Image
            src={logo}
            alt={`logo${index + 1}`}
            height={50}
            width={50}
            className=""
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Clients;
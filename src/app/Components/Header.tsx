import Image from 'next/image';
import React from 'react';
import Logo from "@/../public/logo.png";
import { FiMenu } from "react-icons/fi";
import { Drawer } from 'vaul';
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';
import { motion } from "framer-motion";

type ModalContentType = "Portfolio" | "About" | "Contact";

interface HeaderProps {
  openModal: (content: ModalContentType) => void;
}


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


const Header: React.FC<HeaderProps> = ({ openModal }) => {
  return (
    <header className="relative z-50">
      <div className="m-10 flex justify-between items-center">
        <div>
          <Image className='w-1/3 md:w-full' src={Logo} alt="logo" height={60} width={160} />
        </div>

        {/* Mobile Menu Drawer Trigger */}
        <Drawer.Root>
          <Drawer.Trigger asChild>
            <button className="lg:hidden z-10 text-3xl">
              <FiMenu size={18} />
            </button>
          </Drawer.Trigger>
          <Drawer.Portal>
            <Drawer.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
            <Drawer.Content className="bg-[#292928] h-fit fixed bottom-0 left-0 right-0 rounded-t-2xl outline-none">
              {/* Accessible Drawer Title */}
              <Drawer.Title className="sr-only">Navigation Menu</Drawer.Title>

              <div className="flex flex-col items-center py-10 space-y-6 text-2xl text-white">
                <Drawer.Close asChild>
                  <button onClick={() => openModal("Portfolio")} className="hover:text-yellow-600 text-base">
                    Portfolio
                  </button>
                </Drawer.Close>
                <Drawer.Close asChild>
                  <button onClick={() => openModal("About")} className="hover:text-yellow-600 text-base">
                    About
                  </button>
                </Drawer.Close>
                <Drawer.Close asChild>
                  <button onClick={() => openModal("Contact")} className="hover:text-yellow-600 text-base">
                    Contact
                  </button>
                </Drawer.Close>

                <Drawer.Close asChild>
                  <motion.div
                    className="md:hidden gap-4 text-white mb-12 md:mb-0 text-lg md:text-2xl"
                    variants={social}
                    initial="hidden"
                    animate="show"
                  >
                    <motion.div className="flex items-center  text-gray-700 md:p-1 pl-2 md:pl-4 rounded-full bg-white">
                      <Link href="https://wa.link/hpxctc"><p className="text-[10px] md:text-xs w-20">Connect with</p></Link>
                      <FaWhatsapp size={30} />
                    </motion.div>


                  </motion.div>
                </Drawer.Close>
                <Drawer.Close asChild>
                  <div className='flex gap-4'>
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
                  </div>
                </Drawer.Close>

              </div>
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex absolute right-10 gap-10">
          <button onClick={() => openModal("Portfolio")} className="hover:text-yellow-600">
            Portfolio
          </button>
          <button onClick={() => openModal("About")} className="hover:text-yellow-600">
            About
          </button>
          <button onClick={() => openModal("Contact")} className="hover:text-yellow-600">
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

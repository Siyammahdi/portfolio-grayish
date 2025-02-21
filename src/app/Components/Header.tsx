import Image from 'next/image';
import React from 'react';
import Logo from "@/../public/logo.png";
import { FiMenu } from "react-icons/fi";
import { Drawer } from 'vaul';

type ModalContentType = "Portfolio" | "About" | "Contact";

interface HeaderProps {
  openModal: (content: ModalContentType) => void;
}

const Header: React.FC<HeaderProps> = ({ openModal }) => {
  return (
    <header className="relative z-50">
      <div className="m-10 flex justify-between items-center">
        <Image src={Logo} alt="logo" height={60} width={160} />

        {/* Mobile Menu Drawer Trigger */}
        <Drawer.Root>
          <Drawer.Trigger asChild>
            <button className="lg:hidden z-10 text-3xl">
              <FiMenu />
            </button>
          </Drawer.Trigger>
          <Drawer.Portal>
            <Drawer.Overlay className="fixed inset-0 bg-black/60" />
            <Drawer.Content className="bg-[#292928] h-fit fixed bottom-0 left-0 right-0 rounded-t-2xl outline-none">
              {/* Accessible Drawer Title */}
              <Drawer.Title className="sr-only">Navigation Menu</Drawer.Title>

              <div className="flex flex-col items-center py-10 space-y-6 text-2xl text-black">
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

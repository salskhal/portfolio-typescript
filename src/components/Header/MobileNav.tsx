import logo from "@/assets/logo.svg";
import { HomeIcon, AboutIcon, WorkIcon } from "@/icons";
import React from "react";

interface MobileNavProps {
  isMobileNavOpen: boolean;
  setIsMobileNavOpen: (isOpen: boolean) => void;
}

export default function MobileNav({
  isMobileNavOpen,
  setIsMobileNavOpen,
}: MobileNavProps) {
  const handleMobileNav = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains("overlay")) {
      setIsMobileNavOpen(!isMobileNavOpen);
    }
  };
  return (
    <div
      className="fixed w-full h-screen top-0 left-0 bg-blue-950 bg-opacity-90 z-50 sm:hidden overlay"
      onClick={handleMobileNav}
    >
      <div className="fixed p-5 top-0 left-0 w-3/4 bg-[#172135] h-full">
        <div>
          <img src={logo} alt="logo" className="w-20" />
        </div>
        <div className="flex mt-10 px-2">
          <ul className="flex flex-col items-center space-y-10 text-lg font-semibold">
            <a
              href="#home"
              onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            >
              <li className="border-b-2 border-transparent hover:border-white cursor-pointer">
                <div className="flex items-center space-x-2">
                  <HomeIcon className="w-5" />
                  <span>Home</span>
                </div>
              </li>
            </a>
            <a
              href="#about"
              onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            >
              <li className="border-b-2 border-transparent hover:border-white cursor-pointer">
                <div className="flex items-center space-x-2">
                  <AboutIcon className="w-5" />
                  <span>About</span>
                </div>
              </li>
            </a>
            <a
              href="#projects"
              onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            >
              <li className="border-b-2 border-transparent hover:border-white cursor-pointer">
                <div className="flex items-center space-x-2">
                  <WorkIcon className="w-5" />
                  <span>Projects</span>
                </div>
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

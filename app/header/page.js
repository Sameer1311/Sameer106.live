"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { MenuSquareIcon } from "lucide-react";
import { ModeToggle } from "../component/mode";

const NavLinks = ({ onLinkClick }) => (
  <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6 p-4 md:p-0">
    <Link
      href="/"
      onClick={onLinkClick}
      className="font-mono text-black dark:text-white text-m font-medium transition-all duration-300 text-foreground"
    >
      Daifolio
    </Link>
    <Link
      href="/"
      onClick={onLinkClick}
      className="font-mono text-m  text-gray-500 hover:text-foreground transition-all duration-300"
    >
      Home
    </Link>
    <Link
      href="/Comp_page"
      onClick={onLinkClick}
      className="my_code text-m font-medium text-gray-500 hover:text-foreground transition-all duration-300"
    >
      Components
    </Link>
    
  </div>
);

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen((prev) => !prev);
  const handleCloseMenu = () => setMenuOpen(false);

  return (
    <header className="w-screen z-50 bg-white dark:bg-neutral-900 fixed border-t border-b border-gray-300 dark:border-neutral-800 md:mt-2 shadow-md md:shadow-none">
      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center justify-between max-w-3xl w-full mx-auto border-l border-r border-gray-300 dark:border-neutral-800 p-2">
      <Link href="/">
        <div className=" text-4xl font-pixelify font-bold text-black dark:text-zinc-100  mx-5">
          SM
        </div>
      </Link>
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6 p-4 md:p-0">
    <Link
      href="/"
      className="font-mono text-m font-medium transition-all duration-300 text-foreground"
    >
      Daifolio
    </Link>
    <Link
      href="/"
      className="font-mono text-m  text-gray-500 hover:text-foreground transition-all duration-300"
    >
      Home
    </Link>
    <Link
      href="/Comp_page"
      className="my_code text-m font-medium text-gray-500 hover:text-foreground transition-all duration-300"
    >
      Components
    </Link>
    <Button size="icon" className="border-[1px] rounded-full border-gray-300 dark:border-neutral-800">
      <Link href="https://github.com/Sameer1311/Sameer106.live" target="_blank">
        <FontAwesomeIcon icon={faGithub} />
      </Link>
    </Button>
    <ModeToggle />
  </div>
      </div>

      {/* Mobile Header */}
      <div className="flex md:hidden bg-white dark:bg-neutral-900   my_code justify-between items-center p-2">
      <Link href="/">
        <div className="text-2xl font-pixelify text-black dark:text-zinc-100 font-bold">
          SM 
        </div>
      </Link>
        <div className="flex items-center justify-center space-x-4">
        <Button
          className="border-[1px] rounded-full  border-gray-300 dark:border-neutral-800"
          size="icon"
        >
          <Link href="https://github.com/Sameer1311/Sameer106.live" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </Link>
        </Button>
        <ModeToggle />
        <Button  onClick={handleMenuToggle} className=" ">
          <MenuSquareIcon className="w-5 h-5"/> 
        </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-300 dark:border-neutral-800">
          <NavLinks onLinkClick={handleCloseMenu} />
        </div>
      )}
    </header>
  );
};

export default Header;

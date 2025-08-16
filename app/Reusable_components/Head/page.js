"use client";

import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { ChevronDown, ChevronUp, Copy } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward, faForward } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  {
    title: "Logo & Branding",
    description:
      "The header starts with a simple logo area showing 'SM' in a pixel-style font. It helps maintain brand identity across the site.",
    code: `
<div className="text-4xl font-pixelify font-bold text-black dark:text-zinc-100 mx-5">
  SM
</div>
    `,
  },
  {
    title: "Navigation Links",
    description:
      "Main navigation links for easy access to key pages. Styled with Tailwind's hover and transition effects.",
    code: `
<Link href="/" className="font-mono text-m font-medium transition-all duration-300 text-foreground">
  Daifolio
</Link>
<Link href="/" className="font-mono text-m text-gray-500 hover:text-foreground transition-all duration-300">
  Home
</Link>
<Link href="/Comp_page" className="my_code text-m font-medium text-gray-500 hover:text-foreground transition-all duration-300">
  Components
</Link>
    `,
  },
  {
    title: "Action Buttons",
    description:
      "GitHub link button styled as a round icon, and a theme toggle button for light/dark mode.",
    code: `
<Button size="icon" className="border-[1px] rounded-full border-gray-300 dark:border-neutral-800">
  <Link href="https://github.com/Sameer1311" target="_blank">
    <FontAwesomeIcon icon={faGithub} />
  </Link>
</Button>
<ModeToggle />
    `,
  },
  {
    title: "Mobile Menu",
    description:
      "Responsive mobile menu triggered by a hamburger icon. Displays navigation links in a stacked layout.",
    code: `
<Button onClick={handleMenuToggle}>
  <MenuSquareIcon className="w-5 h-5" />
</Button>
{menuOpen && (
  <div className="md:hidden border-t border-gray-300 dark:border-neutral-800">
    <NavLinks onLinkClick={handleCloseMenu} />
  </div>
)}
    `,
  },
  {
    title: "Desktop Navbar Wrapper",
    description:
      "Main wrapper for the desktop version of the navbar, including left branding and right controls.",
    code: `
<div className="hidden md:flex items-center justify-between max-w-3xl w-full mx-auto border-l border-r border-gray-300 dark:border-neutral-800 p-2">
  {/* Left Branding */}
  <div className="text-4xl font-pixelify font-bold text-black dark:text-zinc-100 mx-5">SM</div>
  
  {/* Navigation + Actions */}
  <div className="flex items-center space-x-6">
    {/* Navigation Links */}
    {/* GitHub Button */}
    {/* Theme Toggle */}
  </div>
</div>
    `,
  },
];

export default function HeaderPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (code, index) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  return (
    <section className="flex flex-col items-center w-screen">
      <div className="flex flex-col items-center w-full md:w-[768px] border-l border-r border-gray-300 dark:border-neutral-800 px-4 py-6 mt-10">
        <div className="design_2 flex border-b border-gray-300 dark:border-neutral-800 items-center justify-center w-screen">
          <div className="md:w-[768px] w-full border-x border-gray-300 dark:border-neutral-800 py-5"></div>
        </div>

        {/* Navigation Top Controls */}
        <motion.div
          className="w-full py-3 md:w-[768px] flex items-center justify-between"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center space-x-4 mx-2">
            <Link href="/Comp_page">
              <Button size="icon" variant="ghost">
                <FontAwesomeIcon icon={faBackward} />
              </Button>
            </Link>
            <span>Components</span>
          </div>
          <div className="flex items-center justify-center space-x-4 mx-5">
            <Link href="/Reusable_components/Footer">
              <Button
                size="icon"
                variant="outline"
                className="border border-gray-300 dark:border-neutral-700 rounded-full"
              >
                <FontAwesomeIcon icon={faBackward} />
              </Button>
            </Link>
            <Link href="/Reusable_components/Social">
              <Button
                size="icon"
                variant="outline"
                className="border border-gray-300 dark:border-neutral-700 rounded-full"
              >
                <FontAwesomeIcon icon={faForward} />
              </Button>
            </Link>
          </div>
        </motion.div>

        <div className="design_2 flex items-center justify-center w-screen border-b border-gray-300 dark:border-neutral-800 border-t">
          <div className="w-[768px] border-x border-gray-300 dark:border-neutral-800 py-5"></div>
        </div>

        <motion.h1
          className="text-4xl mt-2 font-bold mb-4"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Header Component
        </motion.h1>

        <motion.p
          className="text-gray-600 dark:text-gray-300 font-mono text-center max-w-2xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          The Header component serves as the main navigation bar for the site.
          It features a responsive design that adapts to both desktop and mobile
          screens, includes theme toggling, and links to key pages and social profiles.
        </motion.p>

        {/* Sections with stagger delay */}
        {sections.map((sec, i) => (
          <motion.div
            key={i}
            className="md:w-full w-screen bg-white dark:bg-neutral-900 border border-gray-300 dark:border-neutral-800 rounded-lg shadow-sm overflow-hidden mb-4"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + i * 0.1 }}
          >
            {/* Accordion Header */}
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex justify-between items-center p-4 hover:bg-gray-50 dark:hover:bg-neutral-800 transition"
            >
              <div>
                <h2 className="text-xl font-semibold text-start my-2">{sec.title}</h2>
                <p className="text-gray-500 dark:text-gray-400 font-mono text-sm text-start">
                  {sec.description}
                </p>
              </div>
              {openIndex === i ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>

            {/* Code Section with animation */}
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  className="relative border-t border-gray-300 dark:border-neutral-800"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Copy Button */}
                  <button
                    onClick={() => handleCopy(sec.code.trim(), i)}
                    className="absolute top-2 right-2 px-2 py-1 text-xs font-medium bg-gray-200 dark:bg-neutral-700 rounded hover:bg-gray-300 dark:hover:bg-neutral-600 transition"
                  >
                    {copiedIndex === i ? "Copied!" : <Copy className="w-4 h-4" />}
                  </button>

                  <SyntaxHighlighter
                    language="jsx"
                    style={dracula}
                    showLineNumbers
                    customStyle={{
                      margin: 0,
                      padding: "1rem",
                      fontSize: "0.9rem",
                    }}
                  >
                    {sec.code.trim()}
                  </SyntaxHighlighter>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

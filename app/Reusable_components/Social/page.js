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
    title: "Top Info Links",
    description:
      "Displays developer info like role, name, location, phone, email, portfolio link, and pronouns using icon buttons.",
    code: `
const Links = [
  { icon: <Code2 />, desc: "Full stack Developer", href: null },
  { icon: <User />, desc: "Sameer Negi", href: null },
  { icon: <MapPin />, desc: "Dehradun City, India", href: null },
  { icon: <Phone />, desc: "+91 9058420228", href: "tel:+919058420228" },
  { icon: <Mail />, desc: "negisameer72@gmail.com", href: "mailto:negisameer72@gmail.com" },
  { icon: <Globe />, desc: "Sameer106.dev", href: "https://sameer106.dev", isExternal: true },
  { icon: <Mars />, desc: "he/him", href: null },
];

<div className="w-full flex flex-col space-y-1 py-4">
  {Links.map((link, index) => (
    <div key={index} className="flex items-center gap-3 font-mono p-[2px] mx-5">
      <Button size="icon" className="border rounded-[8px]">{link.icon}</Button>
      {link.href ? (
        <Link href={link.href}>{link.desc}</Link>
      ) : (
        <span>{link.desc}</span>
      )}
    </div>
  ))}
</div>
    `,
  },
  {
    title: "Main Social Links",
    description:
      "LinkedIn, GitHub, LeetCode, WhatsApp, Resume, and YouTube links displayed in a responsive grid with hover effects.",
    code: `
<Link
  href="https://www.linkedin.com/in/sameer1311"
  target="_blank"
  className="p-5 flex items-center justify-between hover:bg-neutral-100 dark:hover:bg-neutral-800"
>
  <div className="flex items-center space-x-5">
    <FontAwesomeIcon icon={faLinkedin} className="text-blue-500 text-[40px]" />
    <span>
      <b>LinkedIn</b>
      <p className="text-gray-500 font-mono">Sameer1311</p>
    </span>
  </div>
  <Button variant="ghost" size="icon">
    <LucideArrowUpRight className="text-[18px]" />
  </Button>
</Link>

// Repeat similar structure for GitHub, LeetCode, WhatsApp, Resume, and YouTube
    `,
  },
];

export default function Social_Snippits() {
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
          <div className="w-[768px] border-x border-gray-300 dark:border-neutral-800 py-5"></div>
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
            <Link href="/Reusable_components/Head">
              <Button
                size="icon"
                variant="outline"
                className="border border-gray-300 dark:border-neutral-700 rounded-full"
              >
                <FontAwesomeIcon icon={faBackward} />
              </Button>
            </Link>
            <Link href="/Reusable_components/Theme_">
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
          className="mt-2 text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Social Component
        </motion.h1>

        <motion.p
          className="text-gray-600 dark:text-gray-300 font-mono text-center max-w-2xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          The Social component serves as the social  bar for the site.
          It features as face for developer ... it contains all social liks and other things 
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
                <p className="text-gray-500 dark:text-gray-400 font-mono text-start text-sm">
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

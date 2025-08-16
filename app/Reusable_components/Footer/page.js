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
      title: "1. Top Info Section",
      description:
        "Contains the 'Inspired by' and 'Built by' text with links to TailwindCSS, shadcn/ui, portfolio, and GitHub.",
      code: `
<div className="md:md:w-[768px] w-full border-x font-mono text-gray-500 ...">
  <span>
    Inspired by <Link href="https://tailwindcss.com/">tailwindcss.com</Link> &{" "}
    <Link href="https://ui.shadcn.com/">ui.shadcn.com</Link>
  </span>
  <p>
    Built by <Link href="https://sameer106.live/">Sameer</Link>. The source code
    is on <Link href="https://github.com/Sameer1311">GitHub</Link>.
  </p>
</div>
      `,
    },
    {
      title: "2. Project Links Wrapper",
      description:
        "Flex container holding project icons, each wrapped with a tooltip and a link.",
      code: `
<div className="md:w-[768px] w-full border-x flex items-center justify-evenly">
  {projects.map((project) => (
    <Link key={project.name} href={project.link} target="_blank">
      <Tooltip> ... </Tooltip>
    </Link>
  ))}
</div>
      `,
    },
    {
      title: "3. Tooltip Project Icon",
      description:
        "Displays a project icon inside a tooltip. On hover, tooltip shows the project name.",
      code: `
<Tooltip>
  <TooltipTrigger>
    <Image
      alt={\`Icon of \${project.name}\`}
      src={project.icon}
      width={50}
      height={50}
      className="rounded-md"
    />
  </TooltipTrigger>
  <TooltipContent>
    <p className="bg-black text-white p-2 rounded-md">{project.name}</p>
  </TooltipContent>
</Tooltip>
      `,
    },
];

export default function Footer_comp() {
  const [openIndex, setOpenIndex] = useState(null);
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (code, index) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  return (
    <section className="flex flex-col items-center w-screen">
      <div className="flex flex-col items-center  md:md:w-[768px] w-screen border-l border-r border-gray-300 dark:border-neutral-800 px-4 py-6 mt-10">
        <div className="design_2 flex border-b border-gray-300 dark:border-neutral-800 items-center justify-center w-screen">
          <div className="md:w-[768px] w-full border-x border-gray-300 dark:border-neutral-800 py-5"></div>
        </div>

        {/* Navigation Top Controls */}
        <motion.div
          className="w-full py-3 md:md:w-[768px]  flex items-center justify-between"
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
            <Link href="/Reusable_components/Theme_">
              <Button
                size="icon"
                variant="outline"
                className="border border-gray-300 dark:border-neutral-700 rounded-full"
              >
                <FontAwesomeIcon icon={faBackward} />
              </Button>
            </Link>
            <Link href="/Reusable_components/Head">
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
          <div className="md:w-[768px] w-full border-x border-gray-300 dark:border-neutral-800 py-5"></div>
        </div>

        <motion.h1
          className="text-4xl font-bold mb-4 mt-2"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Footer Component
        </motion.h1>

        <motion.p
          className="text-gray-600 dark:text-gray-300 font-mono text-center max-w-2xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          The Footer component serves as the back navigation bar for the site.
          It features a responsive design that adapts to both desktop and mobile
          screens, includes quick navigation, and links to key pages and social profiles.
        </motion.p>

        {/* Sections with stagger delay */}
        {sections.map((sec, i) => (
          <motion.div
            key={i}
            className="w-screen md:w-full bg-white dark:bg-neutral-900 border border-gray-300 dark:border-neutral-800 rounded-lg shadow-sm overflow-hidden mb-4"
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

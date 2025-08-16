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
    title: "Install shadcn/ui",
    description: "Command to install shadcn/ui components into your Next.js project.",
    code: `
npx shadcn@latest init
    `,
  },
  {
    title: "Theme Provider Setup",
    description: "Wraps your application with NextThemes and ClientOnly for system-based theming.",
    code: `
"use client";

import { ClientOnly } from "@/app/component/client";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import * as React from "react";

export function ThemeProvider({ children, props }) {
  return (
    <ClientOnly>
      <NextThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        {...props}
      >
        {children}
      </NextThemeProvider>
    </ClientOnly>
  );
}
    `,
  },
  {
    title: "Wrap ThemeProvider in RootLayout",
    description: "Adds ThemeProvider around your app layout to enable theming globally.",
    code: `
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={\`overflow-x-hidden \${geistSans.variable} \${geistMono.variable} \${pixelifySans.variable} antialiased\`}
      >
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
    `,
  },
  {
    title: "Mode Toggle Button",
    description: "A button to toggle between light and dark themes using next-themes.",
    code: `
"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button
      className="border-[1px] rounded-full border-gray-300 dark:border-neutral-700"
      size="icon"
      variant="ghost"
      onClick={toggleTheme}
    >
      {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
    </Button>
  );
}
    `,
  },
];



export default function Theme_comp() {
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
            <Link href="/Reusable_components/Social">
              <Button
                size="icon"
                variant="outline"
                className="border border-gray-300 dark:border-neutral-700 rounded-full"
              >
                <FontAwesomeIcon icon={faBackward} />
              </Button>
            </Link>
            <Link href="/Reusable_components/Footer">
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
          className="text-4xl font-bold mb-4 mt-2 text-start "
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Theme Components
        </motion.h1>

        <motion.p
          className="text-gray-600 dark:text-gray-300 font-mono text-center  mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          The theme comp/feature is main theming component for theming the site
          it switches the site in light/dark  mode . 
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
                <p className="text-gray-500 dark:text-gray-400 font-mono text-sm">
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

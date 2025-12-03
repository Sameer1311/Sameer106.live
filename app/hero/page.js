"use client";
import { useState, useEffect } from "react";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const skills = [
    "full stack developer",
    "3d web developer",
    "Freelancer",
    "knowledge in web sockets",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % skills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-screen h-full border-b border-gray-300 dark:border-neutral-800 flex flex-col items-center justify-center">
      <div className="flex items-center justify-center flex-col">
        {/* outer */}
        <div className="w-screen border-b border-gray-300 dark:border-neutral-800 flex items-center justify-center">
          <div className="relative">
            {/* SM text */}
            <div className="md:w-[768px] w-screen font-pixelify text-8xl design flex items-center justify-center border-x border-gray-300 dark:border-neutral-800 p-2 py-20">
              SM
            </div>

            {/* Active Now badge */}
            <div className="absolute top-[40%] left-[67%] md:top-1/3 md:left-[27%] w-fit flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/100 border border-green-500  text-xs font-semibold shadow-lg animate-pulse">
              <span className="w-2 h-2 bg-slate-900 rounded-full animate-ping"></span>
              Active Now
            </div>
          </div>
        </div>

        {/* second */}
        <div className="w-screen border-b border-gray-300 dark:border-neutral-800 flex items-center justify-center">
          <div className="flex items-center w-[768px] border-x border-gray-300 dark:border-neutral-800">
            {/* Avatar */}
            <div className="relative p-1 border-r border-gray-300 dark:border-neutral-800 flex-shrink-0 w-[140px]">
  <Image
    alt="Sameer (creator image)"
    width={140}
    height={120}
    src="/Sameer_ai.png"
    priority   
    className="rounded-[20px] size-1 border-[1px] p-1 border-gray-300 dark:border-neutral-700"
  />

  {/* Flag overlay */}
  <div className="absolute top-[-8px] left-[-8px] w-10 h-10 text-xs flex items-center justify-center">
    <Image
      alt="India flag"
      src="/India.svg"
      width={40}   // Load only what you need
      height={40}
      priority
      className="rounded-full"
    />
  </div>
</div>

            {/* Text Block */}
            <div className="flex flex-col h-full flex-1 min-w-0">
              <div className="relative px-10 pt-[3.5rem] pb-[2.5rem] design_2">
                <p className="absolute bottom-0 left-4  text-gray-500   dark:text-neutral-700  font-mono   text-sm">
                  text-3xl font-mono font-medium
                </p>
              </div>

              <div className="bg-diagonal-stripes px-4 py-2 border-y border-gray-300 dark:border-neutral-800">
                <span className="text-2xl font-pixelify font-bold text-black dark:text-white flex items-center gap-2">
                  Sameer Negi
                  <CheckCircle className="text-blue-500 w-5 h-5" />
                </span>
              </div>

              {/* Animated Skills */}
              <div className="px-4 py-2 text-sm dark:text-zinc-400 font-mono h-[24px] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={skills[index]}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                    className="block"
                  >
                    {skills[index]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="design_2 flex items-center justify-center w-screen">
        <div className="w-[768px] border-x border-gray-300 dark:border-neutral-800 py-5"></div>
      </div>
    </section>
  );
};

export default Hero;

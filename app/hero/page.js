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
    <section className="flex flex-col items-center justify-center w-screen h-full border-b border-gray-300 dark:border-neutral-800">
      <div className="flex flex-col items-center justify-center">
        {/* outer */}
        <div className="flex items-center justify-center w-screen border-b border-gray-300 dark:border-neutral-800">
          <div className="relative">
            {/* SM text */}
            <div className="md:w-[768px] w-screen font-pixelify text-8xl design flex items-center justify-center border-x border-gray-300 dark:border-neutral-800 p-2 py-20">
              SM
            </div>

            {/* Active Now badge */}
            <div className="absolute top-[40%] left-[67%] md:top-1/3 md:left-[27%] w-fit flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/100 border border-green-500  text-xs font-semibold shadow-lg animate-pulse">
              <span className="w-2 h-2 rounded-full bg-slate-900 animate-ping"></span>
              Active Now
            </div>
          </div>
        </div>

        {/* second */}
        <div className="flex items-center justify-center w-screen border-b border-gray-300 dark:border-neutral-800">
          <div className="flex items-center w-[768px] border-x border-gray-300 dark:border-neutral-800">
            {/* Avatar */}
            <div className="relative flex-shrink-0 p-1 border-r border-gray-300 dark:border-neutral-800">
              <Image
  alt="Sameer (creator image)"
  width={140}
  height={120}
  src="/Sameer_ai.png"
  className="rounded-[20px] border-[1px]  hover:cursor-pointer p-1 border-gray-300 dark:border-neutral-700"
/>
              {/* Flag overlay */}
              <div className="absolute  top-[-10px] left-[-5px] w-16 h-16 text-xs flex items-center justify-center">
                <Image
                  alt="India flag"
                  width={150}
                  height={150}
                  src="/India.svg"
                  className="p-1 rounded-full"
                />
              </div>
            </div>

            {/* Text Block */}
            <div className="flex flex-col flex-1 h-full min-w-0">
              <div className="relative px-10 pt-[3.5rem] pb-[2.5rem] design_2">
                <p className="absolute bottom-0 font-mono text-sm text-gray-500 left-4 dark:text-neutral-700">
                  text-3xl font-mono font-medium
                </p>
              </div>

              <div className="px-4 py-2 border-gray-300 bg-diagonal-stripes border-y dark:border-neutral-800">
                <span className="flex items-center gap-2 text-2xl font-bold text-black font-pixelify dark:text-white">
                  Sameer Negi
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                </span>
              </div>

              {/* Animated Skills */}
              <div className="px-4 py-2 text-sm dark:text-zinc-400 font-mono h-[24px] flex items-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={skills[index]}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                    className="block "
                  >
                    {skills[index]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-screen design_2">
        <div className="w-[768px] border-x border-gray-300 dark:border-neutral-800 py-5"></div>
      </div>
    </section>
  );
};

export default Hero;

"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

const About = () => {
  const [showMore, setShowMore] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // sm breakpoint
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const extendedContent = (
    <>
      <br /><br />
      I specialize in technologies like{" "}
      <strong className="md:text-lg hover:underline font-mono">Next.js, React, Tailwind CSS, and Node.js</strong>. My work
      often involves integrating advanced features such as{" "}
      <strong className="md:text-lg hover:underline font-mono">WebRTC video calls, AI-powered tools</strong>, and{" "}
      <strong className="md:text-lg hover:underline font-mono">3D/interactive UIs</strong> using React Three Fiber.
      <br /><br />
      I’ve built and launched several platforms including{" "}
      <strong className="md:text-lg hover:underline font-mono">
        <Link href="https://skillsync106.netlify.app">SkillSync</Link>
      </strong>,{" "}
      <strong className="md:text-lg hover:underline font-mono">
        <Link href="https://devstoolhub.netlify.app/">DevsToolHub</Link>
      </strong>, and{" "}
      <strong className="md:text-lg hover:underline font-mono">
        <Link href="https://liblab.netlify.app/">LibLab</Link>
      </strong>.  
      <br /><br />
      I enjoy solving problems on{" "}
      <strong className="md:text-lg hover:underline font-mono">
        <Link href="https://leetcode.com/u/CodeSameer">LeetCode</Link>
      </strong> and continuously expanding my skills.
      <br /><br />
      Whether it’s building multi-step form flows, integrating Razorpay, or implementing dark/light mode — I focus on creating pixel-perfect, user-friendly experiences.
      <br /><br />
      Let’s build something amazing together.
    </>
  );

  return (
    <section id="About" className="w-screen border-b border-gray-300 dark:border-neutral-800">
      {/* Heading */}
      <div className="w-screen border-b border-gray-300 dark:border-neutral-800 flex items-center justify-center">
        <div className="w-[768px] border-l border-r border-gray-300 dark:border-neutral-800">
          <span className="mx-4 font-bold text-3xl">About</span>
        </div>
      </div>

      {/* Body */}
      <div className="w-screen border-b border-gray-300 dark:border-neutral-800 flex items-center justify-center">
        <div className="w-[768px] border-l border-r border-gray-300 dark:border-neutral-800 p-4">
          <p className="mx-4 font-mono text-black dark:text-white leading-relaxed text-[15px]">
            {"I'm"} <strong className="md:text-lg hover:underline font-mono">Sameer Negi</strong>, a passionate{" "}
            <strong className="md:text-lg hover:underline font-mono">Full Stack Developer</strong> from{" "}
            <strong className="md:text-lg hover:underline font-mono">Dehradun, India</strong>.
          </p>

          {/* Animated Expand on Mobile */}
          <AnimatePresence initial={false}>
            {(!isMobile || showMore) && (
              <motion.div
                key="extended"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="mx-4 font-mono text-black dark:text-white leading-relaxed text-[15px]">
                  {extendedContent}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Toggle Button */}
          {isMobile && (
            <button
              onClick={() => setShowMore(!showMore)}
              className="mt-4 flex items-center text-gray-700 dark:text-gray-300"
            >
              <FontAwesomeIcon icon={showMore ? faChevronUp : faChevronDown} className="mr-2" />
              {showMore ? "Show Less" : "Read More"}
            </button>
          )}
        </div>
      </div>

      {/* Bottom Border */}
      <div className="design_2 flex items-center justify-center w-screen">
        <div className="w-[768px] border-l border-r border-gray-300 dark:border-neutral-800 py-5" />
      </div>
    </section>
  );
};

export default About;

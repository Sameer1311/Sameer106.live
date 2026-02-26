"use client";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon, ChevronUpIcon, LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Project = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleOpen = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  const Project_ = [
    {
      name: "DevsToolHub",
      link: "https://devstoolhub.netlify.app/",
      date: "05.2025 – ∞",
      icon: "/title.png",
      tech_stack: [
        "Next.js",
        "JavaScript",
        "Tailwind CSS",
        "Shadcn UI",
      ],
      short_desc:
        "A one-stop developer utility hub, eliminating the need to juggle multiple tools.",
      long_desc: [
        "🎯 Centralized suite of developer tools — Color Picker, Markdown Editor, JSON Formatter, Regex Tester, and Code Beautifier.",
        "💨 Modern responsive UI using Tailwind CSS & Shadcn UI for seamless experience.",
        "🌓 Persistent dark/light mode with polished dashboard layout.",
        "⚡ Instant tool response without reloads.",
      ],
    },
    {
      name: "SkillSync",
      link: "https://skillsync106.netlify.app/",
      date: "01.2025 – ∞",
      icon: "/logo.svg",
      tech_stack: [
        "Next.js",
        "JavaScript",
        "Tailwind CSS",
        "Shadcn UI",
        "OpenAI API",
        "Socket.IO",
        "WebRTC",
      ],
      short_desc:
        "A career growth platform for developers and job seekers with real-time learning tools.",
      long_desc: [
        "📝 Multi-step resume builder with live preview and professional templates.",
        "🤖 AI-powered mock interview simulator using OpenAI.",
        "🧠 Real-time tech quizzes with topic & difficulty selection.",
        "📹 Video call interviews via WebRTC and live interaction using Socket.IO.",
      ],
    },
    {
      name: "LibLab",
      link: "https://liblab.netlify.app/",
      date: "03.2024 – ∞",
      icon: "/logo.jpeg",
      tech_stack: [
        "Next.js",
        "JavaScript",
        "Tailwind CSS",
        "Razorpay API",
        "MongoDB",
      ],
      short_desc:
        "A modern library management system for both physical and digital collections.",
      long_desc: [
        "🔍 Book search, borrowing, and return tracking.",
        "💳 Membership system with integrated Razorpay payments.",
        "🗄 Powered by MongoDB for scalable data storage.",
        "📱 Mobile-friendly responsive design.",
      ],
    },
    {
      name: "negisameer.live",
      link: "https://negisameer.live/",
      date: "02.2025 – ∞",
      icon: "/Sameer_ai.png",
      tech_stack: [
        "Next.js",
        "JavaScript",
        "Tailwind CSS",
        "Framer Motion",
        "Shadcn UI",
      ],
      short_desc:
        "A personal portfolio built for storytelling, animations, and showcasing skills.",
      long_desc: [
        "⚡ Lightning-fast performance with optimized SEO.",
        "🎭 Smooth animations powered by Framer Motion.",
        "🌓 Dark/light mode toggle with persistent settings.",
        "📂 Expandable 'Projects' section with tech stack tags.",
      ],
    },
  ];

  return (
    <div className="w-screen flex items-center justify-center flex-col">
      {/* Header */}
      <span className="w-full md:w-[768px] mx-4 font-bold text-3xl border-l border-r border-gray-300 dark:border-neutral-800">
        <p className="mx-4 py-2">Projects</p>
      </span>

      {/* Projects */}
      <div className="border-t border-b border-gray-300 dark:border-neutral-800 flex justify-center w-screen">
        <div className="w-[768px] border-l border-r border-gray-300 dark:border-neutral-800 flex flex-col">
          {Project_.map((m, k) => (
            <div
              key={k}
              className="py-2 flex flex-col border-b border-gray-300 dark:border-neutral-800"
            >
              {/* Row */}
              <div className="flex items-center justify-between ">
                {/* Left Section */}
                <div className="flex items-center w-full">
                  {/* Icon */}
                  <div className="w-[60px] h-full flex items-center justify-center border-r-[1px] border-dotted border-gray-300 dark:border-neutral-800">
  <div className="relative w-10 h-10">
    <Image
      alt={`${m.name} icon`}
      src={m.icon}
      fill
      className="rounded-md object-contain"
    />
  </div>
</div>

                  {/* Text */}
                  <div className="flex flex-col px-4 py-3 leading-snug">
                    <span className="font-bold font-mono text-l ">
                      {m.name}
                    </span>
                    <span className="text-m font-mono text-gray-500 dark:text-gray-400">
                      {m.date}
                    </span>
                  </div>
                </div>

                {/* Right Section */}
                <div
                  className="flex items-center gap-2 pr-4 "
                  onClick={() => toggleOpen(k)}
                >
                  <Link href={m.link} target="_blank">
                    <Button variant="ghost" size="icon"
                     onClick={(e) => e.stopPropagation()}>
                      <LinkIcon className="w-4 h-4 text-gray-300" />
                    </Button>
                  </Link>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => toggleOpen(k)}
                  >
                    {openIndex === k ? (
                      <ChevronUpIcon className="w-4 h-4" />
                    ) : (
                      <ChevronDownIcon className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              </div>

              {/* Expanded Content */}
              <AnimatePresence initial={false}>
                {openIndex === k && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 pt-3 font-mono border-t border-dotted border-gray-300 dark:border-neutral-800  text-sm leading-relaxed ">
                      <p className="mb-3">{m.short_desc}</p>
                      <ul className="list-disc mx-4 space-y-1">
                        {m.long_desc.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2 mt-4 ">
                        {m.tech_stack.map((tech, i) => (
                          <span
                            key={i}
                            style={{ backgroundColor: "#323131" }}
                            className="px-2 py-1 text-xs rounded-md bg-zinc-50 dark-bg-zinc-900  text-gray-200 border border-gray-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;

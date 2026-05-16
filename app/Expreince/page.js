"use client";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";

const Experience = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const Experience_ = [
        {
            title: "Full Stack Web Developer Intern",
            company: "TechEve",
            duration: "Feb 2026 – Apr 2026",
            link: "https://www.techeve.in/",
            description: [
                "Developing full-stack web applications using React, Next.js, and Node.js.",
                "Implemented real-time features using WebSockets and Socket.IO.",
                "Designed responsive UI with Tailwind CSS and component-based architecture.",
                "Worked with REST APIs, authentication systems, and database integration.",
                "Collaborated with team members on feature development and optimization."
            ],
        },
        {
            title: "React js Intern",
            company: "TalentRise",
            duration: "Apr 2026",
            link: "#",
            description: [
                "Developed React web applications using React.",
                "Implemented responsive UI with Tailwind CSS and component-based architecture.",
            ],
        },
        {
            title: "Full Stack Developer",
            company: "Quantum University",
            duration: "Apr 2026 - Present",
            link: "#",
            description: [
                "Developing full-stack web applications using React, Next.js, and Node.js.",
                "Implementing real-time features using WebSockets and Socket.IO.",
                "Worked with REST APIs, authentication systems, and database integration.",
                "Collaborated with team members on feature development and optimization."
            ],
        },
    ];

    return (
        <section id="experience">
            <div className="flex w-screen justify-center items-center flex-col">
                <div className="border-b border-gray-300 dark:border-neutral-800 w-screen flex justify-center">
                    <h2 className="text-2xl font-bold w-[768px] border-gray-300 px-3 dark:border-neutral-800 border-l border-r py-2">
                        Experience
                    </h2>
                </div>
                <div className="border-r border-l border-gray-300 md:w-[768px] dark:border-neutral-800">
                    <div className="px-6 py-8 space-y-4">
                        {Experience_.map((exp, index) => (
                            <div key={index}>
                                <h3 className="text-xl font-semibold">{exp.title}</h3>
                                <div className="flex items-center justify-between text-sm opacity-80 cursor-pointer transition">
                                    <span className="hover:underline transition delay-80">
                                        <Link href={exp.link}>
                                            {exp.company} | {exp.duration}
                                        </Link>
                                    </span>
                                    <FaChevronDown
                                        onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                        className={`transition-transform duration-500 ${openIndex === index ? "rotate-180" : ""}`}
                                    />
                                </div>
                                <div
                                    className={`transition-all duration-500 ease-in-out overflow-hidden ${openIndex === index ? "max-h-[500px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}
                                >
                                    <div className="text-sm leading-relaxed border-l-2 border-gray-300 dark:border-neutral-700 pl-4">
                                        <ul className="list-disc pl-5 space-y-2">
                                            {exp.description.map((desc, idx) => (
                                                <li key={idx}>{desc}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="design_2 flex items-center justify-center w-screen border-t border-gray-300 dark:border-neutral-800 border">
                    <div className="w-[768px] border-l border-r border-gray-300 dark:border-neutral-800 py-5" />
                </div>
            </div>
        </section>
    );
};

export default Experience;

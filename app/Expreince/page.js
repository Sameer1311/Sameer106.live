"use client"
import React, { useState } from "react"
import { FaChevronDown } from "react-icons/fa"
import Link from "next/link"

const Experience = () => {
    const [open, setOpen] = useState(true)

    return (
        <section id="experience">
            <div className="flex w-screen justify-center items-center flex-col   ">

                    {/* Header */}
                    <div className="border-b border-gray-300 dark:border-neutral-800 w-screen flex  justify-center ">
                        <h2 className="text-2xl  font-bold w-[768px] border-gray-300 px-3 dark:border-neutral-800 border-l border-r py-2">Experience</h2>
                    </div>
                    <div className="border-r border-l  border-gray-300 md:w-[768px] dark:border-neutral-800">

                    {/* Experience Content */}
                    <div className="px-6 py-8 space-y-4">
                        <div>
                            <h3 className="text-xl font-semibold">
                                Full Stack Web Developer Intern
                            </h3>

                            {/* Clickable Company Name */}
                            <div
                                //
                                className="flex items-center justify-between text-sm opacity-80 cursor-pointer  transition"
                            >
                                <span className="hover:underline transition delay-80">
                                    <Link href="https://www.techeve.in/">TechEve | Feb 2026 – Present</Link></span>

                                <FaChevronDown
                                    onClick={() => setOpen(!open)}
                                    className={`transition-transform duration-500    ${
                                        open ? "rotate-180" : ""
                                    }`}
                                />
                            </div>
                        </div>

                        {/* Smooth Expandable Section */}
                        <div
                            className={` transition-all duration-500 ease-in-out ${
                                open
                                    ? "max-h-[500px] opacity-100 mt-3"
                                    : "max-h-0 opacity-0"
                            }`}
                        >
                            <div className="text-sm leading-relaxed border-l-2 border-gray-300 dark:border-neutral-700 pl-4">
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Developing full-stack web applications using React, Next.js, and Node.js.</li>
                                    <li>Implementing real-time features using WebSockets and Socket.IO.</li>
                                    <li>Designing responsive UI with Tailwind CSS and component-based architecture.</li>
                                    <li>Working with REST APIs, authentication systems, and database integration.</li>
                                    <li>Collaborating with team members on feature development and optimization.</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="design_2 flex items-center justify-center w-screen border-t border-gray-300 dark:border-neutral-800 border">
                <div className="w-[768px] border-l border-r border-gray-300 dark:border-neutral-800 py-5" />
            </div>
        </section>
    )
}

export default Experience
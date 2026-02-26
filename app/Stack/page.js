"use client";

import {
  FaJs,
  FaNodeJs,
  FaReact,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiRedux,
  SiMongodb,
  SiNextdotjs,
  SiVercel,
  SiExpress,
  SiPostman,
  SiOpenai,
  SiJsonwebtokens,
  SiSocketdotio,
  SiWebrtc,
  SiNetlify,
  SiCplusplus,
  SiAdobephotoshop,
} from "react-icons/si";



const stack = [
  { icon: FaHtml5, label: "HTML5", color: "#e34f26", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { icon: FaCss3Alt, label: "CSS3", color: "#1572B6", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { icon: FaJs, label: "JavaScript", color: "#f7df1e", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { icon: FaReact, label: "React.js", color: "#61DAFB", href: "https://react.dev/" },
  { icon: SiNextdotjs, label: "Next.js", color: "#000000", href: "https://nextjs.org/" },
  { icon: SiTailwindcss, label: "Tailwind CSS", color: "#38BDF8", href: "https://tailwindcss.com/" },
  { icon: SiRedux, label: "Redux Toolkit", color: "#764ABC", href: "https://redux-toolkit.js.org/" },
  { icon: FaNodeJs, label: "Node.js", color: "#339933", href: "https://nodejs.org/" },
  { icon: SiExpress, label: "Express.js", color: "#404d59", href: "https://expressjs.com/" },
  { icon: SiMongodb, label: "MongoDB", color: "#47A248", href: "https://www.mongodb.com/" },
  { icon: SiJsonwebtokens, label: "JWT Auth", color: "#000000", href: "https://jwt.io/" },
  { icon: SiSocketdotio, label: "Socket.IO", color: "#010101", href: "https://socket.io/" },
  { icon: SiWebrtc, label: "WebRTC", color: "#E53935", href: "https://webrtc.org/" },
  { icon: SiOpenai, label: "OpenAI API", color: "#412991", href: "https://openai.com/" },
  { icon: FaGitAlt, label: "Git", color: "#F05032", href: "https://git-scm.com/" },
  { icon: SiVercel, label: "Vercel", color: "#000000", href: "https://vercel.com/" },
  { icon: SiNetlify, label: "Netlify", color: "#00C7B7", href: "https://www.netlify.com/" },
  { icon: SiPostman, label: "Postman", color: "#FF6C37", href: "https://www.postman.com/" },
];

export default function Stack() {
  return (
    <div className="w-screen flex flex-col items-center justify-center">
      <div className="w-screen flex items-center justify-center border-b-[1px] border-gray-300 dark:border-neutral-800">
        <div className="w-[768px] border-l-[1px] py-2 border-r-[1px] border-gray-300 dark:border-neutral-800">
          <span className="mx-4 font-bold text-3xl ">Tech Stack</span>
        </div>
      </div>

      <div className="design flex items-center justify-center md:w-[768px] w-screen border-l-[1px] border-r-[1px] border-gray-300 dark:border-neutral-800 flex-wrap gap-5 py-5">
        {stack.map(({ icon: Icon, label, color, href }, idx) => (
          <a
            key={idx}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center transition hover:scale-110"
            style={{ color }}
          >
            <Icon size={35} />
            <span className="absolute top-[-1.7rem] scale-0 rounded bg-black px-2 py-1 text-xs text-white transition-all group-hover:scale-100 whitespace-nowrap">
              {label}
            </span>
          </a>
        ))}
      </div>

      <div className="design_2 border-t-[1px] border-b-[1px] border-gray-300 dark:border-neutral-800 flex items-center justify-center w-screen">
        <div className="w-[768px] border-l-[1px] border-r-[1px] border-gray-300 dark:border-neutral-800 py-5"></div>
      </div>
    </div>
  );
}

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const projects = [
    {
      name: "DevsToolHub",
      link: "https://devstoolhub.netlify.app/",
      icon: "/title.png",
    },
    {
      name: "SkillSync",
      link: "https://skillsync106.netlify.app/",
      icon: "/logo.svg",
    },
    {
      name: "LibLab",
      link: "https://liblab.netlify.app/",
      icon: "/logo.jpeg",
    },
  ];

  return (
    <footer className="w-screen overflow-hidden flex flex-col items-center justify-center mb-2 border-t border-b border-gray-300 dark:border-neutral-800">
      {/* Top Section */}
      <div className="md:w-[768px] w-full border-x font-mono text-gray-500 border-gray-300 dark:border-neutral-800 flex flex-col items-center justify-center text-center space-y-2 py-4">
        <span>
          Inspired by{" "}
          <Link
            href="https://tailwindcss.com/"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>tailwindcss.com</strong>
          </Link>{" "}
          &{" "}
          <Link
            href="https://ui.shadcn.com/"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>ui.shadcn.com</strong>
          </Link>
        </span>
        <p>
          Built by{" "}
          <Link
            href="https://negisameer.live/"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Sameer</strong>
          </Link>
          . The source code is available on{" "}
          <Link
            href="https://github.com/Sameer1311"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>GitHub</strong>
          </Link>
          .
        </p>
      </div>

      {/* Bottom Project Icons */}
      <div className="border-t border-gray-300 dark:border-neutral-800 flex items-center justify-center w-screen">
        <div className="w-[768px] border-x border-gray-300 dark:border-neutral-800 flex items-center justify-evenly">
          <div className="w-full design_2 border-r border-gray-300 dark:border-neutral-800"></div>

          <div className="w-full border-x flex items-center justify-center space-x-5 border-gray-300 py-2 px-3 dark:border-neutral-800 overflow-x-auto">
            {projects.map((project, index) => (
              <Link
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform shrink-0"
              >
                <Tooltip>
                  <TooltipTrigger>
                    <div className="relative w-10 h-10">
                      <Image
                        alt={`Icon of ${project.name}`}
                        src={project.icon}
                        fill
                        className="rounded-md object-contain"
                      />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="bg-black text-white p-2 rounded-md">{project.name}</p>
                  </TooltipContent>
                </Tooltip>
              </Link>
            ))}
          </div>

          <div className="w-full design_2 border-l border-gray-300 dark:border-neutral-800"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

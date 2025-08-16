import { Button } from "@/components/ui/button";
import {
  faGithub,
  faLinkedin,
  faLinkedinIn,
  faWhatsapp,
  faYoutube,
  faCodepen,
  faCodiepie
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Code2,
  Code2Icon,
  FileTextIcon,
  Globe,
  Lightbulb,
  LucideArrowUpRight,
  Mail,
  MapPin,
  Mars,
  Phone,
  User,
} from "lucide-react";
import Link from "next/link";

const Socials = () => {
  const Links = [
    { icon: <Code2 />, desc: "Full stack Developer", href: null },
    { icon: <User />, desc: "Sameer Negi", href: null },
    { icon: <MapPin />, desc: "Dehradun City, India", href: null },
    { icon: <Phone />, desc: "+91 9058420228", href: "tel:+919058420228" },
    {
      icon: <Mail />,
      desc: "negisameer72@gmail.com",
      href: "mailto:negisameer72@gmail.com",
    },
    {
      icon: <Globe />,
      desc: "negisameer.live",
      href: "https://negisameer.live",
      isExternal: true,
    },
    { icon: <Mars />, desc: "he/him", href: null },
  ];

  return (
    <div className="w-screen h-full border-b border-gray-300 dark:border-neutral-800 flex flex-col items-center justify-center">
      <div className="md:w-[768px] w-screen flex border-l border-r border-gray-300 dark:border-neutral-800 flex-col space-y-1 py-4">
        {Links.map((link, index) => (
          <div
            key={index}
            className="flex items-center gap-3 text-neutral-400 font-mono p-[2px] mx-5"
          >
            <Button
              size="icon"
                //  style={{ backgroundColor: "#27272a" }}
              className="border-[1px] border-slate-300  rounded-[8px] text-black  dark:text-white"
            >
              {link.icon}
            </Button>

            {link.href ? (
              <Link
                href={link.href}
                target={link.isExternal ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="font-mono text-black dark:text-white hover:underline underline-offset-4 transition-all delay-300"
              >
                {link.desc}
              </Link>
            ) : (
              <span className="font-mono text-black dark:text-white">
                {link.desc}
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="design_2 border-t-[1px] border-gray-300 dark:border-neutral-800  flex items-center justify-center w-screen ">
        <div className="w-[768px] border-l-[1px] border-r-[1px] border-gray-300 dark:border-neutral-800   py-5"></div>
      </div>

        <div className="w-full flex flex-col border-t-[1px] border-gray-300 dark:border-neutral-800">
      {/* First Row */}
      <div className="flex w-screen items-center justify-center border-b-[1px] border-gray-300 dark:border-neutral-800 mb-3">
        <div className="md:w-[768px] w-screen flex flex-col md:flex-row items-center justify-center">
          {/* LinkedIn */}
          <Link
            href="https://www.linkedin.com/in/sameer1311"
            target="_blank"
            className="md:w-[384px] w-full p-5 border-l-[1px] border-r-[1px] dark:border-neutral-800 border-gray-300 flex items-center justify-between hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all"
          >
            <div className="flex items-center justify-center space-x-5">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-blue-500 text-[40px] rounded-md"
              />
              <span className="flex flex-col justify-center">
                <b>LinkedIn</b>
                <p className="text-black dark:text-gray-500 font-mono">
                  Sameer1311
                </p>
              </span>
            </div>
            <Button variant="ghost" size="icon">
              <LucideArrowUpRight className="text-[18px] dark:text-neutral-600" />
            </Button>
          </Link>

          {/* GitHub */}
          <Link
            href="https://github.com/Sameer1311"
            target="_blank"
            className="md:w-[384px]  border-t-[1px] md:border-t-[0px] border-gray-300 dark:border-neutral-800 w-full p-5 border-l-[1px] border-r-[1px] flex items-center justify-between hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all"
          >
            <div className="flex  items-center justify-center space-x-5">
              <FontAwesomeIcon
                icon={faGithub}
                className="text-black dark:text-white text-[40px] rounded-md"
              />
              <span className="flex flex-col justify-center">
                <b>GitHub</b>
                <p className="text-black dark:text-gray-500 font-mono">
                  Sameer1311
                </p>
              </span>
            </div>
            <Button variant="ghost" size="icon">
              <LucideArrowUpRight className="text-[18px] dark:text-neutral-600" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Second Row */}
      <div className="flex w-screen items-center justify-center border-b-[1px] border-t-[1px] border-gray-300 dark:border-neutral-800">
        <div className="flex md:w-[768px] w-screen flex-col md:flex-row items-center justify-center">
          {/* LeetCode */}
          <Link
            href="https://leetcode.com/CodeSameer"
            target="_blank"
            className="md:w-[384px] w-full p-5 border-l-[1px] border-r-[1px] dark:border-neutral-800 border-gray-300 flex items-center justify-between hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all"
          >
            <div className="flex items-center justify-center space-x-5">
              <FontAwesomeIcon
                icon={faCodepen}
                className="text-orange-500 text-[40px] rounded-md"
              />
              <span className="flex flex-col justify-center">
                <b>LeetCode</b>
                <p className="text-black dark:text-gray-500 font-mono">
                  CodeSameer
                </p>
              </span>
            </div>
            <Button variant="ghost" size="icon">
              <LucideArrowUpRight className="text-[18px] dark:text-neutral-600" />
            </Button>
          </Link>

          {/* WhatsApp */}
          <Link
            href="https://wa.me/9058420228"
            target="_blank"
            className="md:w-[384px] w-full p-5 border-l-[1px] border-r-[1px] md:border-t-[0px] border-t-[1px] border-gray-300 dark:border-neutral-800 flex items-center justify-between hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all"
          >
            <div className="flex items-center justify-center space-x-5">
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="text-green-500 text-[40px] rounded-md"
              />
              <span className="flex flex-col justify-center">
                <b>WhatsApp</b>
                <p className="text-black dark:text-gray-500 font-mono">
                  9058420228
                </p>
              </span>
            </div>
            <Button variant="ghost" size="icon">
              <LucideArrowUpRight className="text-[18px] dark:text-neutral-600" />
            </Button>
          </Link>
        </div>
      </div>
           <div className="mt-3 flex w-screen items-center justify-center border-b-[1px] border-t-[1px] border-gray-300 dark:border-neutral-800">
        <div className="flex md:w-[768px] w-screen flex-col md:flex-row items-center justify-center">
      
          <a
            href="/pdfs/Sameer_Negi_Resume.docx"
            download
            target="_blank"
            className="md:w-[384px] w-full p-5 border-l-[1px] border-r-[1px] dark:border-neutral-800 border-gray-300 flex items-center justify-between hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all"
          >
            <div className="flex items-center justify-center space-x-5">
              <FontAwesomeIcon
                icon={faCodiepie}
                className=" text-[40px] rounded-md"
              />
              <span className="flex flex-col justify-center">
                <b>Resume</b>
                <p className="text-black dark:text-gray-500 font-mono">
                  Resume...
                </p>
              </span>
            </div>
            <Button variant="ghost" size="icon">
              <LucideArrowUpRight className="text-[18px] dark:text-neutral-600" />
            </Button>
          </a>

          {/* WhatsApp */}
          <Link
            href="https://www.youtube.com/@sameernegi2177"
            target="_blank"
            className="md:w-[384px] w-full p-5 border-l-[1px] border-r-[1px] border-t-[1px] md:border-t-[0px] dark:border-neutral-800 border-gray-300 flex items-center justify-between hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all"
          >
            <div className="flex items-center justify-center space-x-5">
              <FontAwesomeIcon
                icon={faYoutube}
                className="text-red-500 text-[40px] rounded-md"
              />
              <span className="flex flex-col justify-center">
                <b>Youtube</b>
                <p className="text-black dark:text-gray-500 font-mono">
                 sameernegi2177 
                </p>
              </span>
            </div>
            <Button variant="ghost" size="icon">
              <LucideArrowUpRight className="text-[18px] dark:text-neutral-600" />
            </Button>
          </Link>
        </div>
      </div>
      
    </div>

      <div className="design_2  flex items-center justify-center w-screen ">
        <div className="md:w-[768px] w-screen border-l-[1px] border-r-[1px] border-gray-300 dark:border-neutral-800   py-5"></div>
      </div>
    </div>
  );
};

export default Socials;

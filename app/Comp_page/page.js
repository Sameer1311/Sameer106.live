import { Button } from "@/components/ui/button";
import { LinkIcon } from "lucide-react";
import Link from "next/link";
import { GrReactjs } from "react-icons/gr";

const Comp_page = () => {
  return (
    <section className="flex flex-col border-d-[1px] border-gray-300 dark:border-neutral-800 overflow-hidden items-center justify-between  w-screen h-screen">
      <div className="flex flex-col  items-center w-full md:md:w-[768px]  border-l-[1px] border-r-[1px] border-gray-300 dark:border-neutral-800 h-screen">
        <div className="design_2 mt-16 border-b-[1px] border-gray-300 dark:border-neutral-800   flex items-center justify-center w-screen">
          <div className="md:w-[768px] w-full  border-x  border-gray-300 dark:border-neutral-800 py-5"></div>
        </div>
        <div className=" border-b-[1px] border-gray-300 dark:border-neutral-800   flex items-center justify-center w-screen">
          <div className="md:w-[768px] w-full  py-2 font-bold  ml-8 text-2xl">
            Components
          </div>
        </div>
        <div className=" border-b-[1px] border-gray-300 dark:border-neutral-800   flex items-center justify-center w-screen">
          <div className="md:w-[768px] w-full  font-mono ml-8 text-sm dark:text-gray-500 py-3">
            A collection of code snippets of{" "}
            <Link href="/">
              {" "}
              <b className="hover:underline font-mono">sameer106.live</b>
            </Link>{" "}
            components{" "}
          </div>
        </div>
        <div className="md:w-[768px] w-full  p-2 border-b-[1px] border-gray-300 dark:border-neutral-800 flex items-center justify-between space-x-10">
          <div className="flex items-center space-x-4">
            <span className="border-r-[1px] px-3 border-gray-300 dark:border-neutral-800">
              <GrReactjs size={30} className="text-blue-500" />
            </span>
            <Link href="/Reusable_components/Head" className="hover:cursor-pointer hover:underline">
              <div className=" font-mono  text-lg">Header</div>
            </Link>
          </div>
          <Link href="/Reusable_components/Head">
            <Button>
              <LinkIcon className="text-neutral-700 dark:text-gray-300" />
            </Button>
          </Link>
        </div>
        <div className="md:w-[768px] w-full  p-2 border-b-[1px] border-gray-300 dark:border-neutral-800 flex items-center justify-between space-x-10">
          <div className="flex items-center space-x-4">
            <span className="border-r-[1px] px-3 border-gray-300 dark:border-neutral-800">
              <GrReactjs size={30} className="text-blue-500" />
            </span>
            <Link href="/Reusable_components/Social" className="hover:cursor-pointer hover:underline">
              <div className=" font-mono  text-lg">Socials</div>
            </Link>
          </div>
          <Link href="/Reusable_components/Social">
            <Button>
              <LinkIcon className="text-neutral-700 dark:text-gray-300 " />
            </Button>
          </Link>
        </div>
        <div className="md:w-[768px] w-full  p-2 border-b-[1px] border-gray-300 dark:border-neutral-800 flex items-center justify-between space-x-10">
          <div className="flex items-center space-x-4">
            <span className="border-r-[1px] px-3 border-gray-300 dark:border-neutral-800">
              <GrReactjs size={30} className="text-blue-500" />
            </span>
            <Link href="/Reusable_components/Theme_" className="hover:cursor-pointer hover:underline">
              <div className=" font-mono  text-lg">Theme</div>
            </Link>
          </div>
          <Link href="/Reusable_components/Theme_">
            <Button>
              <LinkIcon className="text-neutral-700 dark:text-gray-300" />
            </Button>
          </Link>
        </div>
        <div className="md:w-[768px] w-full  p-2 border-b-[1px] border-gray-300 dark:border-neutral-800 flex items-center justify-between space-x-10">
          <div className="flex items-center space-x-4">
            <span className="border-r-[1px] px-3 border-gray-300 dark:border-neutral-800">
              <GrReactjs size={30} className="text-blue-500" />
            </span>
            <Link href="/Reusable_components/Footer" className="hover:cursor-pointer hover:underline">
              <div className=" font-mono  text-lg">Footer</div>
            </Link>
          </div>
          <Link href="/Reusable_components/Footer">
            <Button>
              <LinkIcon className="text-neutral-700 dark:text-gray-300" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Comp_page;

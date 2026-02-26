"use client";
import { Button } from "@/components/ui/button";
import { LockKeyholeIcon, Mail, User2 } from "lucide-react";
import { useState } from "react";
import DoneComponent from "../component/Done_email";

const ContactForm = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");
  const [To, setTo] = useState("negisameer72@gmail.com");
  const [Done, setDone] = useState(false);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await fetch("/api/Send_Message", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ Name, Email, Message, To }),
      });
      await res.json();
      if (res.ok) {
        setName("");
        setEmail("");
        setMessage("");
        setDone(true);
        setTimeout(() => setDone(false), 10000);
      } else {
        alert("Failed to send message to user");
      }
    } catch (error) {
      console.log("error occurred ", error);
    }
  };

  const inputClasses =
    "p-3 bg-transparent text-black dark:text-gray-500  text-black outline-none w-full rounded-md border border-gray-300 dark:border-neutral-700 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/50 transition-all duration-200";

  return (
    <div className="w-screen flex flex-col items-center justify-center">
      {/* Header */}
      <div className="w-screen flex items-center justify-center border-b border-gray-300 dark:border-neutral-800">
        <div className="w-[768px] py-2 border-l border-r border-gray-300 dark:border-neutral-800">
          <span className="mx-4 font-bold text-3xl my-2">Contact-me</span>
        </div>
      </div>

      {/* Form */}
      <div className="w-full md:w-[768px] flex items-center justify-center border-l border-r border-gray-300 dark:border-neutral-800">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-4 w-full md:w-[384px] my-4"
        >
          {/* Name */}
          <span className="flex items-center border rounded-md border-gray-300 dark:border-neutral-700 focus-within:border-blue-500 dark:focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-500/50 transition-all duration-200">
            <input
              type="text"
              value={Name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="flex-1 p-3 bg-transparent text-black dark:text-gray-500  outline-none"
              required
            />
            <User2 width={40} className="text-gray-400" />
          </span>

          {/* Email */}
          <span className="flex items-center border rounded-md border-gray-300 dark:border-neutral-700 focus-within:border-blue-500 dark:focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-500/50 transition-all duration-200">
            <input
              type="email"
              suppressHydrationWarning
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="flex-1 p-3 bg-transparent text-black dark:text-gray-500  outline-none"
            />
            <Mail width={40} className="text-gray-400" />
          </span>

          {/* Hidden To */}
          <span className="hidden items-center border rounded-md border-gray-300 dark:border-neutral-700">
            <input
              type="email"
              value={To}
              onChange={(e) => setTo(e.target.value)}
              placeholder="Developer"
              suppressHydrationWarning
              className="flex-1 p-3 text-red-400 outline-none"
              disabled
            />
            <LockKeyholeIcon width={40} />
          </span>

          {/* Message */}
          <textarea
            value={Message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
            rows={4}
            className={inputClasses}
            required
          />

          {/* Button */}
          <Button
            type="submit"
            className="font-bold w-full border border-gray-300 dark:border-neutral-700 hover:bg-blue-500 hover:text-white transition-colors duration-200"
          >
            Send
          </Button>
        </form>
        {Done && <DoneComponent />}
      </div>

      {/* Footer bar */}
      <div className="design_2 border-t border-b border-gray-300 dark:border-neutral-800 flex items-center justify-center w-screen">
        <div className="w-[768px] border-l border-r border-gray-300 dark:border-neutral-800 py-5"></div>
      </div>
    </div>
  );
};

export default ContactForm;

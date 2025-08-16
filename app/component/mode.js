"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import useSound from "use-sound";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [playClick] = useSound("/audio/mouse_click.mp3",{volume:0.5})
  const toggleTheme = () => {
    playClick()
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button className=" border-[1px] rounded-full border-gray-300 dark:border-neutral-700" size="icon" variant="ghost" onClick={toggleTheme}>
      {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
    </Button>
  );
}

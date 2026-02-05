"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import useSound from "use-sound";

export const ModeToggle = React.memo(function ModeToggle() {
  const { theme, setTheme } = useTheme();

  // Preload audio to avoid INP blocking
  const [playClick] = useSound("/audio/mouse_click.mp3", {
    volume: 0.5,
    interrupt: true,  
    preload: true,    // important
  });

  const toggleTheme = React.useCallback(() => {
    playClick();

    // Prevent main thread block & re-render freeze
    React.startTransition(() => {
      setTheme(theme === "light" ? "dark" : "light");
    });
  }, [theme, setTheme, playClick]);

  return (
    <Button
      className="border border-gray-300 rounded-full dark:border-neutral-700"
      size="icon"
      variant="ghost"
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <Moon className="w-5 h-5" />
      ) : (
        <Sun className="w-5 h-5" />
      )}
    </Button>
  );
});

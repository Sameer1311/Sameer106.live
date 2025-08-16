"use client ";

import { ClientOnly } from "@/app/component/client";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import * as React from "react";

export function ThemeProvider({ children, props }) {
  return (
    <ClientOnly>
    <NextThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      {...props}
    >
      {children}
    </NextThemeProvider>
    </ClientOnly>
  );
}

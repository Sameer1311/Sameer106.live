import { Geist, Geist_Mono, Pixelify_Sans } from "next/font/google";
import "./globals.css";
import { metadata } from "./metadata";
import { ThemeProvider } from "@/components/themeprovider";
import Header from "./header/page";
import Footer from "./Footer/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pixelifySans = Pixelify_Sans({
  variable: "--font-pixelify-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});


export {metadata}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`overflow-x-hidden ${geistSans.variable} ${geistMono.variable} ${pixelifySans.variable} antialiased`}
      >
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

import { Geist, Geist_Mono, Pixelify_Sans } from "next/font/google";
import "./globals.css";
import { metadata } from "./metadata";
import { ThemeProvider } from "@/components/themeprovider";
import Header from "./header/page";
import Footer from "./Footer/page";
import Script from "next/script";

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
      <head>
              <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MDBE5J49R6');
          `}
        </Script>

        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "t9zxcv9wgj");
          `}
        </Script>
      </head>
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

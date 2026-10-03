import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Antonio Conopio",
  description: "Software Engineer — portfolio of Antonio Conopio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("theme");if(t?t==="light":matchMedia("(prefers-color-scheme: light)").matches)document.documentElement.classList.add("light")}catch(e){}`,
          }}
        />
      </head>
      <body
        className={`${jetbrainsMono.variable} antialiased bg-black`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}

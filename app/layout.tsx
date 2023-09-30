"use client";

import "./css/style.css";
import "@rainbow-me/rainbowkit/styles.css";

import { Inter, Architects_Daughter } from "next/font/google";
import { useEffect } from "react";
import { themeChange } from "theme-change";

import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const architects_daughter = Architects_Daughter({
  subsets: ["latin"],
  variable: "--font-architects-daughter",
  weight: "400",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // 👆 daisy UI themes initialization
    themeChange(false);
  }, []);
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased tracking-tight`}
      >
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Providers>
            <Header />
            {children}
            <Footer />
          </Providers>
        </div>
      </body>
    </html>
  );
}

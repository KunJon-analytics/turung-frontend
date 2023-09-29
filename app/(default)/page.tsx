import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Turung",
  description: "The future of E-commerce is now!!!",
  keywords: [
    "E-commerce",
    "Crypto Token",
    "Cryptocurrency",
    "Binance Smart Chain (BSC)",
    "PancakeSwap",
    "Buy TXPR",
    "Crypto Investment",
    "Blockchain",
    "Cryptocurrency News",
    "Crypto Community",
    "Cryptocurrency Exchange",
    "Secure Wallet",
    "Decentralized Finance (DeFi)",
    "Crypto Roadmap",
    "NFTs",
    "Bullish Crypto",
    "Tokenomics",
  ],
  creator: "KunJon",
  metadataBase: new URL(BASE_URL),
  openGraph: {
    title: "Turung",
    description: "The future of E-commerce is now!!!",
    url: BASE_URL,
    siteName: "Turung",
    locale: "en_US",
    type: "website",
  },
};

import Hero from "@/components/hero";
import Features from "@/components/features";
import Zigzag from "@/components/zigzag";
import About from "@/components/about";
import Usecase from "@/components/usecase";
import Community from "@/components/community";
import Team from "@/components/team";
import Timeline from "@/components/timeline";
import Contact from "@/components/contact";
import { BASE_URL } from "@/utils/constants";

export default function Home() {
  return (
    <>
      <Hero />
      <Zigzag />
      <About />
      <Features />
      <Usecase />
      <Community />
      <Team />
      <Timeline />
      <Contact />
    </>
  );
}

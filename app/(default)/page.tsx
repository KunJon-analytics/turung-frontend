export const metadata = {
  title: "Turung",
  description: "The future of E-commerce is now!!!",
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

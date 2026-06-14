"use client";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Home, User, Folder, MessageSquare } from "lucide-react";

import { HeroSection } from "@/components/sections/hero-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { HighlightsSection } from "@/components/sections/highlights-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { AchievementsSection } from "@/components/sections/achievements-section";
import { GithubSection } from "@/components/sections/github-section";
import { ContactSection } from "@/components/sections/contact-section";
import dynamic from "next/dynamic";

const PixelBlast = dynamic(() => import("@/components/ui/PixelBlast"), {
  ssr: false,
});

export default function Portfolio() {
  const navItems = [
    { name: "Home", link: "#home", icon: <Home className="h-4 w-4" /> },
    { name: "About", link: "#skills", icon: <User className="h-4 w-4" /> },
    {
      name: "Projects",
      link: "#projects",
      icon: <Folder className="h-4 w-4" />,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: <MessageSquare className="h-4 w-4" />,
    },
  ];

  return (
    <main className="bg-black min-h-screen text-white relative">
      <FloatingNav navItems={navItems} />
      <HeroSection />

      <div className="relative w-full">
        {/* Background layer */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="sticky top-0 w-full h-screen overflow-hidden">
            <PixelBlast
              variant="circle"
              pixelSize={6}
              color="#8b5cf6"
              patternScale={3}
              patternDensity={1.2}
              pixelSizeJitter={0.5}
              enableRipples
              rippleSpeed={0.4}
              rippleThickness={0.12}
              rippleIntensityScale={1.5}
              liquidStrength={0.12}
              liquidRadius={1.2}
              liquidWobbleSpeed={5}
              speed={0.6}
              edgeFade={0.25}
              transparent
            />
          </div>
        </div>

        {/* Content layer */}
        <div className="relative z-10">
          <SkillsSection />
          <ExperienceSection />
          <HighlightsSection />
          <AchievementsSection />
          <GithubSection />
          <ContactSection />
        </div>
      </div>
    </main>
  );
}

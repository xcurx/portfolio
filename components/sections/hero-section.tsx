"use client";
import dynamic from "next/dynamic";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Github, Linkedin, Twitter } from "lucide-react";
import { DitherShader } from "@/components/ui/dither-shader";
import ShinyText from "@/components/ui/shiny-text";
import { ViewCounter } from "@/components/ui/view-counter";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full w-full text-neutral-400">
      Loading 3D Scene...
    </div>
  ),
});

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen w-full relative overflow-hidden flex items-center bg-black"
    >
      <div className="absolute inset-0 z-0 w-full h-full">
        <Spline
          scene="https://prod.spline.design/xrCDu3lzp1CWryl0/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="z-10 w-full max-w-7xl mx-auto px-6 md:px-12 xl:px-8 pointer-events-none flex flex-col lg:flex-row justify-between items-center gap-16 lg:gap-12">
        <div className="w-full max-w-2xl mt-20 lg:mt-0 shrink-1">
          <h1 className="text-5xl md:text-[80px] font-bold text-white leading-[1.1] tracking-tight">
            Hi, I&apos;m <br />
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-transparent bg-clip-text">
                Sujal Kachhawah
              </span>
              <ShinyText 
                text="Sujal Kachhawah"
                color="transparent"
                shineColor="rgba(255,255,255,0.7)"
                speed={3}
                className="absolute inset-0 z-10 pointer-events-none"
              />
            </span>
          </h1>
          <p className="mt-8 text-neutral-300 text-base md:text-lg max-w-xl font-medium leading-relaxed">
            Fullstack Developer specializing in Next.js, Go, and WebSockets. I build real-time collaborative systems, AI-driven applications, and robust scalable platforms. Smart India Hackathon 2025 National Winner.
          </p>
          <div className="flex items-center justify-between w-full mt-8 pointer-events-auto">
            <div className="flex items-center gap-4">
              <MagneticButton onClick={() => window.open("https://github.com/xcurx", "_blank")} className="p-0 w-12 h-12 !px-0 !py-0 bg-white/5 dark:bg-white/5 border-white/10 dark:border-white/10 text-white dark:text-white hover:bg-white/10 hover:border-violet-500/50 transition-all backdrop-blur-md cursor-pointer flex items-center justify-center">
                <Github className="w-5 h-5" />
              </MagneticButton>
              <MagneticButton onClick={() => window.open("https://linkedin.com/in/sujal-kachhawah-058564291", "_blank")} className="p-0 w-12 h-12 !px-0 !py-0 bg-white/5 dark:bg-white/5 border-white/10 dark:border-white/10 text-white dark:text-white hover:bg-white/10 hover:border-violet-500/50 transition-all backdrop-blur-md cursor-pointer flex items-center justify-center">
                <Linkedin className="w-5 h-5" />
              </MagneticButton>
              <MagneticButton onClick={() => window.open("https://x.com/sujal_587", "_blank")} className="p-0 w-12 h-12 !px-0 !py-0 bg-white/5 dark:bg-white/5 border-white/10 dark:border-white/10 text-white dark:text-white hover:bg-white/10 hover:border-violet-500/50 transition-all backdrop-blur-md cursor-pointer flex items-center justify-center">
                <Twitter className="w-5 h-5" />
              </MagneticButton>
              <ViewCounter />
            </div>
            <div className="block lg:hidden">
              <a href="https://drive.google.com/file/d/1tnAEAhTIx6xYi5oGjf7GVOXPFrkHNlAU/view?usp=sharing" target="_blank" className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-white hover:bg-white/10 hover:border-violet-500/50 transition-all backdrop-blur-md whitespace-nowrap">
                View Resume
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end items-center pointer-events-auto w-full mt-8 lg:mt-0 lg:flex-1 shrink-0">
          <div className="w-full max-w-[22rem] md:max-w-md lg:max-w-[400px] xl:max-w-[448px] aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <DitherShader
              src="/pfp.jpg"
              gridSize={2}
              ditherMode="bayer"
              colorMode="custom"
              customPalette={["#000000", "#4c1d95", "#8b5cf6", "#d946ef", "#ffffff"]}
              contrast={0.95}
              threshold={0.2}
              animated={true}
              animationSpeed={0.05}
              className="w-full h-full mb-10"
            />
          </div>
        </div>
      </div>

      <div className="z-10 absolute bottom-12 right-12 hidden lg:flex flex-col md:flex-row items-end md:items-center gap-6 pointer-events-auto">
        <p className="text-right text-xs md:text-sm text-neutral-400 max-w-[280px] hidden md:block mr-4 leading-relaxed">
          Crafting Awesome UI, Fullstack Apps, and AI Agents for the Modern Web.
        </p>
        <div className="flex items-center gap-4">
          <a href="https://drive.google.com/file/d/1tnAEAhTIx6xYi5oGjf7GVOXPFrkHNlAU/view?usp=sharing" target="_blank" className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-white hover:bg-white/10 hover:border-violet-500/50 transition-all backdrop-blur-md">
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
}

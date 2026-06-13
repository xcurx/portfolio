import { CrosshairIcon } from "@/components/ui/crosshair-icon";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

export function HighlightsSection() {
  const projects = [
    { 
      title: "Saksham — SIH 2025 Winner",
      description: "Architected a full-stack placement management platform unifying student, employer, faculty, and placement-cell workflows. Delivered a production-ready prototype under 36-hour hackathon conditions.",
      image: "saksham.png",
      github: "https://github.com/xcurx/canco",
      live: "https://sih25-one.vercel.app",
      tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"]
    },
    { 
      title: "Collaborative Canvas",
      description: "Real-time multi-user collaborative drawing platform with WebSocket-based state synchronisation across clients. Features interactive canvas with shape support, undo/redo history, and full state import/export.",
      image: "canco.png",
      github: "https://github.com/xcurx/canco",
      live: "",
      tags: ["Next.js", "TypeScript", "Go", "WebSockets"]
    },
    { 
      title: "Mockly",
      description: "Agentic AI mock interview platform with LangGraph-orchestrated pipelines for resume parsing and web-augmented question generation. Implemented smart LLM routing, query caching, and voice-based interviews.",
      image: "mockly.png",
      github: "https://github.com/xcurx/Mockly",
      live: "",
      tags: ["LangGraph", "FastAPI", "Next.js", "AI Agents"]
    },
    { 
      title: "Chat Application",
      description: "WhatsApp-inspired real-time chat platform featuring authentication, friend requests, push notifications, and live chat with typing indicators. Built on a dedicated WebSocket server for low-latency messaging.",
      image: "chatapp.png",
      github: "https://github.com/xcurx/chatapp",
      live: "",
      tags: ["Next.js", "Express", "WebSockets", "Prisma"]
    },
  ];

  const stickyContent = projects.map((project) => ({
    title: project.title,
    description: (
      <div className="flex flex-col gap-6">
        <p className="text-neutral-400 leading-relaxed text-base">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, tIdx) => (
            <span key={tIdx} className="text-xs font-mono px-3 py-1 bg-violet-500/10 text-violet-400 border border-violet-500/20 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-4">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-white hover:text-violet-400 transition-colors border border-white/20 hover:border-violet-500/50 px-6 py-3 rounded-full">
              <Github className="w-4 h-4" />
              Code
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-black bg-white hover:bg-violet-500 hover:text-white border border-transparent transition-colors px-6 py-3 rounded-full font-medium">
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    ),
    content: (
      <div className="w-full h-full relative group overflow-hidden bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl shadow-2xl">
        <CrosshairIcon className="absolute h-6 w-6 -top-3 -left-3 text-white/20 z-20" />
        <CrosshairIcon className="absolute h-6 w-6 -bottom-3 -left-3 text-white/20 z-20" />
        <CrosshairIcon className="absolute h-6 w-6 -top-3 -right-3 text-white/20 z-20" />
        <CrosshairIcon className="absolute h-6 w-6 -bottom-3 -right-3 text-white/20 z-20" />
        <Image 
          src={`/${project.image}`} 
          alt={project.title} 
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
    )
  }));

  return (
    <section id="projects" className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative">
      <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center text-white">
        Featured Projects
      </h2>
      <StickyScroll content={stickyContent} />
    </section>
  );
}

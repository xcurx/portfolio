import { Code2, Layers, Server, Bot } from "lucide-react";
import { motion } from "framer-motion";
import {
  SiTypescript,
  SiJavascript,
  SiGo,
  SiPython,
  SiCplusplus,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiFastapi,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiGit,
  SiPrisma,
} from "react-icons/si";
import { TbPlugConnected } from "react-icons/tb";
import { FaDatabase } from "react-icons/fa";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export function SkillsSection() {
  const expertise = [
    {
      title: "Software Development",
      icon: <Code2 className="w-8 h-8 text-violet-500" />,
      description:
        "Fluent across functional and OOP paradigms using C++, Go, Python, and Rust for production-grade systems.",
    },
    {
      title: "Fullstack Development",
      icon: <Layers className="w-8 h-8 text-fuchsia-500" />,
      description:
        "Building fast, accessible web apps with Next.js, React, and Tailwind. Focused on performance and delightful user experiences.",
    },
    {
      title: "AI & Agentic AI",
      icon: <Bot className="w-8 h-8 text-indigo-500" />,
      description:
        "Engineering RAG systems and LLM pipelines using LangChain and LangGraph for smart, autonomous AI agents.",
    },
    {
      title: "DevOps & Infra",
      icon: <Server className="w-8 h-8 text-violet-400" />,
      description:
        "Deploying secure, scalable architectures with Docker, CI/CD pipelines, and robust Linux-based environments.",
    },
  ];

  const technologies = [
    {
      name: "TypeScript",
      icon: <SiTypescript className="w-4 h-4 text-blue-500" />,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="w-4 h-4 text-yellow-400" />,
    },
    { name: "Go", icon: <SiGo className="w-4 h-4 text-cyan-500" /> },
    { name: "Python", icon: <SiPython className="w-4 h-4 text-blue-400" /> },
    { name: "C++", icon: <SiCplusplus className="w-4 h-4 text-blue-600" /> },
    { name: "React.js", icon: <SiReact className="w-4 h-4 text-cyan-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="w-4 h-4 text-white" /> },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="w-4 h-4 text-teal-400" />,
    },
    {
      name: "Node.js",
      icon: <SiNodedotjs className="w-4 h-4 text-green-500" />,
    },
    { name: "FastAPI", icon: <SiFastapi className="w-4 h-4 text-teal-500" /> },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql className="w-4 h-4 text-blue-400" />,
    },
    { name: "MongoDB", icon: <SiMongodb className="w-4 h-4 text-green-500" /> },
    { name: "Docker", icon: <SiDocker className="w-4 h-4 text-blue-500" /> },
    { name: "Git", icon: <SiGit className="w-4 h-4 text-orange-500" /> },
    {
      name: "WebSockets",
      icon: <TbPlugConnected className="w-4 h-4 text-neutral-300" />,
    },
    { name: "Prisma", icon: <SiPrisma className="w-4 h-4 text-indigo-400" /> },
    { name: "Qdrant", icon: <FaDatabase className="w-4 h-4 text-rose-500" /> },
  ];

  return (
    <section
      id="skills"
      className="py-32 px-8 max-w-7xl mx-auto flex flex-col gap-20"
    >
      {/* My Expertise */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">
            My
          </span>{" "}
          Expertise
        </h2>
        <p className="text-neutral-400 mb-12 text-lg">What I do</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {expertise.map((item, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              key={idx}
            >
              <GlowingEffect className="p-8">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed text-sm">
                  {item.description}
                </p>
              </GlowingEffect>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Skills & Technologies */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="border border-white/10 p-8 md:p-12 rounded-xl bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl shadow-2xl flex flex-col items-center"
      >
        <p className="text-xs font-semibold tracking-widest text-neutral-500 uppercase mb-8">
          Skills & Technologies
        </p>
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl">
          {technologies.map((tech, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-violet-500/20 hover:border-violet-500/50 hover:text-white transition-all px-4 py-2 rounded-full text-sm text-neutral-300 cursor-default"
            >
              {tech.icon}
              <span className="font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

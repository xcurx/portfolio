"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  { ssr: false }
);

export function GithubSection() {
  return (
    <section className="w-full py-24 relative overflow-hidden z-10 flex flex-col items-center">
      <div className="w-full max-w-5xl mx-auto px-6 md:px-12 xl:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 tracking-tight text-center">
            GitHub{" "}
            <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-transparent bg-clip-text">
              Contributions
            </span>
          </h2>

          <div className="w-full flex justify-center bg-white/5 border border-white/10 rounded-2xl p-6 md:p-10 backdrop-blur-sm overflow-hidden">
            <div className="flex justify-center scale-[0.6] sm:scale-75 md:scale-100 origin-center w-full">
              <GitHubCalendar
                username="xcurx"
                colorScheme="dark"
                theme={{
                  dark: ["#161b22", "#4c1d95", "#7c3aed", "#8b5cf6", "#c4b5fd"],
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

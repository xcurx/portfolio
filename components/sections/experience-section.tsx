"use client";
import { CrosshairIcon } from "@/components/ui/crosshair-icon";
import { motion } from "framer-motion";

export function ExperienceSection() {
  const timelineData = [
    {
      type: "Experience",
      title: "Web Development Team Member",
      organization: "GDG on Campus, IIIT Nagpur",
      date: "Sep 2024 – May 2025",
      points: [
        "Engineered the Timeline and Carousel components for CodeXCaliber, a GSoC-inspired open-source platform.",
        "Collaborated with a cross-functional team of developers using Git-based workflows, code reviews, and shared component architecture.",
        "Contributed to an open-source program connecting student developers with real-world project and mentorship experience.",
      ],
    },
    {
      type: "Education",
      title: "B.Tech — Computer Science and Engineering",
      organization: "Indian Institute of Information Technology (IIIT), Nagpur",
      date: "Expected May 2027",
      points: [
        "Focusing on core computer science fundamentals, data structures, and algorithms.",
        "Active member of development clubs and hackathon teams.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-32 px-8 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-20 text-center text-white">
        Experience & Education
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto">
        {timelineData.map((item, idx) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            key={idx}
            className="w-full h-full"
          >
            <div className="relative w-full h-full border border-white/10 p-8 md:p-10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl shadow-2xl overflow-hidden hover:border-violet-500/30 transition-colors flex flex-col rounded-xl">
              <CrosshairIcon className="absolute h-6 w-6 -top-3 -left-3 text-white/20 z-20" />
              <CrosshairIcon className="absolute h-6 w-6 -bottom-3 -left-3 text-white/20 z-20" />
              <CrosshairIcon className="absolute h-6 w-6 -top-3 -right-3 text-white/20 z-20" />
              <CrosshairIcon className="absolute h-6 w-6 -bottom-3 -right-3 text-white/20 z-20" />

              <div className="mb-6 flex-shrink-0">
                <span className="text-xs font-bold tracking-wider text-fuchsia-500 uppercase mb-3 block">
                  {item.type}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-violet-400 font-medium text-base mb-4">
                  {item.organization}
                </p>
                <div className="text-neutral-500 font-mono text-xs inline-block border border-white/10 px-3 py-1.5 rounded-full">
                  {item.date}
                </div>
              </div>

              <ul className="flex flex-col gap-4 text-neutral-400 text-sm leading-relaxed mt-4 flex-grow">
                {item.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex gap-3">
                    <span className="text-violet-500 mt-1">▹</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

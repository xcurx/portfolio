"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { CrosshairIcon } from "@/components/ui/crosshair-icon";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string | React.ReactNode;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Distribute the scroll progress evenly among all cards
    let index = Math.floor(latest * cardLength);
    // Clamp the index to ensure it stays within bounds
    index = Math.max(0, Math.min(index, cardLength - 1));
    setActiveCard(index);
  });

  const backgroundColors = [
    "transparent",
    "transparent",
    "transparent",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)",
    "linear-gradient(to bottom right, #ec4899, #6366f1)",
    "linear-gradient(to bottom right, #f97316, #eab308)",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0],
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="relative flex justify-center space-x-10 rounded-md p-0 md:p-10"
      ref={ref}
    >
      <div className="div relative flex items-start px-4 w-full md:w-1/2">
        <div className="max-w-2xl w-full">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20 relative p-8 md:p-12 border border-white/10 bg-black/40 backdrop-blur-md hover:border-violet-500/30 transition-all">
              <CrosshairIcon className="absolute h-6 w-6 -top-3 -left-3 text-white/20 z-20" />
              <CrosshairIcon className="absolute h-6 w-6 -bottom-3 -left-3 text-white/20 z-20" />
              <CrosshairIcon className="absolute h-6 w-6 -top-3 -right-3 text-white/20 z-20" />
              <CrosshairIcon className="absolute h-6 w-6 -bottom-3 -right-3 text-white/20 z-20" />

              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-3xl md:text-4xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-base mt-10 w-full text-slate-300 leading-relaxed"
              >
                {item.description}
              </motion.div>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        className={cn(
          "sticky top-[30vh] hidden h-[22rem] w-full md:w-[28rem] lg:w-[32rem] overflow-hidden rounded-xl border border-white/10 lg:block shrink-0 shadow-2xl",
          contentClassName,
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};

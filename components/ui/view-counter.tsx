"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";
import { motion } from "framer-motion";

export function ViewCounter() {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    const fetchViews = async () => {
      try {
        const isVisited = sessionStorage.getItem("portfolio_visited");
        let url = "/api/views";
        if (!isVisited) {
          url += "?action=up";
          sessionStorage.setItem("portfolio_visited", "true");
        }
        
        const res = await fetch(url);
        const data = await res.json();
        setViews(data.count);
      } catch (error) {
        console.error("Failed to fetch view count", error);
      }
    };
    
    fetchViews();
  }, []);

  if (views === null) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="flex items-center gap-2 px-4 h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-neutral-300 text-sm font-medium hover:border-violet-500/50 hover:text-white hover:bg-white/10 transition-all shadow-xl cursor-default"
      title="Total profile views"
    >
      <Eye className="w-5 h-5 text-violet-400" />
      <span>{views.toLocaleString()}</span>
    </motion.div>
  );
}

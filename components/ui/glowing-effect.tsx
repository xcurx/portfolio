"use client";

import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export const GlowingEffect = ({
  className,
  color = "#00a8ff",
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { color?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseenter", () => setOpacity(1));
      container.addEventListener("mouseleave", () => setOpacity(0));
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseenter", () => setOpacity(1));
        container.removeEventListener("mouseleave", () => setOpacity(0));
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden rounded-xl bg-black/20 backdrop-blur-lg border border-white/10 group", className)}
      {...props}
    >
      {/* Background radial gradient */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 z-0"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${color}15, transparent 40%)`,
        }}
      />
      
      {/* Border radial gradient mask */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 z-0 rounded-[inherit]"
        style={{
          opacity,
        }}
      >
        <div 
          className="absolute inset-0 rounded-[inherit] border border-transparent"
          style={{
            background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, ${color}80, transparent 40%) border-box`,
            WebkitMask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude"
          }}
        />
      </div>

      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
};

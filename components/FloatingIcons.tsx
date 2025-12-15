"use client";

import { motion } from "framer-motion";
import { Code, Database, Server, Cpu } from "lucide-react";
import { useState } from "react";

type FloatingIcon = {
  x: number;
  y: number;
  rotate: number;
  scale: number;
  icon: "code" | "db" | "server" | "cpu";
  size: number;
};

export default function FloatingIcons() {
  const [icons] = useState<FloatingIcon[]>(() => {
    // Runs ONCE on client
    if (typeof window === "undefined") return [];

    return Array.from({ length: 8 }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      rotate: Math.random() * 360,
      scale: 0.5 + Math.random() * 0.5,
      icon: ["code", "db", "server", "cpu"][
        Math.floor(Math.random() * 4)
      ] as FloatingIcon["icon"],
      size: 40 + Math.random() * 40,
    }));
  });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {icons.map((item, i) => {
        const Icon =
          item.icon === "code"
            ? Code
            : item.icon === "db"
            ? Database
            : item.icon === "server"
            ? Server
            : Cpu;

        return (
          <motion.div
            key={i}
            className="absolute text-white/5"
            initial={{
              x: item.x,
              y: item.y,
              rotate: item.rotate,
              scale: item.scale,
              opacity: 0.1,
            }}
            animate={{
              y: [item.y, item.y - 100],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Icon size={item.size} />
          </motion.div>
        );
      })}
    </div>
  );
}

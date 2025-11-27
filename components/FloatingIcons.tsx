"use client";

import { motion } from "framer-motion";
import { Code, Database, Server, Cpu } from "lucide-react";
import { useEffect, useState } from "react";

export default function FloatingIcons() {
  const [icons, setIcons] = useState<any[]>([]);

  useEffect(() => {
    const arr = Array.from({ length: 8 }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      rotate: Math.random() * 360,
      scale: 0.5 + Math.random() * 0.5,
      icon: ["code", "db", "server", "cpu"][Math.floor(Math.random() * 4)],
      size: 40 + Math.random() * 40,
    }));

    setIcons(arr);
  }, []);

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

"use client";

import React, { useRef, useEffect } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  shape: string;
  size: number;
  life: number;
  decay: number;
}

const colors = ["#3A0CA3", "#7209B7", "#F72585", "#4CC9F0", "#FFFFFF"];
const shapes = ["⭐", "✦", "✧", "●", "◆", "▲", "✺"];

export default function ClickSparkle() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameId = useRef<number>(0);

  useEffect(() => {
    // Prevent SSR issues
    if (typeof window === "undefined") return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Resize canvas
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    // Handle click sparkle
    const handleClick = (e: MouseEvent) => {
      const particleCount = 8 + Math.floor(Math.random() * 5);

      for (let i = 0; i < particleCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const velocity = 2 + Math.random() * 4;
        const size = 12 + Math.random() * 14;
        const decay = 0.015 + Math.random() * 0.015;

        particlesRef.current.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * velocity,
          vy: Math.sin(angle) * velocity,
          radius: size / 2.5,
          color: colors[Math.floor(Math.random() * colors.length)],
          shape: shapes[Math.floor(Math.random() * shapes.length)],
          size,
          life: 1,
          decay,
        });
      }
    };

    window.addEventListener("click", handleClick);

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;

      // Update particles
      for (let p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.life -= p.decay;
        p.vx *= 0.98;
        p.vy *= 0.98;
      }

      // Collision detection
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];

          if (p1.life <= 0 || p2.life <= 0) continue;

          const dx = p2.x - p1.x;
          const dy = p2.y - p1.y;

          let distance = Math.sqrt(dx * dx + dy * dy);
          const minDistance = p1.radius + p2.radius;

          if (distance < minDistance) {
            if (distance === 0) distance = 0.01;

            const overlap = minDistance - distance;
            const nx = dx / distance;
            const ny = dy / distance;

            const totalRadius = p1.radius + p2.radius;

            p1.x -= nx * overlap * (p2.radius / totalRadius);
            p1.y -= ny * overlap * (p2.radius / totalRadius);
            p2.x += nx * overlap * (p1.radius / totalRadius);
            p2.y += ny * overlap * (p1.radius / totalRadius);

            // Velocity bounce
            const kx = p1.vx - p2.vx;
            const ky = p1.vy - p2.vy;

            const p =
              (2 * (nx * kx + ny * ky)) / (p1.radius + p2.radius);

            p1.vx -= p * p2.radius * nx;
            p1.vy -= p * p2.radius * ny;
            p2.vx += p * p1.radius * nx;
            p2.vy += p * p1.radius * ny;

            p1.vx *= 0.9;
            p1.vy *= 0.9;
            p2.vx *= 0.9;
            p2.vy *= 0.9;
          }
        }
      }

      // Draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.globalAlpha = p.life;
        ctx.font = `${p.size}px sans-serif`;
        ctx.fillStyle = p.color;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.fillText(p.shape, p.x, p.y);
        ctx.shadowBlur = 0;
      }

      ctx.globalAlpha = 1;

      animationFrameId.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("click", handleClick);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
    />
  );
}

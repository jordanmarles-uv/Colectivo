"use client";
import { useEffect, useRef } from "react";

import { useTheme } from "next-themes";

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !canvas.parentElement) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let mouseX = 0;
    let mouseY = 0;

    const resize = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouse = (e: MouseEvent) => {
      // Adjust mouse pos if container is scrolled
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    window.addEventListener("mousemove", handleMouse);

    // Particle system
    const PARTICLE_COUNT = 80; // reduced for cleaner look
    type Particle = {
      x: number; y: number;
      vx: number; vy: number;
      size: number; opacity: number;
      color: string; pulse: number; pulseSpeed: number;
    };

    const isLight = resolvedTheme === 'light';
    const colors = ["#6C63FF", "#00D4FF", "#FF6B9D"];

    let particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 2 + 0.5,
      opacity: isLight ? (Math.random() * 0.4 + 0.1) : (Math.random() * 0.6 + 0.2),
      color: colors[Math.floor(Math.random() * colors.length)],
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.02 + 0.005,
    }));

    // Connection threshold
    const MAX_DIST = 160;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += p.pulseSpeed;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const force = (120 - dist) / 120;
          p.vx += (dx / dist) * force * 0.5;
          p.vy += (dy / dist) * force * 0.5;
          const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
          if (speed > 2) { p.vx = (p.vx / speed) * 2; p.vy = (p.vy / speed) * 2; }
        }

        p.vx *= 0.99;
        p.vy *= 0.99;

        const pulsingSize = Math.max(0.1, p.size + Math.sin(p.pulse) * 0.8);
        const alpha = p.opacity * (0.7 + 0.3 * Math.sin(p.pulse));

        // Disable heavy glow in light mode for cleaner look
        if (!isLight) {
          ctx.beginPath();
          const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, pulsingSize * 4);
          // Convert hex to rgba manually for simple colors or use globalAlpha
          ctx.globalAlpha = alpha * 0.3;
          ctx.fillStyle = p.color;
          ctx.arc(p.x, p.y, pulsingSize * 4, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, pulsingSize, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = alpha;
        ctx.fill();
        ctx.globalAlpha = 1;

        // Lines
        for (let j = i + 1; j < PARTICLE_COUNT; j++) {
          const dx2 = p.x - particles[j].x;
          const dy2 = p.y - particles[j].y;
          const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
          if (dist2 < MAX_DIST) {
            const lineAlpha = (1 - dist2 / MAX_DIST) * (isLight ? 0.08 : 0.15);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(108, 99, 255, ${lineAlpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, [resolvedTheme]);

  return (
    <canvas
      ref={canvasRef}
      id="particle-canvas"
      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0 }}
    />
  );
}

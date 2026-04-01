"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let ringX = 0, ringY = 0;
    let mouseX = 0, mouseY = 0;
    let animId: number;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = mouseX - 4 + "px";
      dot.style.top = mouseY - 4 + "px";
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.left = ringX - 20 + "px";
      ring.style.top = ringY - 20 + "px";
      animId = requestAnimationFrame(animate);
    };
    animate();

    const hoverIn = () => {
      ring.style.width = "64px";
      ring.style.height = "64px";
      ring.style.borderColor = "rgba(0, 212, 255, 0.8)";
      dot.style.transform = "scale(2)";
      dot.style.background = "#00D4FF";
    };
    const hoverOut = () => {
      ring.style.width = "40px";
      ring.style.height = "40px";
      ring.style.borderColor = "rgba(108, 99, 255, 0.6)";
      dot.style.transform = "scale(1)";
      dot.style.background = "#6C63FF";
    };

    window.addEventListener("mousemove", move);
    document.querySelectorAll("a, button, [data-hover]").forEach(el => {
      el.addEventListener("mouseenter", hoverIn);
      el.addEventListener("mouseleave", hoverOut);
    });

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}

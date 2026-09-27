"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (coarse || reduced) return;

    document.documentElement.classList.add("has-custom-cursor");
    const dot = dotRef.current;
    if (!dot) return;

    let x = 0, y = 0, rafId = 0;
    const move = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      dot.style.transform = `translate(${x}px, ${y}px)`;
    };
    const over = (e: PointerEvent) => {
      const el = (e.target as Element)?.closest?.("a, button, [role='button']");
      dot.classList.toggle("is-interactive", !!el);
    };
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerover", over, { passive: true });
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  return <div className="custom-cursor" ref={dotRef} aria-hidden="true" />;
}

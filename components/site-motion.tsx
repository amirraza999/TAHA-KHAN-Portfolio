"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export function SiteMotion() {
  const pathname = usePathname();

  // Smooth scroll — set up once, skipped entirely for reduced-motion users.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
    };
  }, []);

  // Scroll-linked reveal for every [data-reveal] element — re-scanned on each route change.
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = gsap.utils.toArray<HTMLElement>("[data-reveal]");
    if (reduced) {
      targets.forEach((el) => el.style.removeProperty("opacity"));
      return;
    }

    const triggers = targets.map((el, i) => {
      const group = el.closest("[data-reveal-group]");
      const stagger = group ? Array.from(group.querySelectorAll("[data-reveal]")).indexOf(el) : 0;
      return gsap.fromTo(
        el,
        { opacity: 0, y: 22 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: Math.min(stagger * 0.08, 0.32),
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        }
      );
    });

    // Icon badges get an extra "pop" on top of the card's own fade — a small staggered flourish.
    const iconTargets = gsap.utils.toArray<HTMLElement>("[data-icon-pop]");
    const iconTriggers = reduced
      ? []
      : iconTargets.map((el, i) => {
          const group = el.closest("[data-reveal-group]");
          const stagger = group ? Array.from(group.querySelectorAll("[data-icon-pop]")).indexOf(el) : 0;
          return gsap.fromTo(
            el,
            { scale: 0.3, rotate: -30, opacity: 0 },
            {
              scale: 1,
              rotate: 0,
              opacity: 1,
              duration: 0.6,
              delay: Math.min(stagger * 0.08, 0.32) + 0.15,
              ease: "back.out(1.8)",
              scrollTrigger: { trigger: el, start: "top 88%", once: true },
            }
          );
        });

    // Big stat numbers count up from 0 when they scroll into view.
    const counterTargets = gsap.utils.toArray<HTMLElement>("[data-count-to]");
    const counterTriggers = reduced
      ? []
      : counterTargets.map((el) => {
          const target = parseInt(el.getAttribute("data-count-to") || "0", 10);
          const counter = { val: 0 };
          return gsap.fromTo(
            counter,
            { val: 0 },
            {
              val: target,
              duration: 1.3,
              ease: "power2.out",
              onUpdate: () => { el.textContent = Math.round(counter.val).toString(); },
              scrollTrigger: { trigger: el, start: "top 88%", once: true },
            }
          );
        });

    // Progress/health bars fill from 0 to their target width when they scroll into view.
    const fillTargets = gsap.utils.toArray<HTMLElement>("[data-fill]");
    const fillTriggers = reduced
      ? []
      : fillTargets.map((el) => {
          const pct = el.getAttribute("data-fill") || "0";
          return gsap.fromTo(
            el,
            { width: "0%" },
            {
              width: `${pct}%`,
              duration: 1.1,
              delay: 0.15,
              ease: "power2.out",
              scrollTrigger: { trigger: el, start: "top 88%", once: true },
            }
          );
        });

    ScrollTrigger.refresh();
    return () => {
      triggers.forEach((t) => t.scrollTrigger?.kill());
      iconTriggers.forEach((t) => t.scrollTrigger?.kill());
      counterTriggers.forEach((t) => t.scrollTrigger?.kill());
      fillTriggers.forEach((t) => t.scrollTrigger?.kill());
    };
  }, [pathname]);

  return null;
}

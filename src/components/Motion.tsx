"use client";

import { useEffect } from "react";

/**
 * Runs the site's motion once the page is interactive:
 *  - reveals .reveal elements as they scroll into view
 *  - fades in .fade-img images once they finish loading
 *
 * Content is only hidden while <html> has the "js" class (set by the inline script in
 * layout.tsx). That script removes the class if this component hasn't started within
 * a couple of seconds, so slow or failed JavaScript never leaves the page blank.
 */
export function Motion() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("motion-ready");

    // Photos: fade in when loaded (or immediately if already cached)
    const markLoaded = (img: HTMLImageElement) => img.classList.add("loaded");
    document.querySelectorAll<HTMLImageElement>("img.fade-img").forEach((img) => {
      if (img.complete) markLoaded(img);
      else {
        img.addEventListener("load", () => markLoaded(img), { once: true });
        img.addEventListener("error", () => markLoaded(img), { once: true });
      }
    });

    // Text and sections: reveal on scroll
    const items = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("in"));
      return;
    }

    let firstBatch = true;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).map((e) => e.target as HTMLElement);
        visible.forEach((el, i) => {
          // First load keeps the hand-tuned cascade delays; later scroll reveals get a short stagger.
          if (!firstBatch) el.style.setProperty("--d", `${i * 0.07}s`);
          el.classList.add("in");
          observer.unobserve(el);
        });
        firstBatch = false;
      },
      // threshold 0 so even very tall sections trigger once their top edge is ~10% into view
      { rootMargin: "0px 0px -10% 0px", threshold: 0 },
    );
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}

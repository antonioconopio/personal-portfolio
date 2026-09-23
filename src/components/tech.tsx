"use client";

import { useEffect, useRef } from "react";
import { div } from "three/tsl";

const technologies = [
  "python",
  "java",
  "c",
  "reactjs",
  "javaScript",
  "typeScript",
  "nextjs",
  "tailwind",
  "nodejs",
  "HTML5",
  "CSS3",
  "git",
  "mysql",
];

// these icons render their mark in white on a colored badge — brightness(0)
// crushes the badge and mark to the same solid color, hiding the mark.
// inverting (without brightness) keeps that contrast, turning the mark black.
const letterMarkIcons = new Set([
  "c",
  "git",
  "CSS3",
  "HTML5",
  "javaScript",
  "typeScript",
]);

export default function TechnologiesMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (marquee) {
      const duration = window.innerWidth >= 768 ? 80 : 100;
      marquee.style.animation = `scroll ${duration}s linear infinite`;
    }
  }, []);

  return (
    <div className="relative flex justify-center items-center bg-black border-y border-white/10 py-2">
      <div className="relative overflow-x-hidden w-full">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-black to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-black to-transparent z-20" />

        <div
          ref={marqueeRef}
          className="flex gap-10 md:gap-16 w-max animate-scroll hover:[animation-play-state:paused] py-6"
        >
          {[...technologies, ...technologies, ...technologies].map(
            (tech, index) => (
              <div
                key={index}
                className="flex items-center gap-3 group transition-all duration-300"
              >
                <img
                  src={`/svg/${tech}.svg`}
                  alt={tech}
                  className={`h-5 w-auto object-contain transition-all opacity-40 group-hover:opacity-100 ${
                    letterMarkIcons.has(tech)
                      ? "[filter:grayscale(1)_invert(1)]"
                      : "[filter:grayscale(1)_brightness(0)_invert(1)]"
                  }`}
                  width={20}
                  height={20}
                  loading="lazy"
                />
                <span className="font-mono text-sm uppercase tracking-[0.15em] text-white/40 group-hover:text-white transition-colors">
                  {tech}
                </span>
                <span className="text-white/15 ml-4 md:ml-6">/</span>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}

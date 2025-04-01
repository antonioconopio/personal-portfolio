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
    <div className="flex justify-center items-center">
      <div className="overflow-x-hidden w-[80%] py-8">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-20" />

        <div
          ref={marqueeRef}
          className="flex gap-12 md:gap-20 w-max animate-scroll hover:[animation-play-state:paused]">
          {[...technologies, ...technologies, ...technologies].map(
            (tech, index) => (
              <div
                key={index}
                className="flex items-center gap-2 group transition-all duration-300">
                <img
                  src={`/svg/${tech}.svg`}
                  alt={tech}
                  className="h-7 w-auto object-contain transition-transform group-hover:scale-110 opacity-60"
                  width={30}
                  height={30}
                  loading="lazy"
                />
                <span className="text-lg font-medium text-white/50">
                  {tech.charAt(0).toUpperCase() + tech.slice(1)}
                </span>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

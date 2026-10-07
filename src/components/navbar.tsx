"use client";

import { useEffect, useState } from "react";
import { FiFileText } from "react-icons/fi";
import { motion } from "motion/react";
import ThemeToggle from "./themeToggle";

const items = [
  { label: "about", href: "#about" },
  { label: "projects", href: "#projects" },
  { label: "contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-black/90 border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="flex items-center justify-between h-20 px-6 md:px-10">
        <a
          href="#"
          onClick={scrollToTop}
          aria-label="Back to top"
          className="flex items-center gap-2 font-mono text-sm tracking-[0.2em] text-white uppercase shrink-0"
        >
          <span aria-hidden className="text-term">
            &gt;
          </span>
          <span>ac</span>
        </a>

        <nav className="hidden md:flex items-center gap-1 bg-black/40 border border-white/15 px-2 py-1.5 rounded-full">
          {items.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setActiveIndex(i)}
              className={`relative px-5 py-2 font-mono text-sm uppercase tracking-wide rounded-full transition-colors duration-300 ${
                activeIndex === i
                  ? "text-black"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {activeIndex === i && (
                <motion.span
                  layoutId="nav-active-pill"
                  className="absolute inset-0 rounded-full bg-white"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative">{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3 shrink-0">
          <ThemeToggle />
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-white border border-white/30 rounded-full px-3 md:px-4 py-2 shrink-0 transition-colors duration-300 hover:bg-white hover:text-black"
          >
            <FiFileText className="text-sm" />
            <span className="hidden sm:inline">Resume</span>
          </a>
        </div>
      </div>

      <div className="flex md:hidden justify-center gap-6 pb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-white/60">
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="hover:text-white transition-colors"
          >
            {item.label}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Navbar;

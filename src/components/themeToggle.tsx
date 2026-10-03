"use client";

import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const ThemeToggle = () => {
  const [light, setLight] = useState(false);

  useEffect(() => {
    setLight(document.documentElement.classList.contains("light"));
  }, []);

  const toggle = () => {
    const next = !light;
    setLight(next);
    document.documentElement.classList.toggle("light", next);
    try {
      localStorage.setItem("theme", next ? "light" : "dark");
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={light ? "Switch to dark mode" : "Switch to light mode"}
      className="flex items-center justify-center w-9 h-9 shrink-0 rounded-full border border-white/30 text-white transition-colors duration-300 hover:bg-white hover:text-black"
    >
      {light ? <FiMoon className="text-sm" /> : <FiSun className="text-sm" />}
    </button>
  );
};

export default ThemeToggle;

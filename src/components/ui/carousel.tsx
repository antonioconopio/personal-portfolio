"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { IconArrowNarrowRight } from "@tabler/icons-react";

type SlideData = {
  src: string;
  button: string;
  buttonLink: string;
  title: string;
};

type SlideProps = {
  slide: SlideData;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
};

const Slide: React.FC<SlideProps> = ({
  slide,
  index,
  current,
  handleSlideClick,
}) => {
  const slideRef = useRef<HTMLLIElement | null>(null);

  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) {
        frameRef.current = requestAnimationFrame(animate);
        return;
      }

      const x = xRef.current;
      const y = yRef.current;

      slideRef.current.style.setProperty("--x", `${x}px`);
      slideRef.current.style.setProperty("--y", `${y}px`);

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const handleMouseMove: React.MouseEventHandler<HTMLLIElement> = (event) => {
    const el = slideRef.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave: React.MouseEventHandler<HTMLLIElement> = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  const imageLoaded: React.ReactEventHandler<HTMLImageElement> = (event) => {
    (event.currentTarget as HTMLImageElement).style.opacity = "1";
  };

  const { src, button, buttonLink, title } = slide;

  return (
    <div className="[perspective:1200px] [transform-style:preserve-3d]">
      <li
        ref={slideRef}
        className="flex flex-1 flex-col items-center justify-center relative text-center text-white opacity-100 transition-all duration-300 ease-in-out w-[70vmin] h-[70vmin] mx-[4vmin] z-10"
        onClick={() => handleSlideClick(index)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform:
            current !== index
              ? "scale(0.98) rotateX(8deg)"
              : "scale(1) rotateX(0deg)",
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          transformOrigin: "bottom",
        }}
      >
        <img
          className="absolute inset-0 w-[100%] h-[100%] object-scale-down opacity-100 transition-opacity duration-600 ease-in-out"
          style={{ opacity: current === index ? 1 : 0.5 }}
          alt={title}
          src={src}
          onLoad={imageLoaded}
          loading="eager"
          decoding="sync"
        />
        {current === index && (
          <div className="absolute inset-0 bg-black/30  transition-all duration-1000" />
          // add bg-black/30 if you want a dark overlay
        )}

        <article
          className={`relative p-[4vmin] transition-opacity duration-1000 ease-in-out ${
            current === index ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <h2 className="text-lg md:text-2xl lg:text-4xl font-semibold rounded-lg relative text-[#F5F5F5] p-2">
            {title}
          </h2>
          <div className="flex justify-center">
            <a
              href={buttonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 px-4 py-2 w-fit mx-auto sm:text-sm text-[#F5F5F5] bg-black/80 bg-opacity-10 h-12 border border-transparent text-xs flex justify-center items-center rounded-2xl hover:-translate-y-0.5 transition duration-200 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
            >
              {button}
            </a>
          </div>
        </article>
      </li>
    </div>
  );
};

type CarouselControlProps = {
  type: "previous" | "next";
  title: string;
  handleClick: () => void;
};

const CarouselControl: React.FC<CarouselControlProps> = ({
  type,
  title,
  handleClick,
}) => {
  return (
    <button
      className={`w-10 h-10 flex items-center mx-2 justify-center bg-neutral-200 dark:bg-neutral-800 border rounded-full focus:border-[#6D64F7] focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 ${
        type === "previous" ? "rotate-180" : ""
      }`}
      title={title}
      onClick={handleClick}
      type="button"
      aria-label={title}
    >
      <IconArrowNarrowRight className="text-neutral-800 dark:text-neutral-200" />
    </button>
  );
};

type CarouselProps = {
  slides: SlideData[];
};

export const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [current, setCurrent] = useState<number>(0);

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? slides.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === slides.length ? 0 : next);
  };

  const handleSlideClick = (index: number) => {
    if (current !== index) setCurrent(index);
  };

  const id = useId();

  return (
    <div
      className="relative w-[70vmin] h-[70vmin] mx-auto"
      aria-labelledby={`carousel-heading-${id}`}
    >
      <ul
        className="absolute flex mx-[-4vmin] transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${current * (100 / slides.length)}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <Slide
            key={index}
            slide={slide}
            index={index}
            current={current}
            handleSlideClick={handleSlideClick}
          />
        ))}
      </ul>

      <div className="-mt-16 absolute flex justify-center w-full top-[calc(100%+1rem)]">
        <CarouselControl
          type="previous"
          title="Go to previous slide"
          handleClick={handlePreviousClick}
        />
        <CarouselControl
          type="next"
          title="Go to next slide"
          handleClick={handleNextClick}
        />
      </div>
    </div>
  );
};

export default Carousel;

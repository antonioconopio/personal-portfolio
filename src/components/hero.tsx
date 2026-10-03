import GridHorizon from "./GridHorizon/GridHorizon";
import RotatingText from "./rotateText";
import TorontoClock from "./torontoClock";

const Hero = () => {
  return (
    <div className="relative flex flex-col justify-center items-center text-white text-center">
      <div className="flex flex-col p-4 justify-center items-center h-screen w-full z-1 relative">
        <div className="hidden md:flex absolute top-24 left-10 right-10 justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-white/35">
          <span>zsh — ~/portfolio</span>
          <TorontoClock />
        </div>
        <div className="hidden md:flex absolute bottom-10 left-10 right-10 justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-white/35">
          <span>43.65°N 79.38°W</span>
          <span>© 2026</span>
        </div>

        <span className="font-mono text-xs md:text-sm tracking-[0.1em] text-white/50 mb-6">
          <span className="text-term">antonio@portfolio</span>
          <span className="text-white/30">:~$ </span>whoami
        </span>

        <h1 className="font-sans font-medium tracking-tight text-[9vw] md:text-[4.2vw] leading-[1.05] text-white mb-4">
          ANTONIO CONOPIO
          <span
            aria-hidden
            className="term-cursor inline-block w-[0.5em] h-[0.9em] ml-2 -mb-[0.08em] align-baseline bg-term"
          />
        </h1>

        <div className="flex items-center gap-3 font-mono text-sm md:text-base text-white/70 uppercase tracking-[0.2em]">
          <span aria-hidden className="text-term">&gt;</span>
          <RotatingText
            texts={["Software Engineer", "SE Co-op Student", "Web Developer"]}
            mainClassName="text-white overflow-hidden justify-center"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 50, stiffness: 400 }}
            rotationInterval={5000}
          />
        </div>

        <p className="max-w-md text-sm md:text-base font-mono text-white/50 mt-8 leading-relaxed px-6 md:px-0">
          Driven by solving complex challenges and crafting elegant solutions
          that make an impact.
        </p>

        <div className="absolute bottom-8 flex flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-white/30">
          <span>Scroll</span>
          <span className="block w-px h-8 bg-white/30 animate-pulse" />
        </div>
      </div>

      <GridHorizon />
    </div>
  );
};

export default Hero;

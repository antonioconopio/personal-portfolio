import Waves from "./Waves/Waves";
import RotatingText from "./rotateText";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center text-white text-center">
      <div className="bg-gradient-to-b from-black/60 via-black/95 to-black flex flex-col p-4 justify-center items-center h-screen w-full z-1 relative">
        <span className="font-mono text-xs md:text-sm tracking-[0.35em] uppercase text-white/50 mb-6">
          Software Engineer — Guelph, ON
        </span>

        <h1 className="font-bold tracking-tight text-[9vw] md:text-[4.2vw] leading-[1.05] text-white mb-4">
          Antonio Conopio
        </h1>

        <div className="flex items-center gap-3 font-mono text-sm md:text-base text-white/70 uppercase tracking-[0.2em]">
          <span aria-hidden className="inline-block w-6 h-px bg-white/40" />
          <RotatingText
            texts={[
              "Software Engineer",
              "SE Co-op Student",
              "Web Developer",
            ]}
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

        <p className="max-w-md text-sm md:text-base font-mono text-white/40 mt-8 leading-relaxed px-6 md:px-0">
          Driven by solving complex challenges and crafting elegant
          solutions that make an impact.
        </p>

        <div className="absolute bottom-10 flex flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-white/30">
          <span>Scroll</span>
          <span className="block w-px h-8 bg-white/30 animate-pulse" />
        </div>
      </div>

      <Waves
        className=""
        lineColor="#fff"
        backgroundColor="rgba(23, 23, 23, 1)"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
      />
    </div>
  );
};

export default Hero;

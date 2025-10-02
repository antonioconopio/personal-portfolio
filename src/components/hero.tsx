import Waves from "./Waves/Waves";
import RotatingText from "./rotateText";

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

const Hero = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-white text-center">
        <div className="bg-gradient-to-b from-black/60 via-black/90 to-black  flex flex-col p-4 justify-center items-center h-screen w-full z-1 ">
          <h1 className="text-5xl font-semibold text-white opacity-100 z-50 text-center mb-3">
            hey! im antonio
          </h1>
          <RotatingText
            texts={[
              "Software Engineer",
              "Software Engineering Student",
              "Web Developer",
              "Data Analyst",
            ]}
            mainClassName="text-white font-light overflow-hidden  justify-center"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 50, stiffness: 400 }}
            rotationInterval={5000}
          />

          <p className="text-lg font-light mt-4 md:p-0 p-10">
            I am a passionate full stack developer with a focus on building
            responsive and user-friendly web applications.
          </p>
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
    </>
  );
};

export default Hero;

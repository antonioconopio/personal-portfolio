"use client";
import {
  FaLaptopCode,
  FaNetworkWired,
  FaDatabase,
  FaGithub,
  FaCog,
  FaUserGraduate,
} from "react-icons/fa";
import CardSwap, { Card } from "./CardSwap";
import { GlowingEffect } from "./ui/glowing-effect";
import GradientBreak from "./gradientBreak";
import Carousel from "./ui/carousel";

const slideData = [
  {
    title: "kickswitch.",
    button: "Github",
    buttonLink: "https://github.com/antonioconopio/Kick-switch",
    src: "/images/kickswitch.png",
  },
  {
    title: "react job board.",
    button: "Github",
    buttonLink: "https://github.com/antonioconopio/Job-Search-Web-App",
    src: "/images/jobs.png",
  },
  {
    title: "vcard manager.",
    button: "Github",
    buttonLink: ".",
    src: "/images/vcard.png",
  },
  {
    title: "stats can analyzer",
    button: "Github",
    buttonLink: "https://github.com/antonioconopio/Job-Stats-Analyzer",
    src: "/images/statscan.png",
  },
];

const Projects = () => {
  return (
    <div className="mt-0 md:mt-10 p-20 relative " id="about">
      <div className="bg-black relative min-h-[420px] flex md:flex-row md:justify-evenly overflow-hidden items-center h-1/2 text-white text-center p-4 flex-col md:gap-20  gap-30 mb-10 md:pt-20">
        <h1 className="text-5xl font-semibold text-white">who am I.</h1>

        <div className="flex justify-center items-center py-20 pr-15">
          <CardSwap
            cardDistance={80}
            verticalDistance={95}
            delay={5000}
            pauseOnHover={true}
          >
            <Card>
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className="flex flex-row p-1">
                <FaUserGraduate className="m-1" />
                <h3 className="mx-2 text-left">Student</h3>
              </div>

              <hr />
              <div className="p-20">
                <p>
                  Software Engineering Co-op student at the University of
                  Guelph, minoring in Mathematics and specializing in AI, eager
                  to apply knowledge to real-world innovation.
                </p>
              </div>
            </Card>

            <Card>
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className="flex flex-row p-1">
                <FaCog className="m-1" />
                <h3 className="mx-2 text-left">Software Engineer</h3>
              </div>
              <hr />
              <div className="p-20">
                <p>
                  As a Software Engineer, I strive to innovate by building
                  seamless user experiences and robust systems. With experience
                  in front-end, back-end, and API development, I enjoy turning
                  ideas into impactful solutions.
                </p>
              </div>
            </Card>
            <Card>
              <GlowingEffect
                blur={0}
                borderWidth={3}
                spread={80}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className="flex flex-row p-1">
                <FaDatabase className="m-1" />
                <h3 className="mx-2 text-left">Data Scientist</h3>
              </div>
              <hr />
              <div className="p-20">
                <p>
                  Data Scientist focused on building pipelines, transforming raw
                  data into clear visualizations, and uncovering meaningful
                  insights that drive decisions.
                </p>
              </div>
            </Card>
          </CardSwap>
        </div>
      </div>
      <GradientBreak />
      <div className="p-20" id="projects">
        <h1 className="text-5xl font-semibold text-white text-center">
          projects.
        </h1>
        <div className="relative overflow-hidden w-full h-full py-20">
          <Carousel slides={slideData} />
        </div>
        <div className=" flex md:flex-row justify-center md:gap-10 items-center h-1/2 text-white text-center p-4 flex-col gap-4"></div>
      </div>
      <GradientBreak />
    </div>
  );
};

export default Projects;

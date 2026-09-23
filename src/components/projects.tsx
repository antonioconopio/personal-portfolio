"use client";
import { FaGithub, FaCog, FaUserGraduate } from "react-icons/fa";
import {
  FiGitBranch,
  FiHome,
  FiTrendingUp,
  FiPlay,
  FiLock,
} from "react-icons/fi";
import CardSwap, { Card } from "./CardSwap";
import { GlowingEffect } from "./ui/glowing-effect";
import GradientBreak from "./gradientBreak";

const galleryProjects = [
  {
    index: "01",
    title: "Orion",
    icon: FiGitBranch,
    description:
      "A distributed DAG workflow orchestration platform with a real-time dashboard for scheduling and monitoring job pipelines. A Go WebSocket hub broadcasts live task status, backed by a Redis Streams consumer architecture for fault-tolerant, horizontally scalable Python workers.",
    tech: [
      "React",
      "TypeScript",
      "Redux",
      "Go",
      "Python",
      "PostgreSQL",
      "Redis",
      "WebSockets",
      "Docker",
      "Kubernetes",
    ],
    githubLink: "https://github.com/antonioconopio/orion",
  },
  {
    index: "02",
    title: "HomeHero",
    icon: FiHome,
    description:
      "A full-stack household management app for organizing tasks, shopping lists, expenses, and shared home data. A SwiftUI frontend built with The Composable Architecture manages complex state and side effects, backed by a Spring Boot REST API with secure multi-user sync.",
    tech: ["SwiftUI", "Spring Boot", "Supabase", "TCA"],
    githubLink: "https://github.com/antonioconopio/HomeHero",
    demoLink: "https://www.youtube.com/watch?v=RBNCvZ8_JRM",
  },
  {
    index: "03",
    title: "HistoryHaven",
    icon: FiTrendingUp,
    description:
      "A full-stack analytics platform visualizing 19th-century Old Bailey court records, letting users filter, compare, and forecast crime trends across 130k+ cases from 1834–1913. A scikit-learn model with polynomial features generates leverage-based confidence intervals.",
    tech: [
      "React",
      "JavaScript",
      "Python",
      "FastAPI",
      "scikit-learn",
      "pandas",
      "Vite",
    ],
    githubLink: null,
  },
];

const Projects = () => {
  return (
    <div className="mt-0 md:mt-10 md:p-20 p-0 relative " id="about">
      <div className="bg-black relative min-h-[420px] flex md:flex-row md:justify-evenly overflow-hidden items-center h-1/2 text-white text-center p-4 flex-col md:gap-20  gap-30 mb-10 md:pt-20">
        <div>
          <span className="block font-mono text-xs tracking-[0.3em] text-white/40 mb-3">
            01 &mdash;
          </span>
          <h1 className="font-sans font-medium  tracking-tight text-5xl text-white">
            who am I.
          </h1>
        </div>

        <div className="flex justify-center items-center py-20 pr-15">
          <CardSwap
            cardDistance={80}
            verticalDistance={95}
            delay={5000}
            pauseOnHover={true}
          >
            <Card>
              <GlowingEffect
                variant="white"
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className="flex flex-row p-1">
                <FaUserGraduate className="m-1" />
                <h3 className="mx-2 text-left font-mono text-sm uppercase tracking-widest">
                  Student
                </h3>
              </div>

              <hr className="border-white/15" />
              <div className="p-20">
                <p className="font-mono text-sm text-white/60 leading-relaxed">
                  Software Engineering Co-op student at the University of
                  Guelph, minoring in Mathematics and specializing in AI, eager
                  to apply knowledge to real-world innovation.
                </p>
              </div>
            </Card>

            <Card>
              <GlowingEffect
                variant="white"
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className="flex flex-row p-1">
                <FaCog className="m-1" />
                <h3 className="mx-2 text-left font-mono text-sm uppercase tracking-widest">
                  Software Engineer
                </h3>
              </div>
              <hr className="border-white/15" />
              <div className="p-20">
                <p className="font-mono text-sm text-white/60 leading-relaxed">
                  As a Software Engineer, I strive to innovate by building
                  seamless user experiences and robust systems. With experience
                  in front-end, back-end, and API development, I enjoy turning
                  ideas into impactful solutions.
                </p>
              </div>
            </Card>
          </CardSwap>
        </div>
      </div>
      <GradientBreak />
      <div className="md:p-20 p-8 pt-20" id="projects">
        <span className="block font-mono text-xs tracking-[0.3em] text-white/40 mb-3 text-center">
          02 &mdash;
        </span>
        <h1 className="font-sans font-medium tracking-tight text-5xl text-white text-center mb-16">
          projects.
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {galleryProjects.map((project) => (
            <div
              key={project.title}
              className="flex flex-col border border-white/15 hover:border-white/40 transition-colors duration-300 text-left"
            >
              <div className="relative aspect-[4/3] border-b border-white/15 flex items-center justify-center overflow-hidden bg-[repeating-linear-gradient(135deg,transparent,transparent_18px,rgba(255,255,255,0.03)_18px,rgba(255,255,255,0.03)_19px)]">
                <span className="absolute top-3 left-4 font-mono text-xs text-white/30 tracking-widest">
                  {project.index}
                </span>
                <project.icon className="text-white/15 text-6xl" />
              </div>

              <div className="flex flex-col flex-1 p-6">
                <h3 className="font-bold tracking-tight text-xl text-white mb-3">
                  {project.title}
                </h3>
                <p className="font-mono text-xs text-white/50 leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[10px] uppercase tracking-wider border border-white/15 text-white/40 rounded-full px-2 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap items-center gap-3">
                  {project.githubLink ? (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-white border border-white/30 rounded-full px-4 py-2 w-fit transition-colors duration-300 hover:bg-white hover:text-black"
                    >
                      <FaGithub />
                      Github
                    </a>
                  ) : (
                    <span className="inline-flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-white/30 border border-dashed border-white/15 rounded-full px-4 py-2 w-fit">
                      <FiLock />
                      Private &mdash; school project
                    </span>
                  )}

                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-white border border-white/30 rounded-full px-4 py-2 w-fit transition-colors duration-300 hover:bg-white hover:text-black"
                    >
                      <FiPlay />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <GradientBreak />
    </div>
  );
};

export default Projects;

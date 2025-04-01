import SpotlightCard from "./SpotlightCard/SpotlightCard";
import {
  FaLaptopCode,
  FaNetworkWired,
  FaDatabase,
  FaGithub,
} from "react-icons/fa"; // Example icons
import { GiRunningShoe } from "react-icons/gi";
import { RiContactsBookFill } from "react-icons/ri";
import { MdBusinessCenter } from "react-icons/md";

const Projects = () => {
  return (
    <div className="mt-0 md:mt-10">
      <div className="bg-neutral-950 flex md:flex-row justify-center md:gap-10 items-center h-1/2 text-white text-center p-4 flex-col gap-4">
        <h1 className="text-5xl font-semibold ">Who am I?</h1>

        <SpotlightCard
          className="custom-spotlight-card h-75 w-75"
          spotlightColor="rgba(255, 255, 255, 0.2)">
          <div className="flex flex-col items-center">
            <FaLaptopCode size={50} color="#fff" />
            <h3 className="mt-2 text-white text-xl font-semibold">
              Software Engineering Student
            </h3>
          </div>
          <p className="text-white mt-4">
            I am currently pursuing a degree in Software Engineering, focusing
            on building robust software systems.
          </p>
        </SpotlightCard>

        <SpotlightCard
          className="custom-spotlight-card h-75 w-75"
          spotlightColor="rgba(255, 255, 255, 0.2)">
          <div className="flex flex-col items-center">
            <FaNetworkWired size={50} color="#fff" />
            <h3 className="mt-2 text-white text-xl font-semibold">
              Web Developer
            </h3>
          </div>
          <p className="text-white mt-4">
            I specialize in building responsive, user-friendly web applications
            with modern technologies like React, Tailwind CSS, and Node.js.
          </p>
        </SpotlightCard>

        <SpotlightCard
          className="custom-spotlight-card h-75 w-75"
          spotlightColor="rgba(255, 255, 255, 0.2)">
          <div className="flex flex-col items-center">
            <FaDatabase size={50} color="#fff" />
            <h3 className="mt-2 text-white text-xl font-semibold">
              Data Analyst
            </h3>
          </div>
          <p className="text-white mt-4">
            I am passionate about analyzing data and finding meaningful
            insights, using tools like Python, SQL, and Excel.
          </p>
        </SpotlightCard>
      </div>

      <hr className="border-t border-2 border-neutral-900 my-4 w-[90%] mx-auto" />

      <div className="p-20" id="projects">
        <h1 className="text-2xl font-semibold text-white">Projects</h1>
        <div className="bg-neutral-950 flex md:flex-row justify-center md:gap-10 items-center h-1/2 text-white text-center p-4 flex-col gap-4">
          <SpotlightCard
            className="custom-spotlight-card w-full md:w-[350px] h-[500px] bg-gradient-to-b from-black/60 to-neutral-900"
            spotlightColor="rgba(255, 255, 255, 0.2)">
            <div className="flex flex-col p-4 space-y-3 h-full">
              <div className="flex items-center space-x-2">
                <div className="bg-neutral-800 p-2 rounded-full">
                  <i className="text-white text-xl">
                    <GiRunningShoe />
                  </i>
                </div>
                <h3 className="text-white text-lg font-semibold">KickSwitch</h3>
                <p className="text-sm text-gray-400">- in progress</p>
              </div>

              <div className="w-full h-32 bg-gray-500 rounded-md">
                <img
                  src="/images/kickswitch.png"
                  alt="Project Screenshot"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>

              <p className="text-white text-sm flex-grow">
                KickSwitch is a modern sneaker marketplace where users can buy,
                sell, and trade sneakers. Built with React, Tailwind CSS,
                Express.js, and MySQL, it features authentication, messaging,
                and a sleek black-and-white UI.
              </p>

              <a
                href="https://github.com/yourusername/yourproject"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-gray-800 hover:bg-gray-700 py-2 px-4 rounded-md flex items-center space-x-2">
                <FaGithub size={20} />
                <span>View on GitHub</span>
              </a>
            </div>
          </SpotlightCard>

          <SpotlightCard
            className="custom-spotlight-card w-full md:w-[350px] h-[500px] bg-gradient-to-b from-black/60 to-neutral-900"
            spotlightColor="rgba(255, 255, 255, 0.2)">
            <div className="flex flex-col p-4 space-y-3 h-full">
              <div className="flex items-center space-x-2">
                <div className="bg-neutral-800 p-2 rounded-full">
                  <i className="text-white text-xl">
                    <RiContactsBookFill />
                  </i>
                </div>
                <h3 className="text-white text-lg font-semibold">
                  VCard Manager
                </h3>
              </div>

              <div className="w-full h-32 bg-gray-500 rounded-md">
                <img
                  src="/images/vcard.png"
                  alt="Project Screenshot"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>

              <p className="text-white text-sm flex-grow">
                A digital business card manager built in C, integrating Python
                function wrappers and SQL for structured database management. It
                allows users to store, search, and organize professional
                contacts efficiently.
              </p>

              <a
                href="https://github.com/yourusername/yourproject"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-gray-800 hover:bg-gray-700 py-2 px-4 rounded-md flex items-center space-x-2">
                <FaGithub size={20} />
                <span>View on GitHub</span>
              </a>
            </div>
          </SpotlightCard>

          <SpotlightCard
            className="custom-spotlight-card w-full md:w-[350px] h-[500px] bg-gradient-to-b from-black/60 to-neutral-900"
            spotlightColor="rgba(255, 255, 255, 0.2)">
            <div className="flex flex-col p-4 space-y-3 h-full">
              <div className="flex items-center space-x-2">
                <div className="bg-neutral-800 p-2 rounded-full">
                  <i className="text-white text-xl">
                    <MdBusinessCenter />
                  </i>
                </div>
                <h3 className="text-white text-lg font-semibold">
                  Job Search App
                </h3>
              </div>

              <div className="w-full h-32 bg-gray-500 rounded-md">
                <img
                  src="/images/jobs.png"
                  alt="Project Screenshot"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>

              <p className="text-white text-sm flex-grow">
                A simple CRUD web app that lets users post, edit, and delete job
                listings. Built using React and Express.js, it offers a
                lightweight job tracking solution with a clean UI.
              </p>

              <a
                href="https://github.com/yourusername/yourproject"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-gray-800 hover:bg-gray-700 py-2 px-4 rounded-md flex items-center space-x-2">
                <FaGithub size={20} />
                <span>View on GitHub</span>
              </a>
            </div>
          </SpotlightCard>
        </div>
      </div>

      <hr className="border-t border-2 border-neutral-900 my-4 w-[90%] mx-auto" />
    </div>
  );
};

export default Projects;

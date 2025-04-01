import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center h-24 bg-neutral-950 text-white text-center">
      <div className="flex space-x-6 text-2xl">
        <a
          href="https://github.com/antonioconopio"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition">
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/antonio-conopio-b03918226"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition">
          <FaLinkedin />
        </a>
      </div>
      <p className="text-sm mt-2">
        &copy; {new Date().getFullYear()} Antonio Conopio. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

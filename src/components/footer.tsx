import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-4 py-10 bg-black text-white text-center border-t border-white/10">
      <div className="flex space-x-6 text-xl text-white/60">
        <a
          href="https://github.com/antonioconopio"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/antonio-conopio-b03918226"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          <FaLinkedin />
        </a>
      </div>
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/30">
        &copy; {new Date().getFullYear()} Antonio Conopio
      </p>
    </footer>
  );
};

export default Footer;

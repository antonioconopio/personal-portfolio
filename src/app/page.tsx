import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import TechnologiesMarquee from "@/components/tech";
import { Toaster } from "sonner";

const page = () => {
  return (
    <>
      <Toaster richColors position="top-right" />
      <Navbar />
      <Hero />
      <TechnologiesMarquee />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default page;

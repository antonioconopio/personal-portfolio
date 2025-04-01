import Link from "next/link";
import GooeyNav from "./GooeyNav";
import { div } from "three/tsl";

const items = [
  { label: "about", href: "#" },
  { label: "projects", href: "#projects" },
  { label: "contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-24 bg-transparent flex justify-center items-center z-50">
      <div className="flex justify-center items-center w-max bg-black/50 p-4 text-white overflow-clip rounded-full ">
        <GooeyNav
          items={items}
          animationTime={600}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          timeVariance={300}
        />
      </div>
    </div>
  );
};

export default Navbar;

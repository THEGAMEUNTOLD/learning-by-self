import { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeContext";
import Nav2 from "./Nav2";

const Navbar = () => {
  const { theme } = useContext(ThemeDataContext);

  return (
    <nav
      className={`w-full px-6 py-4 flex items-center justify-between transition-all
      ${theme === "light" ? "bg-teal-500 text-black" : "bg-gray-900 text-white"}`}
    >
      <h1 className="text-2xl font-bold tracking-wide">
        THEGAMEUNTOLD 
      </h1>
      <Nav2 />
    </nav>
  );
};

export default Navbar;

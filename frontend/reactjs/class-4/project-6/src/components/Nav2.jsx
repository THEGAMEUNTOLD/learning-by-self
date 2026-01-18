import { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeContext";

const Nav2 = () => {
  const { theme } = useContext(ThemeDataContext);

  return (
    <div className="flex gap-8 items-center text-sm font-medium">
      {["Home", "About", "Services", "Contact"].map(item => (
        <span
          key={item}
          className="cursor-pointer hover:opacity-80 transition"
        >
          {item}
        </span>
      ))}

      <span
        className={`px-3 py-1 rounded-full text-xs
        ${theme === "light"
          ? "bg-white text-black"
          : "bg-gray-700 text-white"}`}
      >
        {theme.toUpperCase()}
      </span>
    </div>
  );
};

export default Nav2;

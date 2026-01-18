import { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeContext";

const Button = () => {
  const { toggleTheme } = useContext(ThemeDataContext);

  return (
    <div className="flex justify-center mt-10">
      <button
        onClick={toggleTheme}
        className="px-6 py-3 rounded-xl bg-black text-white
        hover:scale-105 active:scale-95 transition-all shadow-lg"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default Button;

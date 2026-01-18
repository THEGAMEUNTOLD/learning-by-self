import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    `px-4 py-2 rounded-lg transition-all duration-300 
     ${isActive ? "bg-blue-600 text-white" : "text-gray-300 hover:text-white hover:bg-zinc-800"}`;

  return (
    <nav className="w-full bg-zinc-900 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-500">
          Sheryians
        </h1>

        <div className="flex gap-2">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          <NavLink to="/product" className={linkClass}>Product</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

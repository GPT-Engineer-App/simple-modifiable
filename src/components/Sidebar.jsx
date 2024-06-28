import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white h-full">
      <div className="p-4">
        <div className="text-lg font-bold mb-4">Your Company</div>
        <nav className="space-y-2">
          <Link to="/" className="block py-2 px-4 hover:bg-gray-700 rounded">Home</Link>
          <Link to="/about" className="block py-2 px-4 hover:bg-gray-700 rounded">About</Link>
          <Link to="/contact" className="block py-2 px-4 hover:bg-gray-700 rounded">Contact</Link>
          <Link to="/privacy" className="block py-2 px-4 hover:bg-gray-700 rounded">Privacy Policy</Link>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
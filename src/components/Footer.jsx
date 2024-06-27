import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
        <nav className="mt-2">
          <a href="/about" className="mx-2">About</a>
          <a href="/contact" className="mx-2">Contact</a>
          <a href="/privacy" className="mx-2">Privacy Policy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
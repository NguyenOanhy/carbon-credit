import React, { useEffect, useState } from "react";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-600 hover:text-green-700 transition duration-300">
          Carbon4U
        </h1>
        <nav className="flex space-x-6">
          <a
            href="#features"
            className="relative text-gray-700 hover:text-green-600 transition duration-300"
          >
            Features
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </a>
          <a
            href="#how-it-works"
            className="relative text-gray-700 hover:text-green-600 transition duration-300"
          >
            How It Works
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </a>
          <a
            href="#about"
            className="relative text-gray-700 hover:text-green-600 transition duration-300"
          >
            About
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </a>
          <a
            href="#contact"
            className="relative text-gray-700 hover:text-green-600 transition duration-300"
          >
            Contact
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;

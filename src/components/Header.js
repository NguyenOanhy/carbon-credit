import React from "react";

function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-600">Carbon Credit App</h1>
        <nav>
          <a href="#features" className="mx-4 text-gray-700 hover:text-green-600">Features</a>
          <a href="#how-it-works" className="mx-4 text-gray-700 hover:text-green-600">How It Works</a>
          <a href="#contact" className="mx-4 text-gray-700 hover:text-green-600">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;

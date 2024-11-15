import React from "react";

function HeroSection() {
  return (
    <section
      className="relative bg-gray-800 text-white h-screen flex items-center justify-center py-20 overflow-hidden"
      style={{
        backgroundImage: `url("/carbon-credit.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background overlay with animated gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-transparent to-blue-500 opacity-20 animate-gradient-move"></div>
      <div className="absolute inset-0 bg-gray-900 opacity-70"></div>

      <div className="relative z-10 container mx-auto text-center px-4">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
          Giao dịch tín chỉ carbon dễ dàng
        </h2>
        <p className="mb-12 text-lg md:text-xl animate-fade-in delay-200">
          Giúp người nông dân và doanh nghiệp cùng phát triển bền vững qua việc trao đổi tín chỉ carbon.
        </p>
        <a
          href="#features"
          className="bg-green-600 text-white font-semibold py-4 px-10 rounded-full shadow-lg hover:bg-green-700 transition duration-300 transform hover:scale-105 hover:shadow-xl animate-pulse"
        >
          Khám phá ngay
        </a>
      </div>

      {/* Floating particles for blockchain effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-20 animate-float"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 5}s`,
            }}
          ></div>
        ))}
      </div>
    </section>
  );
}

export default HeroSection;

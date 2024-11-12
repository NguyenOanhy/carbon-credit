import React from "react";

function HeroSection() {
  return (
    <section
      className="relative bg-gray-800 text-white h-screen flex items-center justify-center py-20"
      style={{
        backgroundImage: `url("/carbon-credit.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gray-900 opacity-70"></div>

      <div className="relative z-10 container mx-auto text-center px-4">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">Giao dịch tín chỉ carbon dễ dàng</h2>
        <p className="mb-12 text-lg md:text-xl">
          Giúp người nông dân và doanh nghiệp cùng phát triển bền vững qua việc trao đổi tín chỉ carbon.
        </p>
        <a
          href="#features"
          className="bg-green-600 text-white font-semibold py-4 px-10 rounded-full shadow-lg hover:bg-green-700 transition duration-300"
        >
          Khám phá ngay
        </a>
      </div>
    </section>
  );
}

export default HeroSection;

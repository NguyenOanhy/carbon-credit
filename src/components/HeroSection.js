import React from "react";

function HeroSection() {
  return (
    <section className="bg-green-600 text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Giao dịch tín chỉ carbon dễ dàng</h2>
        <p className="mb-8 text-lg">
          Giúp người nông dân và doanh nghiệp cùng phát triển bền vững qua việc trao đổi tín chỉ carbon.
        </p>
        <a
          href="#features"
          className="bg-white text-green-600 font-semibold py-3 px-6 rounded-full shadow-md hover:bg-gray-100"
        >
          Khám phá ngay
        </a>
      </div>
    </section>
  );
}

export default HeroSection;


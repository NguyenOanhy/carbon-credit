import React, { useEffect, useState } from "react";
import { UserAddIcon, BadgeCheckIcon, ShoppingCartIcon } from "@heroicons/react/outline";

function HowItWorks() {
  const [treesRegistered, setTreesRegistered] = useState(1000);
  const [creditsIssued, setCreditsIssued] = useState(200);
  const [creditsTraded, setCreditsTraded] = useState(50);

  useEffect(() => {
    // Update numbers periodically to simulate a live counter effect
    const interval = setInterval(() => {
      setTreesRegistered(prev => prev + Math.floor(Math.random() * 5));
      setCreditsIssued(prev => prev + Math.floor(Math.random() * 2));
      setCreditsTraded(prev => prev + Math.floor(Math.random() * 3));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="how-it-works" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      <div className="container mx-auto text-center px-4">
        <h3 className="text-3xl font-bold mb-12 text-green-400 animate-fade-in">Cách thức hoạt động</h3>

        {/* Metrics Section */}
        <div className="flex justify-center space-x-8 mb-12">
          <div className="text-center">
            <p className="text-5xl font-bold text-green-500">{treesRegistered}</p>
            <p className="text-gray-300">Cây đã đăng ký</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold text-green-500">{creditsIssued}</p>
            <p className="text-gray-300">Tín chỉ đã phát hành</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold text-green-500">{creditsTraded}</p>
            <p className="text-gray-300">Tín chỉ đã giao dịch</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 group overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <UserAddIcon className="h-12 w-12 mx-auto text-green-400 mb-4 animate-bounce" />
            <h4 className="text-2xl font-semibold mb-4">Đăng ký thông tin cây</h4>
            <p className="text-gray-300">Người nông dân đăng ký cây qua ảnh và thông tin chi tiết.</p>
          </div>

          <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 group overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <BadgeCheckIcon className="h-12 w-12 mx-auto text-green-400 mb-4 animate-bounce" />
            <h4 className="text-2xl font-semibold mb-4">Xác thực và phát hành tín chỉ</h4>
            <p className="text-gray-300">App xác thực thông tin và phát hành tín chỉ carbon cho cây trồng.</p>
          </div>

          <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 group overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <ShoppingCartIcon className="h-12 w-12 mx-auto text-green-400 mb-4 animate-bounce" />
            <h4 className="text-2xl font-semibold mb-4">Mua bán tín chỉ</h4>
            <p className="text-gray-300">Doanh nghiệp có thể mua tín chỉ carbon từ nông dân để đạt chuẩn bền vững.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;

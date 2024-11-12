import React from "react";
import { UserAddIcon, BadgeCheckIcon, ShoppingCartIcon } from "@heroicons/react/outline";

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto text-center px-4">
        <h3 className="text-3xl font-bold mb-12 text-green-700">Cách thức hoạt động</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <UserAddIcon className="h-12 w-12 mx-auto text-green-600 mb-4" />
            <h4 className="text-2xl font-semibold mb-4 text-gray-800">Đăng ký thông tin cây</h4>
            <p className="text-gray-600">Người nông dân đăng ký cây qua ảnh và thông tin chi tiết.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <BadgeCheckIcon className="h-12 w-12 mx-auto text-green-600 mb-4" />
            <h4 className="text-2xl font-semibold mb-4 text-gray-800">Xác thực và phát hành tín chỉ</h4>
            <p className="text-gray-600">App xác thực thông tin và phát hành tín chỉ carbon cho cây trồng.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <ShoppingCartIcon className="h-12 w-12 mx-auto text-green-600 mb-4" />
            <h4 className="text-2xl font-semibold mb-4 text-gray-800">Mua bán tín chỉ</h4>
            <p className="text-gray-600">Doanh nghiệp có thể mua tín chỉ carbon từ nông dân để đạt chuẩn bền vững.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;

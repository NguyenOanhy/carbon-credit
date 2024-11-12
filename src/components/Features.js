import React from "react";
import { CameraIcon, ShieldCheckIcon, CashIcon } from "@heroicons/react/outline";

function Features() {
  return (
    <section id="features" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center px-4">
        <h3 className="text-3xl font-bold mb-12 text-green-700">Tính năng nổi bật</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
            <CameraIcon className="h-12 w-12 mx-auto text-green-600 mb-4" />
            <h4 className="text-2xl font-semibold mb-4 text-gray-800">Đăng ký tín chỉ carbon</h4>
            <p className="text-gray-600">Người dùng có thể đăng ký tín chỉ carbon bằng cách chụp ảnh và gửi thông tin cây.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
            <ShieldCheckIcon className="h-12 w-12 mx-auto text-green-600 mb-4" />
            <h4 className="text-2xl font-semibold mb-4 text-gray-800">Xác thực thực địa</h4>
            <p className="text-gray-600">Nhận sự xác thực từ app để đảm bảo tính xác thực của thông tin.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
            <CashIcon className="h-12 w-12 mx-auto text-green-600 mb-4" />
            <h4 className="text-2xl font-semibold mb-4 text-gray-800">Mua bán tín chỉ carbon</h4>
            <p className="text-gray-600">Doanh nghiệp có thể mua tín chỉ carbon để đạt các tiêu chuẩn phát triển bền vững.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;

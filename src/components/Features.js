import React from "react";
import { CameraIcon, ShieldCheckIcon, CashIcon, ChartBarIcon, BellIcon, ChatIcon, CreditCardIcon } from "@heroicons/react/outline";

function Features() {
  return (
    <section id="features" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      <div className="container mx-auto text-center px-4">
        <h3 className="text-3xl font-bold mb-12 text-green-400 animate-fade-in">Tính năng nổi bật</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature Card Example */}
          <div className="p-6 bg-gray-800 shadow-lg rounded-lg border border-transparent hover:border-green-400 hover:scale-105 transition-transform duration-300 animate-slide-up relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <ShieldCheckIcon className="h-12 w-12 mx-auto text-green-400 mb-4 animate-bounce" />
            <h4 className="text-xl font-semibold mb-2 text-white">eKYC</h4>
            <p className="text-gray-300 text-sm">Quy trình KYC riêng biệt cho cá nhân và tổ chức để đảm bảo tính minh bạch.</p>
          </div>

          {/* Repeat other features with similar animations */}
          <div className="p-6 bg-gray-800 shadow-lg rounded-lg border border-transparent hover:border-green-400 hover:scale-105 transition-transform duration-300 animate-slide-up relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <CameraIcon className="h-12 w-12 mx-auto text-green-400 mb-4 animate-bounce" />
            <h4 className="text-xl font-semibold mb-2 text-white">Đăng ký tín chỉ carbon</h4>
            <p className="text-gray-300 text-sm">Người dùng đăng ký tín chỉ bằng cách gửi thông tin chi tiết cây và tải lên hình ảnh.</p>
          </div>

          <div className="p-6 bg-gray-800 shadow-lg rounded-lg border border-transparent hover:border-green-400 hover:scale-105 transition-transform duration-300 animate-slide-up relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <ShieldCheckIcon className="h-12 w-12 mx-auto text-green-400 mb-4 animate-bounce" />
            <h4 className="text-xl font-semibold mb-2 text-white">Xác thực thực địa</h4>
            <p className="text-gray-300 text-sm">Yêu cầu xác thực thực địa từ nhân viên để xác minh thông tin và địa điểm.</p>
          </div>

          <div className="p-6 bg-gray-800 shadow-lg rounded-lg border border-transparent hover:border-green-400 hover:scale-105 transition-transform duration-300 animate-slide-up relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <CashIcon className="h-12 w-12 mx-auto text-green-400 mb-4 animate-bounce" />
            <h4 className="text-xl font-semibold mb-2 text-white">Mua bán tín chỉ carbon</h4>
            <p className="text-gray-300 text-sm">Người dùng bán tín chỉ đã đăng ký và doanh nghiệp có thể mua tín chỉ từ người dân.</p>
          </div>

          {/* Add remaining features following the same structure */}
          
          <div className="p-6 bg-gray-800 shadow-lg rounded-lg border border-transparent hover:border-green-400 hover:scale-105 transition-transform duration-300 animate-slide-up relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <CreditCardIcon className="h-12 w-12 mx-auto text-green-400 mb-4 animate-bounce" />
            <h4 className="text-xl font-semibold mb-2 text-white">Quản lý ví blockchain</h4>
            <p className="text-gray-300 text-sm">Xem địa chỉ ví và số dư token, minh bạch hoá tín chỉ chuyển đổi thành token.</p>
          </div>

          {/* Notifications and Transactions */}
          <div className="p-6 bg-gray-800 shadow-lg rounded-lg border border-transparent hover:border-green-400 hover:scale-105 transition-transform duration-300 animate-slide-up relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <BellIcon className="h-12 w-12 mx-auto text-green-400 mb-4 animate-bounce" />
            <h4 className="text-xl font-semibold mb-2 text-white">Thông báo và giao dịch</h4>
            <p className="text-gray-300 text-sm">Hiển thị giao dịch và thông báo khi có người mua hoặc đăng ký tín chỉ thành công.</p>
          </div>

          {/* CO2 Reduction Tracking */}
          <div className="p-6 bg-gray-800 shadow-lg rounded-lg border border-transparent hover:border-green-400 hover:scale-105 transition-transform duration-300 animate-slide-up relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <ChartBarIcon className="h-12 w-12 mx-auto text-green-400 mb-4 animate-bounce" />
            <h4 className="text-xl font-semibold mb-2 text-white">Theo dõi lượng CO2 giảm</h4>
            <p className="text-gray-300 text-sm">Hiển thị lượng CO2 giảm thông qua số tín chỉ và số tiền người dùng kiếm được.</p>
          </div>

          {/* Chatbot and FAQ */}
          <div className="p-6 bg-gray-800 shadow-lg rounded-lg border border-transparent hover:border-green-400 hover:scale-105 transition-transform duration-300 animate-slide-up relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <ChatIcon className="h-12 w-12 mx-auto text-green-400 mb-4 animate-bounce" />
            <h4 className="text-xl font-semibold mb-2 text-white">Chatbot và FAQ</h4>
            <p className="text-gray-300 text-sm">Tương tác với chatbot và FAQ để giải đáp thắc mắc nhanh chóng.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;

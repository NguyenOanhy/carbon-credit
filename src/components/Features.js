import React from "react";

function Features() {
  return (
    <section id="features" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold mb-8">Tính năng nổi bật</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h4 className="text-xl font-bold mb-4">Đăng ký tín chỉ carbon</h4>
            <p>Người dùng có thể đăng ký tín chỉ carbon bằng cách chụp ảnh và gửi thông tin cây.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h4 className="text-xl font-bold mb-4">Xác thực thực địa</h4>
            <p>Nhận sự xác thực từ app để đảm bảo tính xác thực của thông tin.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h4 className="text-xl font-bold mb-4">Mua bán tín chỉ carbon</h4>
            <p>Doanh nghiệp có thể mua tín chỉ carbon để đạt các tiêu chuẩn phát triển bền vững.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;

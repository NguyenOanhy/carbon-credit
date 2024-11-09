import React from "react";

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold mb-8">Cách thức hoạt động</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6">
            <h4 className="text-xl font-bold mb-4">1. Đăng ký thông tin cây</h4>
            <p>Người nông dân đăng ký cây qua ảnh và thông tin chi tiết.</p>
          </div>
          <div className="p-6">
            <h4 className="text-xl font-bold mb-4">2. Xác thực và tạo tín chỉ</h4>
            <p>App tiến hành xác thực thông tin và phát hành tín chỉ carbon.</p>
          </div>
          <div className="p-6">
            <h4 className="text-xl font-bold mb-4">3. Mua bán tín chỉ</h4>
            <p>Doanh nghiệp có thể mua tín chỉ để đạt chuẩn bền vững.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;

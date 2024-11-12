import React from "react";

function About() {
  const teamMembers = [
    {
      name: "Member 1",
      role: "Project Manager",
      description: "Chuyên gia quản lý dự án với hơn 5 năm kinh nghiệm trong lĩnh vực carbon credit",
    },
    {
      name: "Member 2",
      role: "Technical Lead",
      description: "Kỹ sư phần mềm với chuyên môn về blockchain và smart contracts",
    },
    {
      name: "Member 3",
      role: "Environmental Specialist",
      description: "Chuyên gia môi trường với kiến thức sâu rộng về carbon footprint",
    },
    {
      name: "Member 4",
      role: "Business Analyst",
      description: "Chuyên gia phân tích kinh doanh với kinh nghiệm trong thị trường carbon",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold text-green-700 mb-8">Đội ngũ của chúng tôi</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-32 h-32 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 text-3xl font-bold">
                  {member.name.charAt(0)}
                </span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h4>
              <h5 className="text-green-600 font-semibold mb-3">{member.role}</h5>
              <p className="text-gray-600">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;

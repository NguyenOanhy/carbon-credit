import React from "react";

function About() {
  const teamMembers = [
    {
      name: "Nguyen Huy Hieu",
      role: "Project Manager",
      image: "/member/hieu.jpg",
    },
    {
      name: "Nguyen Thi Oanh",
      role: "Software Engineer",
      image: "/member/oanh.jpg",
    },
    {
      name: "Do Duc Huy",
      role: "Software Engineer",
      image: "/member/huy.jpg",
    },
    {
      name: "Ngo Phuong Ngoc",
      role: "Business Analyst",
      image: "/member/ngoc.jpg",
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
              <div className="w-32 h-32 mx-auto mb-6 bg-green-100 rounded-full overflow-hidden">
                {member.image ? (
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                ) : null}
                <div 
                  className="w-full h-full flex items-center justify-center"
                  style={{ display: member.image ? 'none' : 'flex' }}
                >
                  <span className="text-green-600 text-3xl font-bold">
                    {member.name.charAt(0)}
                  </span>
                </div>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h4>
              <h5 className="text-green-600 font-semibold mb-3">{member.role}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;

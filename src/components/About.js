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
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold text-green-400 mb-8 animate-fade-in">
          Đội ngũ của chúng tôi
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
            >
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden relative group-hover:scale-110 transition-transform duration-300">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                ) : null}
                <div
                  className={`w-full h-full flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500
                  ${member.image ? "hidden" : "flex"} rounded-full text-3xl font-bold text-white`}
                >
                  {member.name.charAt(0)}
                </div>
              </div>
              <h4 className="text-xl font-bold text-gray-100 mb-2">{member.name}</h4>
              <h5 className="text-green-400 font-semibold mb-3 animate-pulse">{member.role}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;

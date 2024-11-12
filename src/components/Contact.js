import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message });
  };

  return (
    <section
      id="contact"
      className="py-20 bg-cover bg-center"
      style={{
        backgroundImage: "url('/bg.jpg')", // Đặt ảnh nền của bạn tại đây
      }}
    >
      <div className="container mx-auto px-4 flex items-center justify-end">
        <div className="w-full max-w-lg">
          <form
            onSubmit={handleSubmit}
            className="bg-white bg-opacity-0 p-8 rounded-lg  border-white"
          >
            <div className="mb-6">
              <input
                type="text"
                className="w-full p-3 border border-white rounded-lg bg-white bg-opacity-50 text-white placeholder-white"
                placeholder="Họ tên"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <input
                type="email"
                className="w-full p-3 border border-white rounded-lg bg-white bg-opacity-50 text-white placeholder-white"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <textarea
                className="w-full p-3 border border-white rounded-lg bg-white bg-opacity-50 text-white placeholder-white"
                placeholder="Tin nhắn"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full p-3 border-2 border-white rounded-md bg-white bg-opacity-50 text-white hover:bg-opacity-70 transition duration-300"
            >
              Gửi đi
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;

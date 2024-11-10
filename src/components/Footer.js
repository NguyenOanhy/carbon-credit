import React from "react";

function Footer() {
  return (
    <footer id="contact" className="bg-green-600 text-white py-10">
      <div className="container mx-auto text-center">
        <p className="mb-4">Liên hệ với chúng tôi: info@carboncreditapp.com</p>
        <p>&copy; {new Date().getFullYear()} Carbon Credit App. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
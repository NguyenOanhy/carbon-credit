import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto text-center">
        <p className="mb-4 text-lg font-medium">
          Liên hệ với chúng tôi:{" "}
          <a
            href="mailto:info@carboncreditapp.com"
            className="text-green-500 hover:text-green-400 transition duration-300"
          >
            info@carboncreditapp.com
          </a>
        </p>
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transform hover:scale-110 transition duration-300"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transform hover:scale-110 transition duration-300"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-600 transform hover:scale-110 transition duration-300"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-500 transform hover:scale-110 transition duration-300"
          >
            <FaInstagram size={24} />
          </a>
        </div>
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Carbon Credit App. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

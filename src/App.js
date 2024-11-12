import React from "react";
import Header from "./components/Header.js";
import HeroSection from "./components/HeroSection.js";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact.js";
function App() {
  return (
    <div className="bg-gray-100 text-gray-900">
      <Header />
      <HeroSection />
      <Features />
      <HowItWorks />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

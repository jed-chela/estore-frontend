import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Services from "../Components/Services";
import Contact from "../Components/Contact";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Contact />
    </div>
  );
};

export default Home;

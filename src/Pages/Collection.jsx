import React from "react";
import Navbar from "../Components/Navbar";
import Contact from "../Components/Contact";
import AwyetuCollection from "../Components/AwyetuCollection";
import NavToggle from "../Components/NavToggle";

const Collection = () => {
  return (
    <div>
      <NavToggle />
      <Navbar />
      <AwyetuCollection />
      <Contact />
    </div>
  );
};

export default Collection;

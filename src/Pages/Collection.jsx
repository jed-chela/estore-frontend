import React from "react";
import Navbar from "../Components/Navbar";
import Contact from "../Components/Contact";
import Product from "../Components/Products/Product";
import AwyetuCollection from "../Components/AwyetuCollection";
import Sidebar from "../Components/Sidebar";
import NavToggle from "../Components/NavToggle";

const Collection = () => {
  return (
    <div>
      <NavToggle />
      <Sidebar />
      <Navbar />
      <Product />
      <AwyetuCollection />
      <Contact />
    
    </div>
  );
};

export default Collection;

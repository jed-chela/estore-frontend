import React from "react";
import Navbar from "../Components/Navbar";
import Contact from "../Components/Contact";
import Product from "../Components/Products/Product";
import AwyetuCollection from "../Components/AwyetuCollection";
import Sidebar from "../Components/Sidebar";

const Collection = () => {
  return (
    <div>
      <Sidebar />
      <Navbar />
      <Product />
      <AwyetuCollection />
      <Contact />
    
    </div>
  );
};

export default Collection;

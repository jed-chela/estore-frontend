import React from "react";
import image1 from "../assets/productImage/image 1.png";
import image2 from "../assets/productImage/image 6.png";


{
  /**Service List Section */
}
const Services = () => {
  return (
    <div className="h[100%] bg-white">
      <div className="py-[10px] px-[20px] flex items-center justify-between text-center">
        
      </div>
      

      {/**Service Card Section */}
      <div className=" object-cover">
        <div className=" flex items-center justify-center m-2 mt-8 text-center">
          <div className="p-2 ">
            <img  src={image2} alt="" />
            <p> SAFARI</p>
          </div>
          <div className="p-2">
            <img  src={image1} alt="" />
            <p className="absolute top-0 left-0">KAFTAN</p>
          </div>
         
          
        </div>
      </div>
    </div>
  );
};

export default Services;

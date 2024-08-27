import React from "react";
import image1 from "../assets/productImage/image 1.png";
import image2 from "../assets/productImage/image 6.png";

{
  /**Service List Section */
}
const Services = () => {
  return (
    <div className="h[100%] bg-white">
      {/**Service Card Section */}
      <div className=" object-cover">
        <div className=" flex items-center justify-center  mt-8 text-center">
          <a href="/collection">
            <div className="ml-[20px] ">
              <img src={image1} alt="" />
            </div>
          </a>
          <div className="absolute font-medium text-5xl flex top-50 left-[20%]  text-white">
              <a href="/collection">SAFARI</a>
            </div>{" "}

          <a href="/collection">
            <div className="ml-[20px]">
              <img src={image2} alt="" />
            </div>
            
          </a>
          <div className="absolute font-medium text-5xl flex top-50 right-[20%]  text-white">
             <a href="/collection"> KAFTAN</a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

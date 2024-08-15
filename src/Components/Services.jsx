import React from "react";
import { GiSewingMachine } from "react-icons/gi";
import { PiFireSimpleLight } from "react-icons/pi";
import { RiShieldLine } from "react-icons/ri";
import { TbTagStarred } from "react-icons/tb";
import { GiStarGate } from "react-icons/gi";
import image1 from "../assets/Group 22.png";
import image2 from "../assets/Group 23.png";
import image3 from "../assets/Group 24.png";
import image4 from "../assets/Group 25.png";

{
  /**Service List Section */
}
const Services = () => {
  return (
    <div className="h[100%] bg-white">
      <div className="py-[10px] px-[20px] flex items-center justify-between m-2 mt-8 text-center">
        <div className=" flex flex-row font-bold text-2xl p-2 mr-8">
          <h1 className="text-[30px]">MEN'S FASHION</h1>
        </div>

        <div className="flex-1 ">
          <div className="flex justify-center items-center text-[30px]">
            <PiFireSimpleLight />
          </div>
          <h1 className="font-bold">Awyetu Collections</h1>
          <p>Stay fashionable with our lastest styles</p>
        </div>

        <div className="flex-1">
          <div className="flex justify-center items-center text-[30px]">
            <GiSewingMachine />
          </div>

          <h1 className="font-bold">Expert Craftsmanship</h1>
          <p>Each piece is meticulously handcrasfted to perfection</p>
        </div>

        <div className="flex-1">
          <div className="flex justify-center items-center text-[30px]">
            <RiShieldLine />
          </div>
          <h1 className="font-bold">High-Quality Materials</h1>
          <p>Only the finest materials for exceptional garments</p>
        </div>

        <div className="flex-1">
          <div className="flex justify-center items-center text-[30px]">
            <TbTagStarred />
          </div>
          <h1 className="font-bold">Exclusive Designs</h1>
          <p>Explore our exclusive collections crafted just for you</p>
        </div>

        <div className="flex-1">
          <div className="flex justify-center items-center text-[30px]">
            <GiStarGate />
          </div>
          <h1 className="font-bold">Dedicated Expertise</h1>
          <p>Receive expert guidance tailored to your individual style</p>
        </div>
      </div>
      

      {/**Service Card Section */}
      <div className=" object-cover bg-white">
        <div className=" flex items-center justify-between m-2 mt-8 text-center">
          <div>
            <img src={image2} alt="" />
          </div>
          <div>
            <img src={image1} alt="" />
          </div>
          <div>
            <img src={image3} alt="" />
          </div>
          <div>
            <img src={image4} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

import React from "react";
import pic11 from "../assets/productImage/image 10.png";
import { FaArrowLeftLong } from "react-icons/fa6";
import pic12 from "../assets/productImage/imgcomf.png";
import pic13 from "../assets/productImage/image 3c.png";

const Verifypay = () => {
  return (
    <div className="w-full h-full mb-10 flex ">
      <div className="h-[50px] w-[50%] p-7 ml-[5%] mt-4  ">
        <div className="flex items-center  text-gray-700">
          <FaArrowLeftLong />
          <h1 className="font-medium text-[40px] ml-6 "> Checkout</h1>
        </div>

        <div className=" flex items-center">
          <img src={pic13} alt="" />
        </div>
        <div>
          <img className="h-[350px] mx-auto block" src={pic12} alt="" />
        </div>
        <a href="/Home" className="flex">
          <button
            className="border-2  text-[20px] border-gray-700 w-[420px]
            bg-blue-950 rounded-[15px] h-[45px] mb-4 mx-auto
             text-gray-100 hover:bg-gray-400"
          >
            Go to Home
          </button>
        </a>
        <a href="/collection" className="flex ">
          <button
            className="border-2 text-[20px] border-gray-700 w-[420px]
           bg-green-600 rounded-[15px] mt-4 h-[45px] mx-auto
           text-gray-100 hover:bg-gray-400"
          >
            <a href="/collection">Shop More</a>
          </button>
        </a>
      </div>

      <div className=" ml-[50px] mt-[20px] border-2 rounded-[15px] border-gray-300 w-auto h-auto   ">
        <div className="w-[500px] p-6 text-center font-bold">
          <h1 className="text-gray-800">TRENCH COAT WITH LEATHER COLLAR</h1>
          <p className="text-2xl mt-2 mb-2">N400,000.00</p>
          <img className="h-[500px] mx-auto block" src={pic11} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Verifypay;

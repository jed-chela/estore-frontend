import React from "react";
import pic11 from "../assets/productImage/image 10.png";
import { FaArrowLeftLong } from "react-icons/fa6";
import { TbSquareRotated } from "react-icons/tb";
import pic12 from "../assets/productImage/imgcomf.png";

const Verifypay = () => {
  return (
    <div className="w-full h-full mb-10 flex ">
      <div className="h-[50px] w-[50%] p-7 ml-[5%] mt-4  ">
        <div className="flex items-center  text-gray-700">
          <FaArrowLeftLong />
          <h1 className="font-medium text-[40px] ml-6 "> Checkout</h1>
        </div>

        <div className=" flex items-center">
          <p>
            {" "}
            <TbSquareRotated />1
          </p>
          <p>
            {" "}
            <TbSquareRotated />2
          </p>
          <p>
            {" "}
            <TbSquareRotated />3
          </p>
        </div>
        <div>
          <img className="h-[350px] mx-auto block" src={pic12} alt="" />
        </div>
        <p className="flex">
          <button className="border-2  text-[20px] border-gray-700 w-[420px]  bg-blue-950 rounded-[15px] h-[45px] mb-4 mx-auto text-gray-100">Go to Home</button>
        </p>
        <p className="flex">
          <button className="border-2 text-[20px] border-gray-700 w-[420px] bg-green-600 rounded-[15px] mt-4 h-[45px] mx-auto text-gray-100">Shop More</button>
        </p>
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

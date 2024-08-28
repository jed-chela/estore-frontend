import React from "react";
import pic11 from "../assets/productImage/image 10.png";
import { FaArrowLeftLong } from "react-icons/fa6";
import pic17 from "../assets/productImage/image 3b.png";
import pic14 from "../assets/productImage/Visacard.png";
import pic15 from "../assets/productImage/Mastercard.png";
import pic16 from "../assets/productImage/Vervecard.png";
import { CiCalendar } from "react-icons/ci";
import { HiOutlineLockClosed } from "react-icons/hi";

const Makepay = () => {
  return (
    <div className="w-full h-full flex ">
      <div className="h-[50px] w-[50%] p-5 ml-[5%]  ">
        <div className="flex items-center  text-gray-700">
          <FaArrowLeftLong />
          <h1 className="font-medium text-[40px] ml-6 "> Checkout</h1>
        </div>
        <div className="mb-4 border-b-2 border-gray-200 mt-4 p-4 flex">
          <img className="mx-auto h-[100px] " src={pic17} alt="" />
        </div>
        <div></div>

        <div className="ml-[10%] mr-[10%]">
          <h1 className="underline font-medium text-[20px] mb-2 ">Card Type</h1>
          <div className=" flex items-center justify-between text-gray-900">
            <img className="w-[100px]" src={pic14} alt="" />
            <img className="w-[50px] " src={pic15} alt="" />
            <img className="w-[100px]" src={pic16} alt="" />
          </div>
          <div className="mt-[50px]">
            <h1 className="underline font-medium text-[20px] mb-2">
              {" "}
              Card Holder Name
            </h1>
            <input
              type="text"
              placeholder="Bill Foster"
              className=" h-[35px] p-[20px]
            bg-gray-300 focus:outline-none w-full rounded-md border-none placeholder-gray-600 underline "
            />
          </div>
          <div className="mt-[10px] mb-2">
            <h1 className="underline font-medium text-[20px] mb-2">
              {" "}
              Card Number
            </h1>
            <input
              type="numeric"
              pattern="[0-9]*"
              maxLength="16"
              placeholder="*** *** *** ***"
              className=" h-[35px] p-[20px]
            bg-gray-300 focus:outline-none w-full rounded-md border-none placeholder-gray-600 underline "
            />
          </div>

          <div className="flex justify-between">
            <div className="mt-[10px] mb-2">
              <h1 className="underline font-medium text-[20px] mb-2">
                {" "}
                Expiration Date
              </h1>
              <input
                type="numeric"
                pattern="[0-9]*"
                maxLength="16"
                placeholder="7/16 "
                className=" h-[35px] p-[20px]
            bg-gray-300 focus:outline-none w-50% rounded-md border-none placeholder-gray-600 underline "
              />
            </div>
            <div className="mt-[10px] mb-2">
              <h1 className="underline font-medium text-[20px] mb-2">
                {" "}
                CVV Code
              </h1>
              <input
                type="numeric"
                pattern="[0-9]*"
                maxLength="3"
                placeholder="***"
                className=" h-[35px] p-[20px]
            bg-gray-300 focus:outline-none w-50% rounded-md border-none placeholder-gray-600 underline "
              />
            </div>
          </div>
          <p>
            <input type="checkbox" className="transform scale-150" />
          </p>
          <a href="/verification">
            <button className="border-2 h-[40px] w-full text-gray-100 bg-orange-600 rounded-md p4 underline hover:bg-gray-400">
              PAY 400,000
            </button>
            </a>
          <div className="underline flex justify-center mt-2">
          <HiOutlineLockClosed className="text-3xl mr-4" /> Payments are secured and encrypted
          </div>
         
        </div>
      </div>

      <div className=" ml-[50px] mt-[40px] border-2 rounded-[15px] border-gray-300 w-auto h-auto   ">
        <div className="w-[500px] p-4 text-center font-bold">
          <h1 className="text-gray-800">TRENCH COAT WITH LEATHER COLLAR</h1>
          <p className="text-2xl mt-2 mb-2">N400,000.00</p>
          <img className="h-[500px] mx-auto block" src={pic11} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Makepay;

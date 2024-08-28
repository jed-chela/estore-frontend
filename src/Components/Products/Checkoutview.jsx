import React from "react";
import pics11 from "../../assets/productImage/image 10.png";
import { FaArrowLeftLong } from "react-icons/fa6";
import pic12 from "../../assets/productImage/imgcomf.png";
import pic13 from "../../assets/productImage/image 4c.png";

const Checkoutview = () => {
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
        <h1>Contact Information</h1>

        <div className="flex">
          <div className="mr-[100px]">
            <p className="m-2">First Name</p>
            <input
              type="text"
              className=" h-[35px] p-[20px]
            focus:outline-blue-500 w-full rounded-md border-2 placeholder-gray-600 "
            />
          </div>
          <div>
            <p className="m-2">Last Name</p>
            <input
              type="text"
              className=" h-[35px] p-[20px]
            focus:outline-blue-500 w-full rounded-md border-2 placeholder-gray-600 "
            />
          </div>
        </div>

        <div className="flex mt-6">
          <div className="mr-[100px]">
            <p className="m-2">Email Address</p>
            <input
              type="email"
              className=" h-[35px] p-[20px]
             focus:outline-blue-500 w-full rounded-md border-2 placeholder-gray-600 "
            />
          </div>
          <div>
            <p className="m-2">Phone Number</p>
            <input
              type="number"
              className=" h-[35px] p-[20px] focus:outline-blue-500
             w-full rounded-md border-2 placeholder-gray-600 "
            />
          </div>
        </div>

        <h1 className="mt-6">Delivery Information</h1>
        <div>
          <p className="m-2">Address</p>
          <input
            type="text"
            className=" h-[35px] p-[20px]
            focus:outline-blue-500 w-full rounded-md border-2 placeholder-gray-600 "
          />
        </div>
        <div className="flex justify-between mt-6">
        <div>
          <p className="m-2">City</p>
          <input
            type="text"
            className=" h-[35px] p-[20px]
            focus:outline-blue-500 w-auto rounded-md border-2 placeholder-gray-600 "
          />
        </div>
        <div>
          <p className="m-2">Zip Code</p>
          <input
            type="text"
            className=" h-[35px] p-[20px]
            focus:outline-blue-500 w-auto rounded-md border-2 placeholder-gray-600 "
          />
        </div>
        </div>
        <a href="/payment">
        <button className="border-2 m-6 items-center text-center bg-blue-950 rounded-[8px] text-white text-2xl p-2 w-full">Place Oder</button>
        </a>
      </div>

      <div className=" ml-[50px] mt-[20px] border-2 rounded-[15px] border-gray-300 w-auto h-auto   ">
        <div className="w-[500px] p-6 text-center font-bold">
          <h1 className="text-gray-800">TRENCH COAT WITH LEATHER COLLAR</h1>
          <p className="text-2xl mt-2 mb-2">N400,000.00</p>
          <img className="h-[500px] mx-auto block" src={pics11} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Checkoutview;

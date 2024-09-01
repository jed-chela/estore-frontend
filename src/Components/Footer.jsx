import React from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const Footer = () => {
  return (
    <div className="grid grid-flow-row justify-between md:grid-flow-col" >
      <div className="h-auto bg-white mt-[50px] ml-[20px] ">
        <h1 className="font-medium">Join the Conversation</h1>

        <div className=" border-b-2 border-gray-900 w-[150px] sm:w-[200px] flex">
          <input
            type="text"
            placeholder="EMAIL ADDRESS"
            className="w-[150px] text-[12px] p-2 focus:outline-none hover:border-none focus flex justify-between"
          />
          <div>
            <MdOutlineArrowRightAlt className="text-3xl font-light" />
          </div>
        </div>
      </div>

      <div className="mt-[60px] m-4 md:mt-[80px] sm:mt-4 ">
        <ul className="  md:flex  text-[12px] cursor-pointer ">
          <li className="m-2 hover:text-[15px] hover:m-0 transition-all duration-300 ease-in-out">NIGERIA (NGN)</li>
          <li className="m-2 hover:text-[15px] hover:m-0 transition-all duration-300 ease-in-out">CONTACT</li>
          <li className="m-2 hover:text-[15px] hover:m-0 transition-all duration-300 ease-in-out">CLIENT SERVICES</li>
          <li className="m-2 hover:text-[15px] hover:m-0 transition-all duration-300 ease-in-out">LEGAL NOTICES</li>
          <li className="m-2 hover:text-[15px] hover:m-0 transition-all duration-300 ease-in-out">SOCIAL</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

const Contact = () => {

  return (
    

    <div className="w-auto md:h-auto  md:w-auto md:text-[10px] lg:text-[15px] bg-gray-300">
      <div className="mt-[100px] grid grid-cols-1 py-[10px] text-center px-[20px] md:flex  md:justify-between items-center">
        <div className="flex-1">
          <h1 className=" font-bold  text-[15px] md:text-[20px] mb-2">Contact Us</h1>
          <p className=" text-gray-600 mb-2">Email: info@luxurybespoke.com</p>
          <p className=" text-gray-600 mb-2">Phone: +234-809-123-4567</p>
        </div>

        <div className="flex-1 mt-6">
          <h1 className=" font-bold text-[15px]  md:text-[20px] mb-2">Customer Service</h1>
          <p className="hover:scale-110 transition-transform duration-300 hover:text-[#092c3f]  text-gray-600 mb-2">
            <a href="">FAQs</a>
          </p>
          <p className="hover:scale-110 transition-transform duration-300 hover:text-[#092c3f]  text-gray-600 mb-2">
            <a href="">Privacy Policy</a>
          </p>
          <p className="hover:scale-110 transition-transform duration-300 hover:text-[#092c3f]  text-gray-600 mb-2">
            <a href="">Terms of Service</a>
          </p>
        </div>

        <div className="flex-1 mt-6">
          <h1 className=" font-bold text-[15px]  md:text-[20px] mb-2 ">About Us</h1>
          <p className="hover:scale-110 transition-transform duration-300 hover:text-[#092c3f]  text-gray-600 mb-2">
            <a href="">Our Story</a>
          </p>
          <p className="hover:scale-110 transition-transform duration-300 hover:text-[#092c3f]  text-gray-600 mb-2">
            <a href="">Craftsmanship</a>
          </p>
          <p className="hover:scale-110 transition-transform duration-300 hover:text-[#092c3f]  text-gray-600 mb-2">
            <a href="">Bespoke Services</a>
          </p>
        </div>

        <div className="flex-1 mt-6">
          <h1 className="font-bold text-[15px] md:text-[20px]  mb-2">Follow Us</h1>
          <p className=" items-center align-middle hover:scale-110 transition-transform duration-300 text-gray-600 mb-2">
            <a href="" className="flex items-center justify-center">
            <FaFacebook className="  mr-2 " />Facebook</a>
          </p>
          <p className=" text-gray-600 hover:scale-110 transition-transform duration-300 hover:text-[#092c3f] mb-2">
            <a href="" className="flex items-center justify-center">
            <FaSquareInstagram className="  mr-2 " /> Instagram</a>
          </p>
          <p className=" text-gray-600 hover:scale-110 transition-transform duration-300 hover:text-[#092c3f] mb-2">
            <a href=""className="flex items-center justify-center  transition duration-300 ease-in-out">
            <FaXTwitter className="  mr-2 " />Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

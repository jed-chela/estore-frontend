import React from "react";

const Contact = () => {
  return (
    <div className="w-auto md:h-[200px] md:w-full bg-white">
      <div className="py-[10px] px-[20px] flex  justify-between items-center">
        <div className="flex-1">
          <h1 className="font-bold text-[20px] mb-2">Contact Us</h1>
          <p className=" text-gray-400 mb-2">Email: info@luxurybespoke.com</p>
          <p className=" text-gray-400 mb-2">Phone: +234-809-123-4567</p>
        </div>

        <div className="flex-1">
          <h1 className="font-bold text-[20px] mb-2">Customer Service</h1>
          <p className=" text-gray-400 mb-2">
            <a href="">FAQs</a>
          </p>
          <p className=" text-gray-400 mb-2">
            <a href="">Privacy Policy</a>
          </p>
          <p className=" text-gray-400 mb-2">
            <a href="">Terms of Service</a>
          </p>
        </div>

        <div className="flex-1">
          <h1 className="font-bold text-[20px] mb-2 ">About Us</h1>
          <p className=" text-gray-400 mb-2">
            <a href="">Our Story</a>
          </p>
          <p className=" text-gray-400 mb-2">
            <a href="">Craftsmanship</a>
          </p>
          <p className=" text-gray-400 mb-2">
            <a href="">Bespoke Services</a>
          </p>
        </div>

        <div className="flex-1">
          <h1 className="font-bold text-[20px] mb-2">Follow Us</h1>
          <p className=" text-gray-400 mb-2">
            <a href="">Facebook</a>
          </p>
          <p className=" text-gray-400 mb-2">
            <a href="">Instagram</a>
          </p>
          <p className=" text-gray-400 mb-2">
            <a href="">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

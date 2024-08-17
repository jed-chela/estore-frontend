import React from "react";
import { GoChevronUp } from "react-icons/go";
import Availabilty from "./Availabilty";
import OutOfStock from "./OutOfStock";
import AvailabilityToggle from "./Products/AvailabilityToggle";
import CategoryToggle from "./Products/CategoryToggle";

const Sidebar = () => {
  return (
    <div className="w-[22%] h-[85%] fixed top-0 left-0 mt-[10%] p-4 ">
      <div className="ml-2">
        <h3 className="font-bold text-[20px] mb-6">Filters</h3>
        <p className="font-bold mb-2">Size</p>
        <div className="flex justify-between">
          <button className=" w-10 border border-gray-400 p-1 mr-1">XS</button>
          <button className=" w-10 border border-gray-400 p-1 mr-1">S</button>
          <button className=" w-10 border border-gray-400 p-1 mr-1">M</button>
          <button className=" w-10 border border-gray-400 p-1 mr-1">L</button>
          <button className=" w-10 border border-gray-400 p-1 mr-1">XL</button>
          <button className=" w-10 border border-gray-400 p-1 mr-1">2X</button>
        </div>
        <div className="border-t border-dotted border-gray-400 my-4"></div>

        <div>
         <AvailabilityToggle />
         
        </div>

        <div>
          <CategoryToggle />
        </div>
        <div className='border-t border-dotted border-gray-400 my-4'>
              
            </div>
      </div>
    </div>
  );
};

export default Sidebar;

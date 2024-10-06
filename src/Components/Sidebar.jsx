import React from "react";
import { GoChevronUp } from "react-icons/go";
import Availabilty from "./Availabilty";
import OutOfStock from "./OutOfStock";
import AvailabilityToggle from "./Products/AvailabilityToggle";
import CategoryToggle from "./Products/CategoryToggle";

const Sidebar = ({ onSizeSelect }) => {
  const sizes = ["XS", "S", "M", "L", "XL", "2X"];
  return (
    <div className="hidden md:block   md:w-[22%] md:h-full md:fixed  md:top-0 md:left-0 md:mt-[8%] lg:mt-[6%] z-[999] md:p-1 lg:p-4 ">
      <div className="bg-white">
        <h3 className="font-bold text-[20px] mb-6">Filters</h3>
        <p className="font-bold mb-2">Size</p>
        <div className="flex justify-between">
        {sizes.map((size) => (
          <button key={size} className=" w-10 border border-gray-400 p-1 mr-1 hover:bg-gray-300" onClick={() => onSizeSelect(size)} >{size}</button>
        ))}
         
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

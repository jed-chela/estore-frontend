import React, { useState } from "react";
import { GoChevronUp, GoChevronDown } from "react-icons/go";


function CategoryToggle() {
  const [isOpen, setIsOpen] = useState(true); // Set the initial state

  const toggleContent = () => {
    setIsOpen(!isOpen); // Toggle between true and false
  };

  return (
    <div className="border-t border-dotted border-gray-400 my-4">
      {/* Toggle Button */}
      <div
        className="flex justify-between mb-2 cursor-pointer"
        onClick={toggleContent}
      >
        <h3 className="font-bold">Category</h3>
        {isOpen ? <GoChevronUp /> : <GoChevronDown />}
      </div>

      {/* Collapsible Content */}
      {isOpen && (
        <div>
          
           
        </div>
        
      )}
    </div>
  );
}

export default CategoryToggle;

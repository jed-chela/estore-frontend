import React, { useState } from "react";
import { GoChevronUp, GoChevronDown } from "react-icons/go";
import Availabilty from "../Availabilty";
import OutOfStock from "../OutOfStock";

function AvailabilityToggle() {
  const [isOpen, setIsOpen] = useState(true); // Set the initial state

  const toggleContent = () => {
    setIsOpen(!isOpen); // Toggle between true and false
  };

  return (
    <div>
      {/* Toggle Button */}
      <div
        className="flex justify-between mb-2 cursor-pointer"
        onClick={toggleContent}
      >
        <h3 className="font-bold">Availability</h3>
        {isOpen ? <GoChevronUp /> : <GoChevronDown />}
      </div>

      {/* Collapsible Content */}
      {isOpen && (
        <div>
          
            <div className="flex justify-between">
              <Availabilty />
              <h3>(120)</h3>
            </div>
            
          
            <div className="flex justify-between">
              <OutOfStock />
              <h3>(80)</h3>
            </div>
          
        </div>
        
      )}
    </div>
  );
}

export default AvailabilityToggle;

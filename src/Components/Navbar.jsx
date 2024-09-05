import React from "react";
import LogInIcon from '@mui/icons-material/PermIdentity';

const Navbar = () => {
  return (
    /* Nav Container */
    <div className="hidden md:block md:w-full lg:flex  md:h-[80px] md:bg-white md:border-b-2 border-none md:border-gray-500">
      <div className="md:py-[10px] md:px-[20px] flex justify-between md:w-full items-center">
        {/** Search Nav-container */}
        <div className="flex flex-1">
          <div className="text-[14px] cursor-pointer p-1">
            <a href="/home">AWYETU</a>

          </div>
          <div className="text-[14px] cursor-pointer p-1 ml-2">
            <a href="/Collection">OTHER COLLECTIONS</a>
               
          </div>
        </div>

        {/** Logo Nav-container */}
        <div className="flex-1 text-3xl text-center">
          <h1>AWYETU</h1>
        </div>

        {/** Login Nav-container */}
        <div className="flex flex-1 items-center justify-end cursor-pointer">
            <LogInIcon className="text-4xl" />
          <h1>Log In</h1>
        </div>
      </div>
    </div>
  );
}; 

export default Navbar; 

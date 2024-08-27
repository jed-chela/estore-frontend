import React from "react";
import LogInIcon from '@mui/icons-material/PermIdentity';

const Navbar = () => {
  return (
    /* Nav Container */
    <div className="h-[80px] bg-white border-b-2 border-gray-500">
      <div className="py-[10px] px-[20px] flex justify-between items-center">
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

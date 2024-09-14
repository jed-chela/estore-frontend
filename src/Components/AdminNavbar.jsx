import React from "react";
import picadm from "../assets/productImage/Group.png";
import Logo from "../assets/productImage/4.svg.png";


const AdminNavbar = () => {
  return (
    <div className="hidden w-full md:w-auto ml-[18%] h-auto justify-end md:flex border-b-2 xl:w-auto border-b-gray-300 items-center">
      <div className=" items-center flex">
        <img className="w-auto h-[40px] mt-2" src={picadm} alt="" />

       

        <div className="p-2 mr-4">
          <h1 className="md:text-[15px] lg:text-[20px]">ADMIN</h1>
          <p className="text-gray-400 md:md:text-[10px] lg:text-[15px] ">
            admin@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;

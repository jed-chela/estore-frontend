import React from "react";
import picadm from "../assets/productImage/Group.png";


const Dashbard = () => {
  return (
    
    
      <div className="relative mt-[25%]  md:mt-0 bg-white w-full xl:w-auto md:ml-[18%] h-auto font-medium border-b-2 border-b-gray-300 ">
       <div className="mt-[5rem] w-full  flex justify-end md:hidden">
        <img className="w-auto h-[30px]  mt-2" src={picadm} alt="" />

        <div className="p-2 mr-4">
          <h1 className="text-[10px]">ADMIN</h1>
          <p className="text-gray-400 text-[10px]  ">
            admin@gmail.com
          </p>
        </div>
      </div>
      <hr className="md:hidden" />
        <div className=" p-2 mt-[5rem] md:m-0 md:mr-4 ">
          <h1 className="text-center md:text-left md:ml-6 p-3 w-fit">DASHBOARD</h1>
        </div>
      </div>
   
  );
};

export default Dashbard;

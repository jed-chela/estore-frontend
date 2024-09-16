import React from "react";

const DashboardItem = () => {
  return (

    <div className="bg-white w-full relative xl:w-auto md:w-auto  md:ml-[18%]  h-auto border-b-gray-300  ">
      
      <div className="  grid  justify-center w-auto font-bold text-[#092c3f]  md:grid-cols-2 lg:flex  ">
        <div className="shadow-lg shadow-gray-500/50 p-4   m-4 border-b-2 w-full  md:w-auto lg:w-full h-[100px] font-bold md:h-[120px]  rounded-[5px] bg-[#d6d8d8]">
          <h3 className="w-fit p-2">Total Customers</h3>
          <p className="w-fit p-2">600</p>
        </div>
        <div className="shadow-lg shadow-gray-500/50 p-4   m-4 border-b-2 w-full  md:w-auto lg:w-full   h-[100px] md:h-[120px]  rounded-[5px] bg-[#d6d8d8]">
          <h3 className=" w-fit p-2">Total Purchases</h3>
          <p className=" w-fit p-2">1000</p>
        </div>
        <div className="shadow-lg shadow-gray-500/50 p-4  m-4 border-b-2 w-full  md:w-auto lg:w-full   h-[100px] md:h-[120px]  rounded-[5px] bg-[#d6d8d8]">
          <h3 className="w-fit p-2">Pending Orders</h3>
          <p className="w-fit p-2">200</p>
        </div>
        <div className="shadow-lg shadow-gray-500/50 p-4  m-4 border-b-2 w-full  md:w-auto lg:w-full   h-[100px] md:h-[120px]  rounded-[5px] bg-[#d6d8d8]">
          <h3 className="w-fit p-2">Delivered Orders</h3>
          <p className="w-fit p-2">800</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardItem;

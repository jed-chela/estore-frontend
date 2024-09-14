import React from "react";

const DashboardItem = () => {
  return (
    <div className="bg-white w-full relative xl:w-auto   md:ml-[18%]  h-auto border-b-gray-300  ">
      <div className="max-w-screen-xl md:w-auto grid justify-center w-full font-bold text-gray-900  md:flex  ">
        <div className="shadow-lg shadow-gray-500/50 p-4  p-2 m-4 border-b-2  w-full h-[100px] font-bold md:h-[120px] md:w-[250px] rounded-[5px] bg-gray-400">
          <h3 className=" p-2">Total Customers</h3>
          <p className="p-2">600</p>
        </div>
        <div className="shadow-lg shadow-gray-500/50 p-4 p-2  m-4 border-b-2 w-full h-[100px] md:h-[120px] md:w-[250px] rounded-[5px] bg-gray-400">
          <h3 className=" p-2">Total Purchases</h3>
          <p className="p-2">1000</p>
        </div>
        <div className="shadow-lg shadow-gray-500/50 p-4 p-2  m-4 border-b-2 w-full h-[100px] md:h-[120px] md:w-[250px] rounded-[5px] bg-gray-400">
          <h3 className=" p-2">Pending Orders</h3>
          <p className="p-2">200</p>
        </div>
        <div className="shadow-lg shadow-gray-500/50 p-4 p-2  m-4 border-b-2 w-full h-[100px] md:h-[120px] md:w-[250px] rounded-[5px] bg-gray-400">
          <h3 className=" p-2">Delivered Orders</h3>
          <p className="p-2">800</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardItem;

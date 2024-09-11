import React from "react";

const DashboardItem = () => {
  return (
    <div className="bg-white w-auto relative   md:ml-[15%]  h-screen border-b-gray-300  ">
      <div className="max-w-screen-xl md:w-auto grid justify-center w-full  md:flex  ">
        <div className=" flex-1 p-2 text-white m-4 border-b-2  w-[200px] h-[100px] md:h-[120px] md:w-[250px] rounded-[5px] bg-blue-950">
          <h3 className=" p-2">Total Customers</h3>
          <p className="p-2">600</p>
        </div>
        <div className="flex-1 p-2 text-white m-4 border-b-2 w-[200px] h-[100px] md:h-[120px] md:w-[250px] rounded-[5px] bg-blue-950">
          <h3 className=" p-2">Total Purchases</h3>
          <p className="p-2">1000</p>
        </div>
        <div className="flex-1 p-2 text-white m-4 border-b-2 w-[200px] h-[100px] md:h-[120px] md:w-[250px] rounded-[5px] bg-blue-950">
          <h3 className=" p-2">Pending Orders</h3>
          <p className="p-2">200</p>
        </div>
        <div className="flex-1 p-2 text-white m-4 border-b-2 w-[200px] h-[100px] md:h-[120px] md:w-[250px] rounded-[5px] bg-blue-950">
          <h3 className=" p-2">Delivered Orders</h3>
          <p className="p-2">800</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardItem;

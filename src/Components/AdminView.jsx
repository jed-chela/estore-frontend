import React from "react";
import pic9 from "../assets/productImage/image 18.png";
import { IoChevronDown } from "react-icons/io5";
import { Link } from "react-router-dom";
import picadm from "../assets/productImage/Group.png";
const AdminView = () => {
  return (
    <div className=" relative mt-2 ml-[18%]  bg-[#D6D8D8] w-full md:w-auto  h-full border-b-gray-300 max-w-screen-xl">
         <div className="bg-white">
        {" "}
        <div className="mt-[5rem] w-auto    flex justify-end md:hidden">
          <img className="w-auto h-[30px]  mt-2 " src={picadm} alt="" />

          <div className="p-2 mr-4 ">
            <h1 className="text-[10px]">ADMIN</h1>
            <p className="text-gray-400 text-[10px]  ">admin@gmail.com</p>
          </div>
        </div>
        <hr className="md:hidden" />
        <div className=" relative w-auto mt-[2rem] md:mt-0  h-[70px] bg-white">
          <p className="p-4 font-bold ml-2">VIEW ORDER</p>
        </div>
      </div>
      <hr className="md:hidden" />
      <div className="p-4 w-auto   h-auto flex ">
        <div className="w-auto h-full p-4  flex-1">
          <img src={pic9} alt="" />
        </div>
        <div className="justify-start items-start w-full p-4 h-full text-gray-700 flex-1">
          <div>
            <div className="font-bold text-gray-700">
              <h1>ORDER INFORMATION</h1>
            </div>
            <div className="flex w-[50%] mt-4 font-medium justify-between">
              <h2>ORDER ID :</h2>
              <p>0001</p>
            </div>
            <div className="flex w-[50%] mt-4 font-medium  justify-between">
              <h2>CUSTOMER NAME</h2>
              <p>0001</p>
            </div>
            <div className="flex w-[50%] mt-4 font-medium   justify-between">
              <h2>EMAIL</h2>
              <p>0001</p>
            </div>
            <div className="flex w-[50%] mt-4 font-medium   justify-between">
              <h2>PHONE NUMBER</h2>
              <p>0001</p>
            </div>
            <div className="flex w-[50%] mt-4 font-medium   justify-between">
              <h2>PRODUCT NAME</h2>
              <p>0001</p>
            </div>
            <div className="flex w-[50%] mt-4 font-medium   justify-between">
              <h2>ADDRESS</h2>
              <p>0001</p>
            </div>
            <div className="flex w-[50%] mt-4 font-medium   justify-between">
              <h2>CITY</h2>
              <p>0001</p>
            </div>
            <div className="flex w-[50%] mt-4 font-medium   justify-between">
              <h2>ZIP CODE</h2>
              <p>0001</p>
            </div>
          </div>
          <h1 className="font-bold mt-4">ORDER STATUS</h1>
          <div className="flex w-[50%] mt-4 font-medium items-center  justify-between">
            <h2>STATUS</h2>
            <p className="border-2 flex items-center rounded-md  border-gray-500">
              <input
                className=" h-[30px] text-center outline-none rounded-md bg-transparent"
                type="text"
                name=""
                id=""
                placeholder="DELEVERED "
              />
              <IoChevronDown />
            </p>
          </div>
         
        </div>
       
      </div>
      <div className="justify-center  h-auto grid m-4">
            <button className=" h-[50px] rounded-md m-4 p-4 bg-[#0B202E]"><Link className=" text-[#D6D8D8] text-[15px]">UPDATE ORDER</Link></button>
        </div>
          
      
      
    </div>
  );
};

export default AdminView;

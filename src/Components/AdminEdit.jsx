import React from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import picadm from "../assets/productImage/Group.png";

const AdminEdit = () => {
  return (
    <div className=' className=" relative mt-2  bg-white   md:ml-[18%]  h-full border-b-gray-300 max-w-screen-xl"'>
      <div className="mt-[5rem] w-auto  flex justify-end md:hidden">
        <img className="w-auto h-[30px]  mt-2 " src={picadm} alt="" />
 
        <div className="p-2 mr-4">
          <h1 className="text-[10px]">ADMIN</h1>
          <p className="text-gray-400 text-[10px]  ">admin@gmail.com</p>
        </div>
      </div>
      <hr className="md:hidden" />
      <div className=" relative w-auto mt-[2rem] md:mt-0  h-[70px] bg-white">
        <p className="p-4 font-bold ml-2">EDIT PRODUCT</p>
      </div>
      <hr className="md:hidden" />

      <div className=" h-screen md:h-[35rem] ">
        <div className=" p-4  bg-white md:mr-[30px]  md:ml-[30px] h-screen  md:h-[95%] mt-[30px] md:mt-[10px] w-full md:w-auto   ">
          <button className="border-2 w-[50px] md:w-[70px] flex items-center mt-2  mb-4 block hover:bg-[#0b202e]  hover:text-[#d6d8d8] rounded-md">
            <FaChevronLeft className="m-1" />
            <Link className="">Back</Link>
          </button>
          <div className="grid md:flex w-full md:w-auto lg:gap-6">
            <div className=" ">
              <div className="w-full ">
                <p className="w-fit m-2">Category</p>
                <input
                  className="w-full md:w-[90%] lg:w-[30rem] rounded-[3px] outline-none border-2"
                  type="text"
                  name=""
                  id=""
                />
                <p className="w-fit m-2">Name Of Product</p>
                <input
                  className="w-full  md:w-[90%] lg:w-[30rem]  rounded-[3px] outline-none  border-2"
                  type="text"
                  name=""
                  id=""
                  placeholder="Item Name"
                />
                <p className="w-fit m-2">Description</p>
                <textarea
                  className="w-full md:w-[90%] lg:w-[30rem] align-top rounded-[3px] border-2 outline-none h-[100px]"
                  type="text"
                  name=""
                  id=""
                />
                <p className="w-fit m-2">Upload Product</p>
                <input
                  className="w-full  md:w-[90%] lg:w-[30rem] rounded-[3px] h-[100px] outline-none"
                  type="image"
                  src=""
                  alt=""
                />
                <input type="file" name="Image Upload" id="" />
              </div>
            </div>
            <div className="w-full ">
              <p className="w-fit m-2">Product Material</p>
              <input
                className="w-full  md:w-[90%] lg:w-[30rem]  rounded-[3px]  border-2 outline-none"
                type="text"
                name=""
                id=""
              />
              <p className="w-fit m-2 ">Product Price</p>
              <input
                className="w-full  md:w-[90%] lg:w-[30rem]  rounded-[3px]  border-2 outline-none"
                type="text"
                name=""
                id=""
              />

              <p className="w-fit m-2">Quantity</p>
              <input
                className="w-full  md:w-[90%] lg:w-[30rem]  rounded-[3px] border-2 outline-none "
                type="text"
                name=""
                id=""
              />
            </div>
          </div>
          <div className="grid justify-center ">
            <button className="border-2 mt-2  p-2 rounded-[8px] md:mt-6 bg-[#0b202e] hover:text-[#0b202e]  text-[#d6d8d8] hover:bg-[#d6d8d8] ">
              <Link>Save Changes</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminEdit;

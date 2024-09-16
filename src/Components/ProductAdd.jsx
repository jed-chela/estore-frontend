import React from 'react'
import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import picadm from "../assets/productImage/Group.png";

const ProductAdd = () => {
  return (
    <div className=' className=" relative mt-2  bg-gray-300   md:ml-[18%]  h-full border-b-gray-300 max-w-screen-xl"'>
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
        <p className="p-4 font-bold ml-2">ADD NEW PRODUCT</p>
      </div>
    </div>
    <hr className="md:hidden" />

    <div className=" h-auto md:p-6 p-1  ">
      <div className=" p-4  bg-white   md:h-auto  md:m-0  md:w-auto   ">
        <button className="border-2 w-[50px] md:w-[70px] flex items-center mt-2  mb-4 block hover:bg-[#0b202e]  hover:text-[#d6d8d8] rounded-md">
          <FaChevronLeft className="m-1" />
          <Link to="/AdminproductList">Back</Link>
        </button>
        <div className="grid md:flex w-full md:w-auto  lg:gap-6">
          <div className="flex-1 ">
            <div className="w-full ">
              <p className="w-fit m-2">Category</p>
              <input
                className="w-full md:w-[90%] rounded-[3px] outline-none hover:bg-[#D6D8D8] border-2"
                type="text"
                name=""
                id=""
                placeholder="Select Category"
              />
              <p className="w-fit m-2">Name Of Product</p>
              <input
                className="w-full  md:w-[90%]   rounded-[3px] outline-none hover:bg-[#D6D8D8] border-2"
                type="text"
                name=""
                id=""
                placeholder="Enter Product Name"
              />
              <p className="w-fit m-2">Description</p>
              <textarea
                className="w-full md:w-[90%]  align-top rounded-[3px] border-2 outline-none hover:bg-[#D6D8D8] h-[100px]"
                type="text"
                name=""
                id=""
                placeholder="Write About Property"
              />
              <p className="w-fit m-2">Upload Product</p>
              <input
                className="w-full  md:w-[90%] hover:bg-[#D6D8D8]  rounded-[3px] h-[100px] outline-none"
                type="image"
                src=""
                alt=""
              />
              <input type="file" name="Image Upload" id="" />
            </div>
          </div>
          <div className="w-full flex-1 ">
            <p className="w-fit m-2">Product Material</p>
            <input
              className="w-full  md:w-[90%] hover:bg-[#D6D8D8]   rounded-[3px]  border-2 outline-none"
              type="text"
              name=""
              id=""
              placeholder="Enter Product Material and Category Name"
            />
            <p className="w-fit m-2 ">Product Price</p>
            <input
              className="w-full  md:w-[90%] hover:bg-[#D6D8D8]  rounded-[3px]  border-2 outline-none"
              type="text"
              name=""
              id=""
              placeholder="Enter Product Price"
            />

            <p className="w-fit m-2">Quantity</p>
            <input
              className="w-full  md:w-[90%] hover:bg-[#D6D8D8]  rounded-[3px] border-2 outline-none "
              type="text"
              name=""
              id=""
              placeholder="Enter Product Quantiry"
            />
          </div>
        </div>
        <div className="grid justify-center  ">
          <button className="border-2 mt-2  p-2 rounded-[8px] md:mt-6 bg-[#0b202e] hover:text-[#0b202e]  text-[#d6d8d8] hover:bg-[#d6d8d8] ">
            <Link to="/AdminproductList">Save Changes</Link>
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProductAdd
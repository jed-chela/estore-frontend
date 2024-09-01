import React from "react";
import image112 from "../assets/productImage/image 112.jpeg";
import image113 from "../assets/productImage/image 113.jpeg";
import image114 from "../assets/productImage/image 114.jpeg";
import image115 from '../assets/productImage/image 115.jpeg' 
import { motion } from 'framer-motion'


const Mobilepage = () => {
  return (
    <div className=" w-full max-h-[70vh] overflow-y-auto ">
      <div className="flex justify-between text-center mt-[20px] ">
        <a href="">
          <div className="w-[100px] p-2 hover:p-0 ">
            <motion.img
             initial={{ y: 100, opacity: 0}}
             whileInView={{ y: 0, opacity: 1}}
             transition={{delay:0.2, x:{type:"spring", stiffness:40}, opacity:{duration:0.5}, ease:"easeIn", duration:1}}
              
            className="" src={image112} alt="" />
            <p className="font-normal text-[15px]">COLLEGE</p>
          </div>
        </a>
        <a href="">
          <div className="w-[100px] p-2 hover:p-0">
            <motion.img
             initial={{ y: -100, opacity: 0}}
             whileInView={{ y: 0, opacity: 1}}
             transition={{delay:0.2, x:{type:"spring", stiffness:40}, opacity:{duration:0.5}, ease:"easeIn", duration:1}}
            
            src={image113} alt="" />
            <p className="font-normal text-[15px]">DATE</p>
          </div>
        </a>
        <a href="">
          <div className="w-[100px] p-2 hover:p-0">
            <motion.img
             initial={{ y: 100, opacity: 0}}
             whileInView={{ y: 0, opacity: 1}}
             transition={{delay:0.2, x:{type:"spring", stiffness:40}, opacity:{duration:0.5}, ease:"easeIn", duration:1}}
            
            src={image114} alt="" />
            <p className="font-normal text-[15px]">OFFICE</p>
          </div>
        </a>
      </div>
        <div className="text-[15px] text-center mt-[80px] p-4 overflow-y-aut scrollbar-hide">
            <p className="borrder w-[150px] transition-colors duration-300 m-2 rounded-[5px] bg-white hover:bg-gray-600 hover:text-white mx-auto block hover:text-[20px]  p-1">VINTAGE</p>
            <p className="borrder w-[150px] transition-colors duration-300 m-2 rounded-[5px] bg-white hover:bg-gray-600 hover:text-white mx-auto block hover:text-[20px]   p-1">LUXURY</p>
            <p className="borrder w-[150px] transition-colors duration-300 m-2 rounded-[5px] bg-white hover:bg-gray-600 hover:text-white mx-auto block hover:text-[20px]   p-1">CORPORATE</p>
            <p className="borrder w-[150px] transition-colors duration-300 m-2 rounded-[5px] bg-white hover:bg-gray-600 hover:text-white mx-auto block hover:text-[20px]   p-1">CASSINO</p>
        </div>

        <a href="">
            <div className="p-2 mt-[50px] hover:p-4">
                <motion.img
                 initial={{ x: -100, opacity: 0}}
                 whileInView={{ x: 0, opacity: 1}}
                 transition={{delay:0.2, x:{type:"spring", stiffness:60}, opacity:{duration:1}, ease:"easeIn", duration:1}}
                  
                
                src={image115} alt="" />

            </div>

        </a>
        

        <a href="">
            <button className="w-[300px] m-[40px] p-2 transition-colors duration-300 border mx-auto block rounded-[5px] hover:bg-gray-600 hover:text-white  bg-white ">SHOP NOW</button>
        </a>


    </div>
  );
};

export default Mobilepage;

import React from "react";
import image1 from "../assets/productImage/imagw 111.jpeg";
import image2 from "../assets/productImage/image 6.png";
import { motion } from 'framer-motion'

{
  /**Service List Section */
}
const Services = () => {
  return (
    <div className="h[100%] bg-white">
      {/**Service Card Section */}
      <div className=" object-cover">
        <div className=" flex-col  md:flex-row md:flex md:items-center md:justify-center  md:mt-8 text-center">
          <a href="/collection">
            <div className="md:ml-[20px] p-2 md:p-0 ">
              <motion.img
              initial={{ x: -100, opacity: 0}}
              whileInView={{ x: 0, opacity: 1}}
              transition={{delay:0.2, x:{type:"spring", stiffness:40}, opacity:{duration:1}, ease:"easeIn", duration:0.2}}
              
              src={image1} alt="" />
            </div>
          </a>
          <div className="absolute font-normal md:font-medium text-3xl md:text-3xl top-[90%] left-[40%] sm:top-[115%] sm:left-[40%]  flex md:top-[135%] md:left-[20%]  text-red-700">
              <a className=" " href="/collection">SAFARI</a>
            </div>{" "}

          <a href="/collection">
            <div className="md:ml-[20px] p-2 md:p-0">
              <motion.img
              initial={{ x: -100, opacity: 0}}
              whileInView={{ x: 0, opacity: 1}}
              transition={{delay:0.2, x:{type:"spring", stiffness:40}, opacity:{duration:1}, ease:"easeIn", duration:2}}
               src={image2} alt="" />
            </div>
            <div className=" absolute font-normal md:font-medium text-3xl flex top-[180%] left-[40%] sm:top-[250%] sm:left-[40%] md:top-[135%] md:left-[70%] xl:top-50 xl:right-[20%]  text-yellow-400">
             <a className="" href="/collection"> KAFTAN</a>
            </div>
            
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default Services;

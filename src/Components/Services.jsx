import React from "react";
import image1 from "../assets/productImage/imagw 111.jpeg";
import image2 from "../assets/productImage/image 6.png";
import { motion } from "framer-motion";

{
  /**Service List Section */
}
const Services = () => {
  return (
    <div className="h-[100%] bg-white">
      {/**Service Card Section */}
      <div className=" object-cover">
        <div className="  flex flex-col  md:flex-row md:flex md:items-center md:justify-center  md:mt-8 text-center">
          <a href="/collection">
            <div className="relative md:ml-[20px] p-2 md:p-0 ">
              <motion.img
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.2,
                  x: { type: "spring", stiffness: 40 },
                  opacity: { duration: 1 },
                  ease: "easeIn",
                  duration: 0.2,
                }}
                src={image1}
                alt=""
              />
              <div className="absolute top-[45%] left-[30%] font-bold text-2xl sm:text-3xl    text-white shadow-gray-800 ">
                <a className=" " href="/collection">
                  Safari
                </a>
              </div>{" "}
            </div>
          </a>

          <a href="/collection">
            <div className="relative md:ml-[20px] p-2 md:p-0 ">
              <motion.img
                initial={{ x: 120, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.2,
                  x: { type: "spring", stiffness: 40 },
                  opacity: { duration: 1 },
                  ease: "easeIn",
                  duration: 2,
                }}
                src={image2}
                alt=""
              />

              <div className="absolute top-[45%] left-[30%] font-bold  text-2xl sm:text-3xl  text-white shadow-gray-800">
                Kaftan
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;

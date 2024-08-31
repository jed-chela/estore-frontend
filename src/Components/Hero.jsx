import video from "../assets/Awyetu.mp4";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import React, { useState } from "react";
import Mobilepage from "./Mobilepage";
import 'animate.css';

const Hero = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="w-full h-full">
      <video
        className="sm:w-auto md:w-full md:h-screen md:object-cover"
        src={video}
        autoPlay
        muted
        loop
      ></video>

      <div className="fixed bg-gray-50 text-black font-medium bg-opacity-70 mt-0 z-[999]  md:bg-transparent sm:absolute top-0 left-0 w-full h-auto flex justify-between md:font-thin md:mt-2 text-[20px] md:text-white">
        <div className="hidden  sm: text-[10px] md:text-[20px] flex-1 ">
          <a className="ml-4" href="">
            SAFARI
          </a>
          <a className="ml-4" href="">
            KAFTAN
          </a>
        </div>

        <div className="mr-[77%] items-center  h-auto md:w-full flex- flex-2 text-[20px] md:text-5xl">
          <a className=" " href="/Home">
            AWYETU
          </a>
        </div>
        <div onClick={handleClick} className="md:hidden mt-2 z-10">
          {!nav ? <IoMdMenu /> : <IoCloseSharp />}
        </div>

        <div className="w-full mt-[40px]">
          <div
            className={
              !nav
                ? "hidden"
                : "absolute left-0 flex-1 cursor-pointer h-screen w-full bg-white md:bg-transparent   md:min-h-fit md:text-white"
            }
          >
            {" "}
            <ul className="flex  items-center mt-[4%] flex-col md:flex-row md:justify-center   ">
              <li className="text-[15px] md:text-[20px] sm:mr-4 p-2 rounded-[3px] hover:border hover:bg-gray-600 hover:text-white">
                <a href="/collection">SEARCH</a>
              </li>
              <li className="text-[15px] md:text-[20px] sm:mr-4 p-1 rounded-[3px] hover:border hover:bg-gray-600 hover:text-white">
                ACCOUNT
              </li>
              <li className="text-[15px] md:text-[20px] sm:mr-2 p-1 rounded-[3px] hover:border hover:bg-gray-600 hover:text-white">
                BAG
              </li>
            </ul>
            <div>
            <Mobilepage />
          </div>
          </div>
          
        </div>
      </div>
      <div className="absolute top-20 left-[150px] flex flex-col justify-center items-center ">
        <h1 className="text-[20px] md:text-[50px] font-light text-white">
          <a className="text-2xl mb-4" href="/Home">AWYETU COLLECTION</a>
        </h1>

        <button className="md:py-[5px] md:px-[30px] md:mt-10 text-[15px] md:text-[20px] font-medium  text-white underline hover:border hover:rounded-[3px]">
          <a href="/collection">S H O P</a>
        </button>
      </div>
    </div>
  );
};

export default Hero;

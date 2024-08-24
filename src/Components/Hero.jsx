import React from "react";
import video from "../assets/Awyetu.mp4";

const Hero = () => {
  return (
    <div className="w-full h-full">
      <video
        className="w-full h-screen object-cover"
        src={video}
        autoPlay
        muted
        loop
      ></video>
      <div className="absolute top-0 left-0 w-full h-full flex justify-between font-thin mt-2 text-[20px] text-white">
        <div className="flex-1">
          <a className="ml-4" href="">SAFARI</a>
          <a className="ml-4" href="">KAFTAN</a>
        </div>
        <div className="flex-2 text-5xl">
          <a href="">AWYETU</a>
        </div>

        <div className="flex-1 cursor-pointer  h-fit ">
          <ul className="flex justify-end">
            <li className="mr-4 hover:border">SEARCH</li>
            <li className="mr-4 hover:border">ACCOUNT</li>
            <li className="mr-4 hover:border">BAG</li>
          </ul>
        </div>
      </div>
      <div className="absolute top-20 left-0 w-full h-full flex flex-col justify-center items-center">
        <h1 className="text-[80px] font-light text-white">
          AWYETU COLLECTION
        </h1>
    
        <button className="py-[5px] px-[30px] mt-10 text-[20px] font-medium  text-white underline hover:border">
          S H O P
        </button>
      </div>
    </div>
  );
};

export default Hero;

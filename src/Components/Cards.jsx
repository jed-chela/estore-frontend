import React from "react";
import { CiShoppingBasket } from "react-icons/ci";
import pic1 from '../assets/productImage/Group 19.png';
/*import pic_2 from '../assets/Group 20.png';
import pic_3 from '../assets/image 14.png';
import pic_4 from '../assets/Group 182.png';
import pic_5 from '../assets/Group 183.png';
import pic_6 from '../assets/image 15.png';
import pic_7 from '../assets/Group 199.png';
import pic_8 from '../assets/Group 200.png';
import pic_9 from '../assets/image 18.png';

*/

const Cards = () => {
  return (
    <div className="flex flex-wrap ml-[23rem] z-[-2] w-6">
      <div className=" mt-[20px] border-gray-200 p-5">
        <div>
          <div className="w-[300px] ">
          <img src={pic1} alt="Coat" className="" />
          </div>

          <div className="flex justify-between items-center mb-2">
            <h3 className="flex-1 text-[12px] text-gray-500 mr-4">TRENCH COAT</h3>
            <del className="flex-2 mr-2 ">500,000</del>
            <div className="flex-2 font-medium ">
              450,000
            </div>
          </div>

          <div className='flex justify-between items-center' >
            <h2 className="text-[15px] font-medium">LEATHER COLLAR TRENCH COAT</h2>
            <div>
              <CiShoppingBasket className="text-2xl text-gray-500 text-right" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;

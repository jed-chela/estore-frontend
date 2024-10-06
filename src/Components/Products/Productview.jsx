import React, { useState } from "react";
import image from "../../assets/productImage/image 113.jpeg";
import StarRating from "../StarRating";

const Productview = (props) => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };
  const sizes = ["XS", "S", "M", "L", "XL", "2X"];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-2  mt-[15%] md:mt-[6%]">
      <div className=" w-full h-full">
        <img src={image} alt="" className="w-full h-full" />
      </div>
      <div className=" p-4 md:p-[30px] ">
        <h1 className="text-black font-bold text-[20px] md:text-[30px] mb-2 ">
          {" "}
          TRENCH LEATER COAT
        </h1>
        <div className="flex mb-2">
          <h1>{props.reviews}</h1>
          <p className=" ml-4 font-medium">{props.reviewNumber}</p>
        </div>

        <div className="flex mb-2">
          <h1>Category:</h1>
          <p className=" ml-4 font-medium">Trench Coat</p>
        </div>
        <div className="flex mb-2 md:mb-6">
          <h1>Availability:</h1>
          <p className=" ml-4 font-medium">25</p>
        </div>

        <p
          className="text-[40px] mb-4 md:mb-6 font-bold text-[#092C3F]
"
        >
          N 455,000
        </p>

        <div>
          <h1 className="mb-2 font-semibold">SIZE</h1>
          <div className="flex w-fit justify-between">
            {sizes.map((size) => (
              <button
                key={size}
                className=" w-10 border font-semibold border-gray-400 p-1 mr-1 hover:bg-gray-300"
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-[40px]">
          <button className="w-full md:w-[70%] h-[40px] rounded-md border bg-[#0B202E] mb-6 text-gray-300">
            Buy Now
          </button>
        </div>

        <hr />
      <div className="mt-2 mb-4">
        <h1 className="font-semibold mt-2">DESCRIPTION</h1>
        <p className="mt-2">
          Relaxed fit trench coat made of cotton. Featuring a matching leather
          lapel collar, long sleeves, welt pockets at the hip, an inside pocket,
          central back vent at the hem and front snap-button fastening.
        </p>
      </div>
      <hr />
      <div className="mt-[30px]">
        <h1 className="text-[#8D7901] font-semibold underline mb-4">
          REVIEWS (0)
        </h1>
        <div className="text-center">
          <p className="mb-2 font-bold">REVIEWS (0)</p>
          <div className="flex mb-2 justify-center">
            <StarRating rating={rating} onRatingChange={handleRatingChange} />
            <p className=" ml-4 font-medium">
              {" "}
              {rating} Review{rating !== 1 ? "s" : ""}
            </p>
          </div>
          <button className="mt-4 bg-[#000000] w-[200px] h-[35px] text-white">
            WRITE A REVIEW
          </button>
        </div>
        <p className="mt-6 text-gray-600 text-center ">There are no reviews for this product</p>
      </div>
      </div>
     
    </div>
  );
};

export default Productview;

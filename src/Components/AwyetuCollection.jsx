import React from "react";
import Cardata from "./Cardata";
import Cards from "./Cards";

function createEntry(itemCards) {
  return <Cards
      key={itemCards.id}
      img={itemCards.img}
      title={itemCards.title}
      category={itemCards.category}
      privPrice={itemCards.privPrice}
      newPrice={itemCards.newPrice} />

}



const AwyetuCollection = () => {
  return (
    <div className="md:grid md:ml-[23%] grid-cols-1 md:grid-cols-3  lg:mt-[2rem]  z-[-3] w-auto ">
      {Cardata.map(createEntry)}
 
    </div>
  );
};

export default AwyetuCollection;

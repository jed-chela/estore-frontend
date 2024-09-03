import React from 'react'
import Cards from './Cards'
import pic1 from '../assets/productImage/Group 19.png';
import pic2 from '../assets/productImage/Group 20.png';
import pic3 from '../assets/productImage/image 14.png';
import pic4 from '../assets/productImage/Group 182.png';
import pic5 from '../assets/productImage/Group 183.png';
import pic6 from '../assets/productImage/image 15.png';
import pic7 from '../assets/productImage/Group 199.png';
import pic8 from '../assets/productImage/Group 200.png';
import pic9 from '../assets/productImage/image 18.png';

const CardItem = () => {
  return (
    <div className="md:grid grid-cols-1 md:grid-cols-3 z-[-3] w-[300px] md:w-[70%]">
        <Cards
        img={pic1}
        title="LEATHER COLLAR TRENCH COAT"
        category="Coat"
        privPrice="550,000"
        newPrice="400,000"
         />
        <Cards
        img={pic2}
        title="LIGHTWEIGHT DENIM SHIRT"
        category="Shirt"
        privPrice="550,000"
        newPrice="400,000"
       
        
        />
        <Cards
        img={pic3}
        title="WOOL BLENDED SUIT SET"
        category="Suit"
        privPrice="550,000"
        newPrice="400,000"
         />
        <Cards
          img={pic4}
          title="PALM TREE BROWN JACKET"
          category="Jacket"
          privPrice="550,000"
          newPrice="400,000"
        
        />
        <Cards
         img={pic5}
         title="STRIPED BLAZER"
         category="Blazers"
         privPrice="550,000"
         newPrice="400,000"
        
        />
        <Cards
        img={pic6}
        title="GEOMETRIC CROCHET SHIRT"
        category="Shirt"
        privPrice="550,000"
        newPrice="400,000"
        
        />
        <Cards
         img={pic7}
         title="SATIN SHIRT WITH BOW"
         category="Shirt"
         privPrice="550,000"
         newPrice="400,000"
        
        />
        <Cards
        img={pic8}
        title="LINEN SHIRT AND TROUSER"
        category="Trouser"
        privPrice="550,000"
        newPrice="400,000"
        
        />
        <Cards
          img={pic9}
          title="WOOL BLEND JACKET"
          category="Jacket"
          privPrice="550,000"
          newPrice="400,000"
        
        />
        
        

    </div>
  )
}

export default CardItem




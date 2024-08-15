import React from 'react'
import Navbar from '../Components/Navbar'
import Contact from '../Components/Contact'
import Product from '../Components/Products/Product'
import AwyetuCollection from '../Components/Products/AwyetuCollection'

const Collection = () => {
  return (
    <div>
        <Navbar />
        <Product />
        <AwyetuCollection />
        <Contact />
    </div>
  )
}

export default Collection
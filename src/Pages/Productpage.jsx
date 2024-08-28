import React from 'react'
import Navbar from '../Components/Navbar'
import Contact from '../Components/Contact'
import Productview from '../Components/Products/Productview'

const Productpage = () => {
  return (
    <div>
        <Navbar />
        <Productview />
        <Contact />
    </div>
  )
}

export default Productpage
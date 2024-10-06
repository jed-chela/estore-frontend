import React from 'react'
import Navbar from '../Components/Navbar'
import Contact from '../Components/Contact'
import Productview from '../Components/Products/Productview'
import NavToggle from '../Components/NavToggle'

const Productpage = () => {
  return (
    <div>
      <NavToggle />
        <Navbar />
        <Productview />
        <Contact />
    </div>
  )
}

export default Productpage
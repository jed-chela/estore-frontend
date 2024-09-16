import React from 'react'
import Cardata from '../Cardata'
import { useParams } from 'react-router-dom'

const Productview = () => {
  const {id} = useParams();
  console.log(id)
  return (
    <div>Productview</div>
  )
}

export default Productview
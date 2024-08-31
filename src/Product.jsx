import React, { useEffect, useState } from 'react'
import Axios from "axios"
function Product() {
  let [products,setproducts]=useState([])

  useEffect(()=>{
    Axios.get("http://127.0.0.1:5000/api/products")
    .then((resp)=>{
      setproducts(resp.data)
    })
    .catch(()=>{})
  },[])

  return (
    <div>
        
      <div className="container">
        <div className="row">
          hiii
        </div>
      </div>
    </div>
  )
}

export default Product
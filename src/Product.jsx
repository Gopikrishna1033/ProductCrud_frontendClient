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
        <pre>{JSON.stringify(products)}</pre>
      <div className="container">
        <div className="row">
          {
            products.length>0?<>{
              products.map((product)=>{
                return <div className="col-md-3">
                  <div className="card">
                    <div className="card-header">
                      <img src={product.image} alt="" />
                    </div>
                    <div className="card-body">
                      <ul className='list-group'>
                        <div className="list-group">
                            <li className='list-group-item'> {product.name}</li>
                            <li className='list-group-item'>{product.price}</li>
                            <li className='list-group-item'><button className='btn btn-warning'>Add to cart</button></li>
                        </div>
                      </ul>
                      
                    </div>
                  </div>
                </div>
              })
            }</>:<>No Data</>
          }
        </div>
      </div>
    </div>
  )
}

export default Product
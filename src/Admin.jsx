import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from "axios"
function Admin() {
  let [products,setproducts] = useState([])

  let getProducts = ()=>{
    Axios.get("http://127.0.0.1:5000/api/products")
    .then((response)=>{
      setproducts(response.data)
    })
    
    .catch(()=>{})
  }

  useEffect(()=>{
    getProducts()
  },[])

  let deleteProduct=(id)=>{
    let url = `http://127.0.0.1:5000/api/products/${id}`
    Axios.delete(url).then(()=>{
      getProducts()
    })
    .catch(()=>{})
  }

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-5">
            <Link to={"/createproduct"}><button className='btn btn-success'> Create Product</button></Link>
          </div>
        </div>

        <div className="row">
          <pre>{JSON.stringify(products)}</pre>
          {
            products.length>0? <>
            <div className="col-md-8">
              <table className='table table-bordered'>
                <thead className='bg-primary text-white'>
                  <tr>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {
                    products.map((product)=>{
                      return <tr>
                        <td>{product.name}</td>
                        <td><img src={product.image} alt="image" width={80} /></td>
                        <td>{product.price}</td>
                        <td>{product.qty}</td>
                        <td><Link to={`/updateProduct/${product._id}`} className='btn btn-warning mr-2'>Update</Link><button className='btn btn-danger ' onClick={deleteProduct.bind(null,product._id)}>Delete</button></td>
                      </tr>
                    })
                  }
                </tbody>

              </table>
            </div>
            </>:<> No Data</>
          }
        </div>

      </div>
      
    </div>
  )
}

export default Admin
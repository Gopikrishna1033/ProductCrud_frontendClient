import React, {useEffect, useState} from 'react'
import { Navigate, useParams } from 'react-router-dom'
import Axios from "axios"
function UpdateProduct() {
    let [product,setproduct] = useState({
        name:"",
        image:"",
        price:"",
        qty:"",
        info:"",
    })
    let  [isupdated,setupdated] = useState(false)
    let p_id = useParams('id')

    let updateInput = (event)=>{
        setproduct({...product,[event.target.name]:event.target.value})
    }

    useEffect(()=>{
        console.log(p_id)
        let url = `http://127.0.0.1:5000/api/products/${p_id.id}`
        Axios.get(url)
        .then((resp)=>{
            setproduct(resp.data)
        })
        .catch(()=>{})
    },[])

    let submitHandler = (event)=>{
        event.preventDefault();
        let url=`http://127.0.0.1:5000/api/products/${p_id.id}`
        Axios.put(url,product)
        .then((resp)=>{
            console.log(resp.data)
            setupdated(true)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

  return (
    <div>
        <div className="container mt-5">
            <pre>{JSON.stringify(product)}</pre>
                    {
                        isupdated?<> <Navigate to = "/admin/"/> </>:<> </>
                    }
            <div className="row">
                <div className="col-md-5">
                    <div className="card">
                        <div className="card-header bg-primary text-white">
                            <h3>Update Product Details</h3>
                        </div>
                        <div className="card-body">
                            <form action="" onSubmit={submitHandler}>
                                <div className="form-group">
                                    <input type="text" placeholder='Product Name' className='form-control' value={product.name} onChange={updateInput} name='name'/>
                                </div>
                                <div className="form-group">

                                    <input type="file" className='form-control' name='image' />
                                </div>
                                <div className="form-group">
                                    <input type="number" placeholder='Price' name='price' value={product.price} className='form-control' onChange={updateInput}/>
                                </div>
                                <div className="form-group">
                                    <input type="number" name='qty' onChange={updateInput} value={product.qty} placeholder='QTY' className='form-control'/>
                                </div>
                                <div className="form-group">
                                    <input type="text" onChange={updateInput} value={product.info} placeholder='Additional Info' className='form-control'/>
                                </div>
                                <div className="form-group">
                                    <button className='btn btn-primary form-control'> Update Product</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>      
        </div>
    </div>
  )
}

export default UpdateProduct
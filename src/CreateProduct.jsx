import React, { useState } from 'react'
import Axios from "axios"
import { Navigate } from 'react-router-dom'

function CreateProduct() {

    let [iscreated,setcreated] = useState(false)

    let [Product,setProduct] = useState({
        name:'',
        image:'',
        qty:'',
        price:'',
        info:''
    })

    let updadteHandler = (event)=>{
        setProduct({...Product,[event.target.name]:event.target.value})
    }

    let imageHandler = (event)=>{
        let reader = new FileReader()
        let imgfile = event.target.files[0]
        reader.readAsDataURL(imgfile)
        reader.addEventListener("load",()=>{
            setProduct({...Product,image:reader.result})
        })
    }

    let submitHandler = (event)=>{
        console.log("Test Case 123")
        event.preventDefault()
        //console.log(Product)
        Axios.post('http://127.0.0.1:5000/api/products',Product)
        .then((response)=>{
            console.log('product created successfully',response)
            setcreated(true)
        })
        .catch(()=>{})
    }
    console.log('iscreated',iscreated)
  return (
    <div>
        <pre>{JSON.stringify(Product)}</pre>
        <div className="container mt-5">
            <pre>value:{JSON.stringify(iscreated)}</pre>
            <div className="row">
                {
                    iscreated? <> <Navigate to='/Product'/> </> :<>
                    
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header">
                                <h2>Create New product</h2>
                            </div>
                            <div className="card-body">
                                <form action="" onSubmit={submitHandler}>
                                    <div className="form-group">
                                        <input type="text" placeholder='ProductName' className='form-control' name='name' onChange={updadteHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="file" placeholder='Choose file' className='form-control' name='image' onInput={imageHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="number" placeholder='price' className='form-control' name='price' onChange={updadteHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="number" placeholder='Qty' className='form-control' name='qty' onChange={updadteHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className='form-control' name='info' onChange={updadteHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" value="Create Product" className='btn btn-primary form-control' />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    </>
                }
            </div>
        </div>
    </div>
  )
}

export default CreateProduct
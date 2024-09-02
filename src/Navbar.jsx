import React from 'react'
import { Link } from 'react-router-dom'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './Home'
import Product from './Product'
import Admin from './Admin'
import CreateProduct from './CreateProduct'
import UpdateProduct from './UpdateProduct'
function Navbar() {
  return (
    <div>
        <Router>
            <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
                <Link className= 'navbar-brand'>Logo</Link>
                <div className='ml-auto'>
                   <ul className='navbar-nav'>
                    <li ><Link to={'/index'} className='nav-link'>Home</Link></li>
                    <li ><Link to={'/Product'} className='nav-link'>Product</Link></li>
                    <li ><Link to={'/Admin'} className='nav-link'>Admin</Link></li>
                </ul>
                </div>
            </nav>
            <Routes>
              <Route path='index' element={<Home/>}></Route>
              <Route path='Product' element={<Product/>}></Route>
              <Route path='Admin' element={<Admin/>}></Route>
              <Route path='createproduct' element={<CreateProduct/>}></Route>
              <Route path='/updateProduct/:id' element={<UpdateProduct/>}></Route>
            </Routes>
        </Router>
    </div>
  )
}

export default Navbar
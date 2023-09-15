import React from 'react'
import logo from "./images/footer-logo.png"
import images from "./images/payment.png"
import NavLink from 'react-bootstrap/esm/NavLink'
import im1 from "./images/clients/client-1.png"
import im2 from "./images/clients/client-3.png"
import im3 from "./images/clients/client-4.png"
import im4 from "./images/clients/client-5.png"
import { TiInputChecked } from "react-icons/ti"
import "./footer.css"

const Footer = () => {

  return (
    <div className='bg-dark py-3 w-100'>
      <div className="container"><div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6 my-3">
            <div className='w-100 mx-3'>
            <img src={logo} className='w-75' alt="" srcset="" />
            <p className='my-3' style={{ color: 'gray' }}>The Customer is at the heart of our unique busnisee model,which includes design.</p>
            <img src={images} className='w-75' alt="" srcset="" />
            </div>
          
          </div> 
          <div className="col-md-3 col-sm-6 my-3">
            <div className='w-100'>
            <h3 className='text-light'>SHOPPING</h3>
            <ul>
              <li style={{ color: 'gray', listStyle: 'none' }}>Home</li>
              <li style={{ color: 'gray', listStyle: 'none' }}>Shop</li>
              <li style={{ color: 'gray', listStyle: 'none' }}>About Us</li>
            </ul>
            </div>
         
          </div>
          <div className="col-md-3 col-sm-6 my-3">
            <h3 className='text-light'>PARTNER</h3>
            <div className="row">
              <div className="col-6 my-3">
                <img src={im1} className='w-50' alt="" srcset="" />
              </div>
              <div className="col-6 my-3">
                <img src={im2} className='w-50' alt="" srcset="" />
              </div>
            </div>
            <div className="row my-3">
              <div className="col-6 my-3">
                <img src={im3} className='w-50' alt="" srcset="" />
              </div>
              <div className="col-6 my-3">
                <img src={im4} className='w-50' alt="" srcset="" />
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 my-3">
            <h3 className='text-light'>NEWLETTER</h3>
            <p className='my-3' style={{ color: 'gray' }}>Be the firts to know about new arrivals, look,sales & promos! </p>
            <span className="myinput">
              <input type="email" name="" id="" placeholder='Type Your Emali' />
              <TiInputChecked style={{ color: "white", fontSize: "25px" }} className='icon' />
            </span>
          </div>
        </div>
        <hr className='text-light' />
        <p className='text-center 'style={{color:'gray'}}>Copyright <span style={{background:"gray ",color:'black',borderRadius:'50%'}}className='px-2 py-1'>c</span> 2020 and 2023</p>

      </div></div>
      
    </div>

  )
}

export default Footer

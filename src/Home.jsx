import React from 'react'
import img from './images/hero/hero-1.jpg'
import img1 from './images/banner/banner-1.jpg'
import img3 from './images/banner/banner-2.jpg'
import img2 from './images/banner/banner-3.jpg'
import { HiOutlineArrowRight, HiShoppingCart } from 'react-icons/hi';
import Button from 'react-bootstrap/Button';
import './home.css'
import { Link, NavLink } from 'react-router-dom';
const Home = () => {
  return (
    <div>
      <div className=' py-5'>
        <div className="position-relative  ">

          <img src={img} className="img-fluid img" alt="..." />
          <div className="position-absolute top-50  container div ">
            <h5 style={{ color: 'red' }} className='c'>SUMMER COLLECTION </h5>
            <h2>Fall-Winter</h2>
            <h2>Collection 2023</h2>
            <p>A Specialist label creating luxery essertials.</p>
            <NavLink as={Link}to='/shop'>
            <Button style={{ background: 'red', border: 'none' }}>
              <span>
                Shop Now
              </span>
              <HiOutlineArrowRight className="ml-2 h-5 w-5" />

            </Button>
            </NavLink>
            
          </div>

        </div>

      </div>
      <div className='container my-5 py-5'>
        <div className="row my-5">
          <div className="col-md-6 mt-5 ">

            <h4>Clothing Collection 2023</h4>
            <NavLink className='text-dark'as={Link}to='/shop'>Shop Now</NavLink>

          </div>

          <div className="col-md-6">
            <img src={img1} className='w-100' alt="" srcset="" />

          </div>
        </div>
        <div className="row my-5">
          <div className="col-md-6">
            <img src={img2} className='w-100' alt="" srcset="" />

          </div>
          <div className="col-md-6 mt-5">

            <h4>Shoes Spring 2023 </h4>
            <NavLink className='text-dark'as={Link}to='/shop'>Shop Now</NavLink>

          </div>


        </div>
        <div className="row my-5">
          <div className="col-md-6 mt-5">

            <h4>Accessories</h4>
            <NavLink className='text-dark'as={Link}to='/shop'>Shop Now</NavLink>

          </div>

          <div className="col-md-6">
            <img className='w-100' src={img3} alt="" srcset="" />

          </div>
        </div>

      </div>
    </div>

  )
}

export default Home

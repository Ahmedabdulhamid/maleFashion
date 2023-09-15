import React from 'react'
import img from './images/img.png'
import { NavLink, useNavigate } from 'react-router-dom'
import { HiShoppingCart } from 'react-icons/hi';
import Button from 'react-bootstrap/Button';
import { AiOutlineCreditCard } from 'react-icons/ai'
import {AiTwotoneDelete}from 'react-icons/ai'
const Cart = ({ increment, decrement, delProduct, arr }) => {
    const navigate=useNavigate()
const handleNav=()=>{
  navigate('/shop')
}
    return (
        <div >
            <div className='container '>
                {arr.length === 0 ? (
                    <div className="row  ">
                        <div className="col-md-9 ">
                            <img src={img} className='w-50' alt="" srcset="" />
                            <div className='my-3 d-flex justify-content-center'>

                                <Button variant='success'onClick={handleNav}>
                                    <HiShoppingCart className="mr-2 h-5 w-5 mx-1" />

                                   Shop now

                                </Button>

                            </div>

                        </div>
                        <div className="col-md-3 col-12 my-3 ">
                            <div className="shoppingdiv" style={{ backgroundColor: "lightgray", width: "100%" }}>
                                <h3>CART TOTAL</h3>

                                <div className="x1" style={{ display: "flex", justifyContent: "space-between" }}>

                                    <h5 > ${arr.map((e) => {
                                        return e.count * e.price
                                    }).reduce((x, y) => {
                                        return x + y
                                    }, 0)}</h5>
                                    <span className='fs-3'><AiOutlineCreditCard /></span>
                                </div>

                                <div className="d-grid gap-2">

                                    <Button className='btnShoping' variant='dark'>pay</Button>
                                </div>



                            </div>
                        </div>

                    </div>
                ) : (
                    <div className="row my-3">
                        <div className="col-md-9">
                            {arr.map((e) => (
                                <div key={e.id}>
                                    <div className="row my-3">
                                        <div className="col-md-2 my-3">
                                            <img src={e.img} className='w-100 my-3' alt="" srcset="" />
                                        </div>
                                        <div className="col-md-2 my-3 position-relative">
                                            <div className='d-flex justify-content-evenly  position-absolute bottom-0 mt-5'>
                                                <Button variant='transparent'onClick={()=>increment(e)}>+</Button>
                                                <Button variant='transparent'>{e.count}</Button>
                                                <Button variant='transparent'onClick={()=>decrement(e)}>-</Button>
                                                <Button variant='transparent'onClick={()=>delProduct(e)}><AiTwotoneDelete/></Button>
                                                <span className='my-2'>${e.count*e.price}</span>
                                            </div>
                                           


                                        </div>
                                    </div>
                                    <hr className='my-3'/>
                                </div>

                            ))}
                        </div>
                        <div className="col-md-3 my-3">
                        <div className="shoppingdiv" style={{ backgroundColor: "lightgray", width: "100%" }}>
                                <h3>CART TOTAL</h3>

                                <div className="x1" style={{ display: "flex", justifyContent: "space-between" }}>

                                    <h5 > ${arr.map((e) => {
                                        return e.count * e.price
                                    }).reduce((x, y) => {
                                        return x + y
                                    }, 0)}</h5>
                                    <span className='fs-3'><AiOutlineCreditCard /></span>
                                </div>

                                <div className="d-grid gap-2">

                                    <Button className='btnShoping' variant='dark'>pay</Button>
                                </div>



                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>

    )
}

export default Cart

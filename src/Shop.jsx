import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { AiTwotoneStar } from 'react-icons/ai'
import { AiOutlineStar } from 'react-icons/ai'
import { BsFillCartPlusFill } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'
import { TbArrowsLeftRight } from 'react-icons/tb'
import './shop.css'
const Shop = ({ products,addToCart }) => {
  console.log(products);
  return (
    <div>

      <div className="container my-3">
        <div className="row d-flex justify-content-center">
          {products.map((e) => (
            <div className="col-md-3 col-sm-6 d-flex justify-content-center  my-3" key={e.id}>

              <Card className='position-relative w-75 h-100  cardparent'>
                <Card.Img variant="top" src={e.img} className='w-100 h-100' />
                <Card.Body>
                  <div className='div1'>
                    <Card.Title>{e.sort
                    }</Card.Title>
                    <Card.Text>
                      {e.name}
                    </Card.Text>
                  </div>

                  <Card.Text className={`position-absolute bg-${e.label.background} text-${e.label.color} top-0  px-3`}>
                    {e.label.name}
                  </Card.Text>
                  <div className='div2'>
                    <div className='d-flex justify-content-between'>
                      <span className='text-success fw-bold'onClick={()=>addToCart(e)}>+Add to cart</span>
                      <BsFillCartPlusFill className='text-danger fs-4'onClick={()=>addToCart(e)} />


                    </div>
                    <Card.Text className={`position-absolute  top-0 end-0 px-3 icon-style`}>
                      <AiOutlineHeart className='fs-4' />


                    </Card.Text>
                    <Card.Text className={`position-absolute icon-style top-0 end-0 px-3 my-5`}>
                      <TbArrowsLeftRight className='fs-4' />

                    </Card.Text>
                  </div>





                  <Card.Text className='text-center'>
                    ${e.price}
                  </Card.Text>
                  <Card.Text className='text-center'>
                    <AiTwotoneStar style={{ color: 'gold' }} />
                    <AiTwotoneStar style={{ color: 'gold' }} />
                    <AiTwotoneStar style={{ color: 'gold' }} />
                    <AiOutlineStar style={{ color: 'gold' }} />
                  </Card.Text>
                </Card.Body>

              </Card>


            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Shop

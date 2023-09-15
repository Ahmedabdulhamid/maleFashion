import React from 'react'
import './header.css'
import {FiLogIn} from 'react-icons/fi'
import Container from 'react-bootstrap/Container';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import img1 from './images/logo.png'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, useNavigate } from 'react-router-dom';
import {CiLogout} from 'react-icons/ci'
console.log(localStorage.login);
const Header = ({arr}) => {
  const navigate=useNavigate()
  const logout=()=>{
    localStorage.clear()
    navigate('/login')
  }
  return (
    <div>
        <div className='bg-dark py-3'>
        <h4 className=' text-center text'>Free Shopping 30-day return or guarantee</h4>
        </div>
        <>
      {[ 'sm'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3 navbar">
          <Container fluid >
            <Navbar.Brand as={Link} to='/'><img src={img1} alt="" srcset="" className='w-100' /></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
              className='w-50'
            >
              <Offcanvas.Header closeButton>
                
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  <Nav.Link as={Link} to='/' className='link'>Home</Nav.Link>
                  <Nav.Link as={Link} to='/shop'className='link'>Shop</Nav.Link>
                  <Nav.Link href="#action2"className='link'>About Us</Nav.Link>
               
                </Nav>
                <Nav className="justify-content-end flex-grow-1 pe-5">
                  <Nav.Link as={Link} to='/cart' className='position-relative mx-2 link'>
                    <AiOutlineShoppingCart className='fs-4'/>
                    <span className='bg-danger position-absolute text-light py-1 px-1 me-1 top-0  'style={{borderRadius:'50%'}}>{arr.length}</span>
                  </Nav.Link>
                  {localStorage.login ?
                  
                  (<Nav.Link  className='link'onClick={logout}><CiLogout className='fs-4 text-primary'/></Nav.Link>)
                  :(<Nav.Link as={Link}to='/login' className='link'><FiLogIn className='fs-4 text-primary'/></Nav.Link>)
                  
                  }
                  
                 
               
                </Nav>
               
               
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
      
    </div>
  )
}

export default Header

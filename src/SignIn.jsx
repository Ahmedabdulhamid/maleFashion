import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {AiFillEyeInvisible}from 'react-icons/ai'
import './header.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'


const SignIn = () => {
    const[typePass,setTypePass]=useState(false)
    const navigate=useNavigate()
    const [email,setEmail]=useState('')
    const [emailLabel,setEmailLabel]=useState(false)
    const [pass,setPass]=useState('')
    const [passLabel,setPassLabel]=useState(false)
    const handleChange=()=>{
        if (typePass===false) {
            setTypePass(true)     
        }
       else{
        setTypePass(false)

       }
    }
    
    const handleForm=(e)=>{
        
        e.preventDefault()
        if (email==='') {
            setEmailLabel(true)

            
        }
        else if(pass===''){
            setEmailLabel(false)
            setPassLabel(true)

        }
        else if(!localStorage.userInfo){
            Swal.fire({
                icon: 'error',
               
                text: 'you don’t have account',
               
              })
             
        }
        else if (JSON.parse(localStorage.userInfo).email!==email ||pass!==JSON.parse(localStorage.userInfo).password2
        ) {
           
            Swal.fire({
                icon: 'error',
               
                text: 'you don’t have account',
               
              })
             
        }
        else{
            const userData={pass,email} 
            localStorage.login=JSON.stringify(userData) 
            navigate('/')
        }

    }
    const handleNav=()=>{
      navigate('/signup')
    }
    return (
      
        <div style={{backgroundColor:'gray '}}>
            {localStorage.userInfo ?( <div className='container d-flex justify-content-center'>
            <Form className='w-75 my-3'onSubmit={handleForm}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>{emailLabel===false?'email':'invalid email'}</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"value={email} onChange={(e)=>setEmail(e.target.value)} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3 " controlId="formBasicPassword">
                    <Form.Label>{passLabel===false?"password":'invalid password'}</Form.Label>
                    <div className='position-relative'>
                    <Form.Control  type={typePass===false?'password':'text'} placeholder="Password" value={pass}onChange={(e)=>setPass(e.target.value)} />
                    <AiFillEyeInvisible className='position-absolute  ai 'style={{cursor:'pointer'}}onClick={handleChange}/>
                        
                    </div>
                   
                </Form.Group>
               <div className='d-flex justify-content-start'>
               <Button variant="primary" type="submit">
                    login
                </Button>
                <Button variant="primary" type="submit"onClick={handleNav} className='mx-3'>
                    create account
                </Button>
               </div>
             
            </Form>
            </div>):( <div className='container d-flex justify-content-center'>
            <Form className='w-75 my-3'onSubmit={handleForm}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>{emailLabel===false?'email':'invalid email'}</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3 " controlId="formBasicPassword">
                    <Form.Label>{passLabel===false?"password":'invalid password'}</Form.Label>
                    <div className='position-relative'>
                    <Form.Control  type={typePass===false?'password':'text'} placeholder="Password" value={pass} onChange={(e)=>setPass(e.target.value)}/>
                    <AiFillEyeInvisible className='position-absolute  ai 'style={{cursor:'pointer'}}onClick={handleChange}/>
                        
                    </div>
                   
                </Form.Group>
               <div className='d-flex justify-content-start'>
               <Button variant="primary" type="submit">
                    login
                </Button>
                <Button variant="primary" type="submit"onClick={handleNav} className='mx-3'>
                    create account
                </Button>
               </div>
             
            </Form>
            </div>)}
           
           
        </div>
    )
}

export default SignIn

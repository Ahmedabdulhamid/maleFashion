import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
const SignUp = () => {
  const [user,setUser]=useState([])
  const [spin,setSpin]=useState(true)
   
    const navigate2=useNavigate()
    
    const [name2,setName2]=useState("");
    const [password2,setPassword2]=useState("")
    const [nameLabel2,setNameLabe2]=useState(true)
    const [passLabel2,setPassLabe2]=useState(true)
    const [firstName,setFirstName]=useState("")
    const [lastName,setLastName]=useState("")
    const [lastNameLabel,setLastNameLabel]=useState(true);
    const [firstNameLabel,setFirstNameLabel]=useState(true)
    const [email,setEmail]=useState("")
    const [emailLabel,setEmailLabel]=useState(true)
    const [city ,setCity]=useState("");
    const [gender,setGender]=useState("");
    const [cityLabel,setCityLabel]=useState(true);
    const [genderLabel,setGenderLabel]=useState(true)
    const [image,setImahe]=useState("");
    const [imageLabel,setImageLabel]=useState(true);
    const [emailAdress,setEmailAdress]=useState("");
    const [emailAdressLabel,setEmailAdressLabel]=useState(true)
    const [checkBox,setCheckBox]=useState(false)
    const [img,setImage]=useState("")
    const [imgLabel,aetImageLabel]=useState(true)
    const handlForm2=(e)=>{
      //const userInformation=JSON.parse(localStorage.userLife)
      e.preventDefault();
      if(firstName===''){
        setFirstNameLabel(false)

      }
      else if(lastName===''){
        setFirstNameLabel(true)
        setLastNameLabel(false)
       
      }
      else if (email==='') {
       
        setFirstNameLabel(true)
        setLastNameLabel(true)
        setEmailLabel(false)
        
      }
     else if (name2==='') {
      
      setFirstNameLabel(true)
      setLastNameLabel(true)
      setEmailLabel(true)
        setNameLabe2(false)
       


        
      }
      else if (password2==='') {
       
        setFirstNameLabel(true)
        setLastNameLabel(true)
        setEmailLabel(true)
          setNameLabe2(true)
        
        setPassLabe2(false)
        
      }
      else if(img===''){
        setFirstNameLabel(true)
        setLastNameLabel(true)
        setEmailLabel(true)
          setNameLabe2(true)
        
        setPassLabe2(true)
        setImageLabel(false)
      }
      else if(city===''){
        
        setFirstNameLabel(true)
        setLastNameLabel(true)
        setEmailLabel(true)
          setNameLabe2(true)
       
        setPassLabe2(true)
        setCityLabel(false)
      }
      else if(gender===''){
        setFirstNameLabel(true)
        setLastNameLabel(true)
        setEmailLabel(true)
        setNameLabe2(true)
        setPassLabe2(true)
        setCityLabel(true)
        setImageLabel(true)

        setGenderLabel(false)
      }
      else if(emailAdress!==email||emailAdress===''){
        setFirstNameLabel(true)
        setLastNameLabel(true)
        setEmailLabel(true)
        setNameLabe2(true)
        setPassLabe2(true)
        setCityLabel(true)
        setGenderLabel(true)
        setImageLabel(true)

        setEmailAdressLabel(false)

      }
     
      
     else{
      const userData={password2,email}  
     
        navigate2("/login")
        localStorage.userInfo=JSON.stringify(userData)
    
     

     }
     
    }
    
  return (
    <div>
      <div style={{backgroundColor:"gray"}}className='py-3 '>
      <div className='container'>
      <Form onSubmit={handlForm2}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
       
        <div className="row">
        
        <div className="col-md-6 col-12 ">
        <Form.Label>{firstNameLabel?"First Name":"invalid first name "}</Form.Label>
        <Form.Control type="text" placeholder="Enter first name"className='w-100'value={firstName}onChange={(e)=>setFirstName(e.target.value)} />
        
        </div>
        <div className="col-md-6 col-12">
        <Form.Label>{lastNameLabel?"Last Name":"invalid last name"}</Form.Label>
        <Form.Control type="text" placeholder="Enter last name"className='w-100'value={lastName} onChange={(e)=>setLastName(e.target.value)} />
        </div>
        </div>
       
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>{nameLabel2?"User name":"invalid name"}</Form.Label>
        <Form.Control type="text" placeholder="Enter user name" value={name2}onChange={(e)=>setName2(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>{emailLabel? "Email":"invalid email"}</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>{passLabel2===true?"password":"invalid password"}</Form.Label>
        <Form.Control type="password" placeholder="password"value={password2}onChange={(e)=> setPassword2(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>{imageLabel?"Image":"invalid image"}</Form.Label>
        <Form.Control type="text"value={img} onChange={(e)=>setImage(e.target.value)} placeholder='image'/>
      </Form.Group>
      <div className="row">
        <div className="col-md-4 col-12 my-3 ">
        <Form.Label>{cityLabel?"City":"invalid city"}</Form.Label>
        <Form.Control type="text" placeholder="enter city"className='w-100'value={city}onChange={(e)=>setCity(e.target.value)} />
        </div>
        <div className="col-md-4 col-12 my-3 ">
        <Form.Label for="a">{genderLabel?"Gender":"please choose your Gender "}</Form.Label>
        <Form.Select aria-label="Default select example"value={gender}onChange={(e)=>setGender(e.target.value)}>
          <option value={'select your gender'}>select your gender</option>
          <option value={'male'}>male</option>
          <option value={'famale'}>female</option>
          
        </Form.Select>
        
        
       
        </div>
        <div className="col-md-4 col-12 my-3 ">
        <Form.Label>{emailAdressLabel?"Email Adress":"invalid"}</Form.Label>
        <Form.Control type="email" placeholder="Enter email"className='w-100' value={emailAdress}onChange={(e)=>setEmailAdress(e.target.value)} />
        </div>


      </div>



      
      <Button className='bg-primary'onClick={handlForm2}>
       Create Account
      </Button>
      
       
    </Form>
      </div>
    
    </div>
    </div>
  )
}

export default SignUp

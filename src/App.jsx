import React, { useState } from 'react'
import data from './data'
import Footer from './Footer'
import {Route,Routes}from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Shop from './Shop'
import Cart from './Cart'
import SignUp from './SignUp'
import SignIn from './SignIn'
const App = () => {
  const [products,setProducts]=useState(data)
  const [arr,setArr]=useState([])

  const delProduct=(product)=>{
    let newArray=arr.filter((e)=>{
      if(product.id!==e.id){
        
       
        return e

      }
     
    })
    setArr(newArray)

  }
  const addToCart=(product)=>{
   console.log('clickevent');
    let check =arr.some((e)=>{
      return e.id===product.id
    })
   
    if(check){
      let newarray=arr.map((e)=>{
        if(e.id===product.id){
          e.count++

        }
        return e
      })
      setArr(newarray)
    

    }
    else{
     product.count=1
    setArr([...arr,product]) 


    }

  }
  const increment=(product)=>{
   let newarray=arr.map((e)=>{
    if(e.id===product.id){
      e.count++

    }
    return e
   })
   setArr(newarray)

  }
  const decrement=(product)=>{
    let newarray=arr.map((e)=>{
      if(e.id===product.id && e.count>1){
        e.count--

      }
      return e
    })
    setArr(newarray)

  }
 
  return (
    <div>
      <Header arr={arr}/>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/shop'element={  <Shop  products={products} addToCart={addToCart} />    }/>
        <Route path='/cart'element={  <Cart  products={products} increment={increment} decrement={decrement}delProduct={delProduct} arr={arr}/>    }/>
        <Route path='/login'element={  <SignIn />    }/>
        <Route path='/signUp'element={  <SignUp />    }/>


      </Routes>
      <Footer/>
    </div>
  )
}

export default App


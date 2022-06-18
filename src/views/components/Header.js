import React,{useEffect, useState} from 'react'
import {AiOutlineMenu} from "react-icons/ai";
import NavBar from './NavBar';

function Header() {
     const [open, setOpen]= useState(true);

     useEffect(()=>{
       if(window.innerWidth<600){
         setOpen(false)
       }
     },[])


  return (
     
    <div className='header'>
          <h1 className='logo'>100Green</h1>
         <span className='burgerMenu' onClick={()=>{setOpen(!open)}}><AiOutlineMenu/></span>
          <NavBar setOpen={setOpen} classes={open===true ? "navBar": "navBarClose"}/>
    </div>
  )
}

export default Header
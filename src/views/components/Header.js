import React,{useEffect, useState} from 'react'
import {AiOutlineMenu} from "react-icons/ai";
import NavBar from './NavBar';
import ResponsiveAppBar from './ResponsiveAppBar';

function Header() {
     const [open, setOpen]= useState(true);

     useEffect(()=>{
       if(window.innerWidth<600){
         setOpen(false)
       }
     },[])


  return (
     
    <div className='header'>
         <ResponsiveAppBar/>
    </div>
  )
}

export default Header
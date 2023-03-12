import React from 'react'
import { useSelector } from 'react-redux';
import CartElement from "./CartElement";
import stile from "./style/cart.module.css"
import CardHome from './CardHome';
import { Box } from '@mui/material';

function CartBox() {
  const {cart}=useSelector(state=>state);
  

  if(cart.elements.length===0) return(<h2 style={{ textAlign:"center" }}>nessun elemento nel carrelo</h2>)
  
  return (
    <Box sx={{ display:"flex", justifyContent:"center",alignItems:"center",flexDirection:{xs:"column", md:"row"} }} >
       {cart.elements.map((element)=><CardHome key={element.id} img={element.image} title={element.title} text={`${element.price}€`}/>)}
         

    </Box>
  )
}

export default CartBox
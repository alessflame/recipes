import React from 'react'
import { useSelector } from 'react-redux';
import CartElement from "./CartElement";
import stile from "./style/cart.module.css"

function CartBox() {
  const {cart}=useSelector(state=>state);
  

  if(cart.elements.length===0) return(<h2>nessun elemento nel carrelo</h2>)
  
  return (
    <div className={stile.box}>
       {cart.elements.map((element)=><CartElement key={element.id} {...element}/>)}
         

    </div>
  )
}

export default CartBox
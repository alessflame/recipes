import React from 'react'
import stile from "./style/cart.module.css"

function CartElement({id,title,image,price,text}) {
  return (
    <div className={stile.card}>

         <h3>{title}</h3>
         <img src={image} alt="prodotto"></img>
         <span className={stile.price}>{price}$</span>
        




    </div>
  )
}

export default CartElement
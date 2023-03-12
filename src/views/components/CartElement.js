import React from 'react'
import stile from "./style/cart.module.css"
import CardHome from './CardHome'

function CartElement({id,title,image,price,text}) {
  return (
    <>
    <CardHome img={image}/>
    </>
  )
}

export default CartElement
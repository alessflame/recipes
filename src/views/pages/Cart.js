import React from 'react'
import { useSelector } from 'react-redux'
import CartBox from '../components/CartBox'
import TotalPriceCart from '../components/TotalPriceCart'

function Cart() {
 
   const{cart}= useSelector(state=>state);
    console.log(cart);
  return (
    <div>
      <CartBox/>
      <TotalPriceCart/>
       </div>
  )
}

export default Cart
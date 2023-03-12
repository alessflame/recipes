import React from 'react'
import { useSelector } from 'react-redux'
import CartBox from '../components/CartBox'
import TotalPriceCart from '../components/TotalPriceCart'

function Cart() {
 
   const{cart}= useSelector(state=>state);
    console.log(cart);
  return (
    <div style={{ marginTop:"50px" }}>
      <CartBox/>
      <TotalPriceCart/>
       </div>
  )
}

export default Cart
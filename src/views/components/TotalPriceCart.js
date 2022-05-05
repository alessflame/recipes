import React from 'react'
import { useSelector } from 'react-redux'
import stile from "./style/cart.module.css"
import { useDispatch } from 'react-redux'
import {deleteCart} from "../../redux/slice/cartSlice"
import {setModal} from "../../redux/slice/modalSlice"


function TotalPriceCart() {
  const dispatch=useDispatch()

  const emptyCart=()=>{
     dispatch(deleteCart());
  }
  const payCart=()=>{
    if(cart.total===0){ dispatch(setModal("nessun elemento nel carrello")); return}
    dispatch(setModal("Completa i tuoi dati di pagamento"));
    return
 }

     const {cart}= useSelector(state=>state)
  return (
    <div className={stile.totalPriceBox}>
         <h3>in totale:{cart.priceTotal}$</h3>
         <section>
         <span className='button' onClick={payCart}>Acquista</span>
         <span className='button' onClick={emptyCart}>Svuota</span></section>
    </div>
  )
}

export default TotalPriceCart
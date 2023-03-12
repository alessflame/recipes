import React from 'react'
import { useSelector } from 'react-redux'
import stile from "./style/cart.module.css"
import { useDispatch } from 'react-redux'
import {deleteCart} from "../../redux/slice/cartSlice"
import {setModal} from "../../redux/slice/modalSlice"
import { Box, Button, Typography } from '@mui/material'


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
    <Box className={stile.totalPriceBox}>
         <Typography as="h3">in totale:{cart.priceTotal}€</Typography>
         <Box>
         <Button color="success" variant="contained" sx={{   margin:"10px" }} onClick={payCart}>Acquista</Button>
         <Button color="error" variant="outlined" sx={{   margin:"10px" }} onClick={emptyCart}>Svuota</Button>
         </Box>
    </Box>
  )
}

export default TotalPriceCart
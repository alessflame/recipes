import { createSlice } from "@reduxjs/toolkit";

const cartSlice= createSlice({
     name:"cart",

     initialState:{
          elements:[],
          total:0,
          priceTotal:0
     },

     reducers:{
          addToCart:(state, action)=>{
               state.elements.push(action.payload);
               state.total=state.elements.length;
               state.priceTotal += action.payload.price;
               
          },

          deleteCart:(state)=>{
               state.elements=[];
               state.total=state.elements.length;
               state.priceTotal=0;
          }
     }

});


export const {addToCart, deleteCart} = cartSlice.actions;
const {reducer} = cartSlice;
export default reducer;
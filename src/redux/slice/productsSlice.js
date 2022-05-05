import { createSlice } from "@reduxjs/toolkit";

const productsSlice= createSlice({
     name:"products",
     initialState:{
          data:[],
          isError:false,
          total: 0,
     },
     reducers:{
          addProducts:(state, action)=>{
               state.data= action.payload;
               state.total= state.data.length;
          },
          deleteProducts:(state)=>{
               state.data= [];
               state.total= state.data.length;
          }

     }
})


export const {addProducts, deleteProducts} = productsSlice.actions;
 const {reducer} = productsSlice;

 export default reducer;
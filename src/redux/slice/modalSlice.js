import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
     name:"name",
     initialState:{
          isOpen:false,
          text:""
     },

     reducers:{

          setModal:(state, action)=>{
               state.isOpen=true;
               state.text=action.payload;
          },

          unsetModal:(state)=>{
               state.text="";
               state.isOpen=false;
          }
          
     }
});


export const {setModal, unsetModal} = modalSlice.actions;
const {reducer}= modalSlice;

export default reducer;
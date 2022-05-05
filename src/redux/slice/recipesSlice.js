import {createSlice} from "@reduxjs/toolkit";

const recipesSlice=createSlice({
     name: "recipes",

     initialState:{
          data:[],
          total: 0,
          filter:"",
          singleRecipe:{},
          singleRecipeNutrition:{}

     },
     reducers:{

          addRecipes:(state, action)=>{
               state.data= action.payload;
               state.total= state.data.length },

          deleteRecipes:(state)=>{
               state.data= []; },


          addFilter:(state,action)=>{
              state.filter=action.payload;
          },

          addSingleRecipe:(state,action)=>{
              state.singleRecipe= action.payload;
          },
          deleteSingleRecipe:(state)=>{
               state.singleRecipe={}
          },

          addSingleRecipeNutrition:(state,action)=>{
               state.singleRecipeNutrition= action.payload;

          },
          deleteSingleRecipeNutrition:(state)=>{
               state.singleRecipeNutrition={}
          },
          
     }
})

export const {addRecipes, deleteRecipes, addFilter, addSingleRecipeNutrition , deleteSingleRecipeNutrition,
     deleteSingleRecipe, addSingleRecipe} = recipesSlice.actions;
 const {reducer} = recipesSlice;

 export default reducer;
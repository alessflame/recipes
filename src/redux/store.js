import { configureStore } from "@reduxjs/toolkit";
import recipesReducer from "./slice/recipesSlice";
import productsReducer from "./slice/productsSlice"
import cartReducer from "./slice/cartSlice";
import modalReducer from "./slice/modalSlice";


export const store= configureStore({
     reducer:{
          recipes: recipesReducer,
          products: productsReducer,
          cart: cartReducer,
          modal: modalReducer
     }
})


import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFilter } from '../../redux/slice/recipesSlice';
import stile from "./style/recipes.module.css"
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

function SearchRecipe() {

     const {recipes} = useSelector((state)=> state);
     const dispatch= useDispatch();

     const [isFocus,setIsFocus]=useState(false);

     const insertFilter=(e)=>{
          let text= e.target.value;
          console.log(recipes);
          dispatch(addFilter(text));
          console.log(text);
     }


  return (
    <div className={stile.form}>
         <h3 className={stile.textTitle}>Cerca la tua ricetta</h3>
         <input className={stile.text} type="text" onChange={insertFilter} />
    </div>
  )
}

export default SearchRecipe




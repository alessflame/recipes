import React from 'react'
import stile from "./style/recipes.module.css"
import {Link} from "react-router-dom";
import { useDispatch} from 'react-redux';
import {addSingleRecipe} from "../../redux/slice/recipesSlice";


function Recipe({title, image, id, isCard}) {

  const dispatch= useDispatch();
  // const {recipes}= useSelector(state=>state);


  const selectedRecipe= ()=>{

  const recipeObj={
    title:title,
    image:image,
    id:id,
    isCard:false
  }

  
dispatch(addSingleRecipe(recipeObj));
// console.log(recipes);
};




  return (

    <div className={stile.card} onClick={ selectedRecipe}>
         <h2>{title}</h2>
         <img src={image} alt="ricetta"/>
        {isCard===true ? 
        <span className='button' ><Link to={`/recipes/${id}`} >Esplora</Link></span> :
        null}
    </div>
  )
}

export default Recipe
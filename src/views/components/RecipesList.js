import React,{useCallback, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchRecipes } from '../../redux/helper';
import stile from "./style/recipes.module.css"
import Recipe from './Recipe'



function RecipesList() {

 const {recipes} = useSelector((state) => state);
 const dispatch= useDispatch();
const data=recipes.data;


 const dataFilter=()=>{
   
    let filterData = data.filter((element)=>  element.title.toLowerCase().includes(recipes.filter.toLowerCase()));
    // let newData= filterData.map((recipe)=>{return <Recipe key={recipe.id} {...recipe}/>})
    // console.log(filterData);
     return filterData;
 }


  const resolveFetch= useCallback(()=>{
     
      fetchRecipes(dispatch);

  
  },[dispatch])

  useEffect(()=>{
    resolveFetch();
  },[resolveFetch])

  return (

  
    <div className={stile.container} onLoad={dataFilter} >
   
  
  {   dataFilter().map((recipe)=>{return <Recipe key={recipe.id} isCard={true} {...recipe}/>})}
   
   </div>
 
  )
}

export default RecipesList
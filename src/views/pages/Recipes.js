import React from 'react'
import RecipesList from '../components/RecipesList'
import SearchRecipe from '../components/SearchRecipe'

function Recipes() {
  return (
   
    <div className='recipes'>
      <SearchRecipe/>
      <RecipesList/>
    </div>
  )
}

export default Recipes
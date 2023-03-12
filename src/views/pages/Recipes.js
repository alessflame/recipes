import React from 'react'
import RecipesList from '../components/RecipesList'
import SearchInput from '../components/SearchInput'

function Recipes() {
  return (
   
    <div className='recipes'>
      <SearchInput/>
      <RecipesList/>
    </div>
  )
}

export default Recipes
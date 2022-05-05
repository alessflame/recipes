import axios from "axios"
import {addRecipes, deleteRecipes, addSingleRecipeNutrition, deleteSingleRecipeNutrition} from "./slice/recipesSlice"




const apiKey= process.env.REACT_APP_API_KEY;

// eslint-disable-next-line no-unused-expressions
export const fetchRecipes= async (dispatch) =>{

     try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?diet=vegetarian&number=100&apiKey=${apiKey}`);
        dispatch(addRecipes(response.data.results));
     } catch (error) {
        dispatch(deleteRecipes());
     }
}  

export const fetchRecipeNutrition= (id)=>  { return async(dispatch )=>{

   try{
      const response= await axios.get(`https://api.spoonacular.com/recipes/${id}/nutritionWidget.json?apiKey=${apiKey}`);
      // console.log(response.data);
      dispatch(addSingleRecipeNutrition({...response.data}));
   }catch(error){
      dispatch(deleteSingleRecipeNutrition());
   }
}

}

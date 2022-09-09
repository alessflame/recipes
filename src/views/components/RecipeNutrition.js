import React, { useCallback, useEffect } from "react";
import { fetchRecipeNutrition } from "../../redux/helper";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import NutrientsCard from "./NutrientsCard";
import Recipe from "./Recipe";
import stile from "./style/recipes.module.css";

/* <article className={stile.RecipeNutritionBox}>
<section className={stile.goodBox}><h2>Good:</h2> <span>{recipes.singleRecipeNutrition.good.map((item,index)=> <NutrientsCard key={index} {...item}/>)}</span></section> 
<section className={stile.badBox}><h2>Bad:</h2><span>{recipes.singleRecipeNutrition.bad.map((item,index)=> <NutrientsCard key={index} {...item}/>)}</span></section> 
</article > */

function RecipeNutrition() {
  const { id } = useParams();
  const { recipes } = useSelector((state) => state);
  const dispatch = useDispatch();

  const good = recipes.singleRecipeNutrition.good;
  const bad = recipes.singleRecipeNutrition.bad;

  const fetchData = useCallback(() => {
    dispatch(fetchRecipeNutrition(id));
  }, [dispatch, id]);

  useEffect(() => fetchData(), [fetchData]);

  return (
    <div className={stile.RecipeNutritionContainer}>
      <Recipe {...recipes.singleRecipe} isCard={false} />
      <h1>Nutrients:</h1>
      {good !== undefined && bad !== undefined ? (
        <article className={stile.RecipeNutritionBox}>
          <section className={stile.goodBox}>
            <h2>Good:</h2>
            <span>
              {recipes.singleRecipeNutrition.good.map((item, index) => (
                <NutrientsCard key={index} {...item} />
              ))}
            </span>
          </section>
          <section className={stile.badBox}>
            <h2>Bad:</h2>
            <span>
              {recipes.singleRecipeNutrition.bad.map((item, index) => (
                <NutrientsCard key={index} {...item} />
              ))}
            </span>
          </section>
        </article>
      ) : null}
    </div>
  );
}

export default RecipeNutrition;

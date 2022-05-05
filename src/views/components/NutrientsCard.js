import React from 'react';
import stile from "./style/recipes.module.css"

function NutrientsCard({title,percentOfDailyNeeds, amount,int }) {
  return (
    <div className={stile.cardNutrition}>
         <h3>{title}</h3>
         <section className={stile.cardNutritionValues}>
         <samp className={stile.value}> <i>value:</i> <b>{amount}</b></samp>
         <span className={stile.percent}><i>daily Needs:</i> <b>{percentOfDailyNeeds}%</b></span>
         </section>
    </div>
  )
}

export default NutrientsCard
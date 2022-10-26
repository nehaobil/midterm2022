import React from "react";

function MealCard({mMeal, mInstructions, mImageSource, mIngredient0, mIngredient1, mIngredient2, mIngredient3, mIngredient4, mIngredient5, mIngredient6, mIngredient7, mIngredient8, mIngredient9, mIngredient10, mIngredient11, mIngredient12, mIngredient13, mIngredient14}) {
    return(
    <div className="MealCard">
        <h2>{mMeal}</h2>
        <div className="MealCard--ingredients">
            <p>{mIngredient0}, {mIngredient1}, {mIngredient2}, {mIngredient3}, {mIngredient4}, {mIngredient5}, {mIngredient6}, {mIngredient7}, {mIngredient8}, {mIngredient9}, {mIngredient10}, {mIngredient11}, {mIngredient12}, {mIngredient13}, {mIngredient14}</p>
        </div>
        <h3>{mInstructions}</h3>
    </div>
    )
    //use <strong> </strong> to make something bold
}

export default MealCard;
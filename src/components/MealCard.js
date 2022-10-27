import React from "react";

function MealCard({meal, instructions, imagesource, ingredient0, ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, ingredient7, ingredient8, ingredient9, ingredient10, ingredient11, ingredient12, ingredient13, ingredient14}) {
    return(
    <div className="MealCard">
        <h2 className="mealName">{meal}</h2>
        <div className="MealCard--ingredients">
            <p>{ingredient1}&nbsp;&nbsp;{ingredient2}&nbsp;&nbsp;{ingredient3}&nbsp;&nbsp;{ingredient4}&nbsp;&nbsp;{ingredient5}&nbsp;&nbsp;{ingredient6}&nbsp;&nbsp;{ingredient7}&nbsp;&nbsp;{ingredient8}&nbsp;&nbsp;{ingredient9}&nbsp;&nbsp;{ingredient10}&nbsp;&nbsp;{ingredient11}&nbsp;&nbsp;{ingredient12}&nbsp;&nbsp;{ingredient13}&nbsp;&nbsp;{ingredient14}</p>
        </div>
        <h3 className="mealInst">{instructions}</h3>
    </div>
    )
    //use <strong> </strong> to make something bold
}

export default MealCard;
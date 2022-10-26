import React from "react";

function DrinkCard({drink, instructions, imagesource, ingredient0, ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, ingredient7, ingredient8, ingredient9, ingredient10, ingredient11, ingredient12, ingredient13, ingredient14, 
}) {
    return(
    <div className="DrinkCard">
        <h2>{drink}</h2>
        <div className="DrinkCard--ingredients">
            <p>{imagesource}, {ingredient0}, {ingredient1}, {ingredient2}, {ingredient3}, {ingredient4}, {ingredient5}, {ingredient6}, {ingredient7}, {ingredient8}, {ingredient9}, {ingredient10}, {ingredient11}, {ingredient12}, {ingredient13}, {ingredient14}</p>
        </div>
        <h3>{instructions}</h3>
    </div>
    )
    //use <strong> </strong> to make something bold
}

export default DrinkCard;
import React from "react";

function DrinkCard({drink, instructions, alcohol, ingredient0, ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, ingredient7, ingredient8, ingredient9, ingredient10, ingredient11, ingredient12, ingredient13, ingredient14, 
}) 
{
    const image = document.getElementById("image");
    var iconUrl;
    if (alcohol=="Alcoholic")
    {
        iconUrl= "https://live.staticflickr.com/65535/52456947791_d4f088cf7d_m.jpg";
    }
    else
    {
        iconUrl= "https://live.staticflickr.com/65535/52457478848_86fe70755b_c.jpg";
    }
    
    return(
    <div className="DrinkCard">
        <h2 className="drinkName">{drink}</h2>
        <img src="" id="image"/>
        <div className="DrinkCard--ingredients">
            <p>{ingredient1}&nbsp;&nbsp;{ingredient2}&nbsp;&nbsp;{ingredient3}&nbsp;&nbsp;{ingredient4}&nbsp;&nbsp;{ingredient5}&nbsp;&nbsp;{ingredient6}&nbsp;&nbsp;{ingredient7}</p>
        </div>
        <h3 className="drinkIns">{instructions}</h3>
    </div>
    )
    image.src= iconUrl;
    //use <strong> </strong> to make something bold
}

export default DrinkCard;
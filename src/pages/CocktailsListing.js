import React, { useState, useEffect } from "react";
import axios from "axios";

function Cocktails (){
    const [cocktailData, setCocktailData] = useState({});

    const URL = "www.themealdb.com/api/json/v1/1/search.php?f=a";

    useEffect(() => {
        axios
            .get(URL)
            .then ((response) => {
                setCocktailData(response.data);
        })
        .catch((error) => {
            setCocktailData({});
        });
    }, []);

    const {
        cocktailName,
        cocktailIng,
    } = useMemo(() => {
        return {
            
        }
    }, [cocktailData]);
    

    return (
        <div>
          {cocktailData.map((cocktail, i) => (
            <CocktailCard/>
          ))}  
        </div>
    )

}

export default Cocktails;
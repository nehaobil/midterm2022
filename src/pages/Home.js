import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import DrinkCard from "../components/DrinkCard";
import MealCard from "../components/MealCard";
//import Header from "../components/Header";

function Home() {
    const [drinkData, setDrinkData] = useState({});
    const [mealData, setMealData] = useState({});
    const [pair, setPair] = useState("a");
    const [searchParams] = useSearchParams();

    const pairings = {"a": ["11007", "52772"], "b": ["17207", "53065"]}; // drink, meal

    useEffect(() => {
        setPair(searchParams.get("pair"));
        // console.log(pairings[pair][0]);
        axios
        .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${pairings[pair][0]}`) //${pairings[0][0]}
        .then(function(response){
            setDrinkData(response.data.drinks[0]);
        })
        .catch(function(error){
            setDrinkData({});
        });
        // axios
        // .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${pairings[pair][1]}`)
        // .then(function(response){
        //     setMealData(response.data);
        // })
        // .catch(function(error){
        //     setMealData({});
        // });
    }, []);

    const {
        dDrink,
        dInstructions,
        dImageSource,
        dIngredient0,
        dIngredient1,
        dIngredient2,
        dIngredient3,
        dIngredient4,
        dIngredient5,
        dIngredient6,
        dIngredient7,
        dIngredient8,
        dIngredient9,
        dIngredient10,
        dIngredient11,
        dIngredient12,
        dIngredient13,
        dIngredient14,
    } = useMemo(() => {
        const main = drinkData;
        return {
            dDrink: main.strDrink,
            dInstructions: main.strInstructions,
            dIngredient1: main.strIngredient1,
            dIngredient2: main.strIngredient2,
            dIngredient3: main.strIngredient3,
            dIngredient4: main.strIngredient4,
            dIngredient5: main.strIngredient5,
            dIngredient6: main.strIngredient6,
            dIngredient7: main.strIngredient7,
            dIngredient8: main.strIngredient8,
            dIngredient9: main.strIngredient9,
            dIngredient10: main.strIngredient10,
            dIngredient11: main.strIngredient11,
            dIngredient12: main.strIngredient12,
            dIngredient13: main.strIngredient13,
            dIngredient14: main.strIngredient14,
        };
    }, [drinkData]);
    
     const {
        mMeal,
        mInstructions,
        mImageSource,
        mIngredient0,
        mIngredient1,
        mIngredient2,
        mIngredient3,
        mIngredient4,
        mIngredient5,
        mIngredient6,
        mIngredient7,
        mIngredient8,
        mIngredient9,
        mIngredient10,
        mIngredient11,
        mIngredient12,
        mIngredient13,
        mIngredient14,
    } = useMemo(() => {
        const main = mealData;

        return {
            mMeal: main.strMeal,
            mInstructions: main.strInstructions,
            mIngredient1: main.strIngredient1,
            mIngredient2: main.strIngredient2,
            mIngredient3: main.strIngredient3,
            mIngredient4: main.strIngredient4,
            mIngredient5: main.strIngredient5,
            mIngredient6: main.strIngredient6,
            mIngredient7: main.strIngredient7,
            mIngredient8: main.strIngredient8,
            mIngredient9: main.strIngredient9,
            mIngredient10: main.strIngredient10,
            mIngredient11: main.strIngredient11,
            mIngredient12: main.strIngredient12,
            mIngredient13: main.strIngredient13,
            mIngredient14: main.strIngredient14,
         };
     }, [mealData]);
    console.log(dDrink)
    return (
    <div>
        
        <div className = "Pairing" >
            <DrinkCard drink={dDrink} instructions={dInstructions} imagesource={dImageSource} ingredient0={dIngredient0} ingredient1={dIngredient1} ingredient2={dIngredient2} ingredient3={dIngredient3} ingredient4={dIngredient4} ingredient5={dIngredient5} ingredient6={dIngredient6} ingredient7={dIngredient7} ingredient8={dIngredient8} ingredient9={dIngredient9} ingredient10={dIngredient10} ingredient11={dIngredient11} ingredient12={dIngredient12} ingredient13={dIngredient13} ingredient14={dIngredient14} />
            <MealCard meal={mMeal} instructions={mInstructions} imagesource={mImageSource} ingredient0={mIngredient0} ingredient1={mIngredient1} ingredient2={mIngredient2} ingredient3={mIngredient3} ingredient4={mIngredient4} ingredient5={mIngredient5} ingredient6={mIngredient6} ingredient7={mIngredient7} ingredient8={mIngredient8} ingredient9={mIngredient9} ingredient10={mIngredient10} ingredient11={mIngredient11} ingredient12={mIngredient12} ingredient13={mIngredient13} ingredient14={mIngredient14}/> 
        </div>
    </div>
    )
}

export default Home;
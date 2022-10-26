import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import DrinkCard from "../components/DrinkCard";
import MealCard from "../components/MealCard";
import Header from "../components/Header";

function Home() {
    const [drinkData, setDrinkData] = useState({});
    const [mealData, setMealData] = useState({});
    const [pair, setPair] = useState("a");
    const [searchParams] = useSearchParams();

    const pairings = {"a": ["11003", "52796"], "b": ["17207", "53065"], "c": ["13020", "52854"], "d": ["12658", "53013"]}; // drink, meal

    useEffect(() => {
        setPair(searchParams.get("pair"));
        axios
        .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${pairings[pair][0]}`) //${pairings[0][0]}
        .then(function(response){
            setDrinkData(response.data.drinks[0]);
        })
        .catch(function(error){
            setDrinkData({});
        });
        axios
        .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${pairings[pair][1]}`)
        .then(function(response){
            setMealData(response.data.meals[0]);
        })
        .catch(function(error){
            setMealData({});
        });
    }, [drinkData, mealData]);

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
        return {
            dDrink: drinkData.strDrink,
            dInstructions: drinkData.strInstructions,
            dIngredient1: drinkData.strIngredient1,
            dIngredient2: drinkData.strIngredient2,
            dIngredient3: drinkData.strIngredient3,
            dIngredient4: drinkData.strIngredient4,
            dIngredient5: drinkData.strIngredient5,
            dIngredient6: drinkData.strIngredient6,
            dIngredient7: drinkData.strIngredient7,
            dIngredient8: drinkData.strIngredient8,
            dIngredient9: drinkData.strIngredient9,
            dIngredient10: drinkData.strIngredient10,
            dIngredient11: drinkData.strIngredient11,
            dIngredient12: drinkData.strIngredient12,
            dIngredient13: drinkData.strIngredient13,
            dIngredient14: drinkData.strIngredient14,
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
        return {
            mMeal: mealData.strMeal,
            mInstructions: mealData.strInstructions,
            mIngredient1: mealData.strIngredient1,
            mIngredient2: mealData.strIngredient2,
            mIngredient3: mealData.strIngredient3,
            mIngredient4: mealData.strIngredient4,
            mIngredient5: mealData.strIngredient5,
            mIngredient6: mealData.strIngredient6,
            mIngredient7: mealData.strIngredient7,
            mIngredient8: mealData.strIngredient8,
            mIngredient9: mealData.strIngredient9,
            mIngredient10: mealData.strIngredient10,
            mIngredient11: mealData.strIngredient11,
            mIngredient12: mealData.strIngredient12,
            mIngredient13: mealData.strIngredient13,
            mIngredient14: mealData.strIngredient14,
         };
     }, [mealData]);

    return (
    <div>
        <Header/>
        <div className = "pairing" >
            <div className="pairing--drinkCard">
                <DrinkCard drink={dDrink} instructions={dInstructions} imagesource={dImageSource} ingredient0={dIngredient0} ingredient1={dIngredient1} ingredient2={dIngredient2} ingredient3={dIngredient3} ingredient4={dIngredient4} ingredient5={dIngredient5} ingredient6={dIngredient6} ingredient7={dIngredient7} ingredient8={dIngredient8} ingredient9={dIngredient9} ingredient10={dIngredient10} ingredient11={dIngredient11} ingredient12={dIngredient12} ingredient13={dIngredient13} ingredient14={dIngredient14} />
            </div>
            <div className="pairing--mealCard">
                <MealCard meal={mMeal} instructions={mInstructions} imagesource={mImageSource} ingredient0={mIngredient0} ingredient1={mIngredient1} ingredient2={mIngredient2} ingredient3={mIngredient3} ingredient4={mIngredient4} ingredient5={mIngredient5} ingredient6={mIngredient6} ingredient7={mIngredient7} ingredient8={mIngredient8} ingredient9={mIngredient9} ingredient10={mIngredient10} ingredient11={mIngredient11} ingredient12={mIngredient12} ingredient13={mIngredient13} ingredient14={mIngredient14}/> 
            </div>
        </div>
    </div>
    )
}

export default Home;
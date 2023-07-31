import React, { useContext } from 'react';
import RecipesContext from '../context/recipes';

const RecipeDetails = (route) => {

  const { clickedRecipe } = useContext(RecipesContext);
  console.log('Received recipe: ', clickedRecipe);

  const { label, cuisineType, dishType, mealType, image } = clickedRecipe;

  return (
    <div className="recipe-details">
      <img src={image}></img>
      <h2>Recipe Details for: {label}</h2>
      <p>Cuisine type: {cuisineType}</p>
      <p>Dish type: {dishType}</p>
      <p>Meal type: {mealType}</p>
    </div>
  );
};

export default RecipeDetails;

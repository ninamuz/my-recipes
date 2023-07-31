import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import RecipesContext from '../context/recipes';

const RecipeDetails = () => {

  const { clickedRecipe } = useContext(RecipesContext);
  console.log('Received recipe: ', clickedRecipe);

  const {
    label,
    cuisineType,
    dishType,
    mealType,
    image
  } = clickedRecipe;

  const renderedIngredients = clickedRecipe.ingredients.map((ing) => {
    return <li>{ing.food}</li>
  });

  return (
    <div className="recipe-details">
      <Link to="/">Back</Link>

      <h2>Recipe Details for: {label}</h2>
      <p>Cuisine type: {cuisineType}</p>
      <p>Dish type: {dishType}</p>
      <p>Meal type: {mealType}</p>
      <div>
        <h2>Ingredients:</h2>
        <ul>{renderedIngredients}</ul>
      </div>
    </div>
  );
};

export default RecipeDetails;

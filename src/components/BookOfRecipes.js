// import { useState, useEffect } from 'react';
import { useContext, useEffect } from 'react';
import Recipe from './Recipe';
import RecipesContext from '../context/recipes';

const BookOfRecipes = () => {

  const { recipes, fetchRecipes, query } = useContext(RecipesContext);

  // Runs the function every time the app renders
  useEffect(() => {
    fetchRecipes();
  }, [query]); // Update dependency

  const renderedRecipes = recipes.map((data, index) => {
    const recipe = data.recipe;
    const uniqueKey = data.recipe.label + index;
    return <Recipe
      key={uniqueKey}
      recipe={recipe}
      title={recipe.label}
      type={recipe.cuisineType}
      image={recipe.image}
    />
  });

  return (
    <div>
      {renderedRecipes}
    </div>
  );
}


export default BookOfRecipes;
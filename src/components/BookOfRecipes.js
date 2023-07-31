// import { useState, useEffect } from 'react';
import { useContext, useEffect } from 'react';
import RecipesContext from '../context/recipes';
import Recipe from './Recipe';
import SearchRecipes from './SearchRecipes';
import '../styles.css';
import RecipeDetails from './RecipeDetails';

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
    <>
      <SearchRecipes />
      <div className="book">
        {renderedRecipes}
      </div>
    </>
  );
}


export default BookOfRecipes;
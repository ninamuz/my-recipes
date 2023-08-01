import FavContext from "../context/favorites";
import RecipesContext from "../context/recipes";
import React, { useContext, useState } from 'react';
import FavRecipe from "./FavRecipe";
import RecipeDetails from "./RecipeDetails";
import '../styles.css';

function MyFavRecipes() {

  const { favorites } = useContext(FavContext);
  const { clickedRecipe, view } = useContext(RecipesContext);

  const renderedFavs = favorites.map(recipe => {
    if (recipe.label) {
      return <FavRecipe
        key={recipe.label}
        recipe={recipe}
      />

    }
    return null;
  });

  const showRecipe = () => {
    if (view == true) {
      return <div>
        <RecipeDetails currentPage='MyFavRecipes'/>
      </div>
    } else {
      return <div className="waiting-screen">Click on a recipe to show details</div>
    }
  };

  return (
    <div className="favorites-container">

      <div className="favorites-list">
        <h2>My Favorite Recipes</h2>
        <ul>{renderedFavs}</ul>
      </div>

      <div className="fav-details">
        {showRecipe()}
      </div>

    </div>
  )
}

export default MyFavRecipes;
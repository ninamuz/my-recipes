import FavContext from "../context/favorites";
import RecipesContext from "../context/recipes";
import React, { useContext, useEffect } from 'react';
import FavRecipe from "./FavRecipe";
import RecipeDetails from "./RecipeDetails";
import '../styles.css';

function MyFavRecipes() {

  const { favorites } = useContext(FavContext);
  const { view, clickedRecipe } = useContext(RecipesContext);

  useEffect(() => {
    showRecipe();
  }, [favorites]);

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
    const favItem = favorites.map((el) => {
      return el.label;
    });

    if ((view == true && favorites.length > '0') && favItem.includes(clickedRecipe.label)) {
      return <div><RecipeDetails currentPage='MyFavRecipes' /></div>
    } else if (favorites.length == 0) {
      return <div className="waiting-screen">No favorites recipes to show</div>
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
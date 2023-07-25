import FavContext from "../context/favorites";
import React, { useContext } from 'react';
import '../styles.css';

function MyFavRecipes() {

  const { favorites } = useContext(FavContext);

  const renderedFavs = favorites.map(recipe => {
    if (recipe.label) {
      return <li key={recipe.label}>{recipe.label}</li>
    }
    return null;
  });

  return (
    <div className="favorites">
      <h1>My Fav Recipes</h1>
      <ul>{renderedFavs}</ul>
    </div>
  )
}

export default MyFavRecipes;
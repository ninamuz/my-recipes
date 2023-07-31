import React, { useState, useContext } from 'react';
import FavContext from '../context/favorites';
import '../styles.css';

export default function Recipe({ title, type, image, recipe }) {
  const { addToFavorites, favorites } = useContext(FavContext);

  function handleAddRecipeToFavorites() {
    addToFavorites(recipe);
  };

  const findFav = favorites.find((favRecipe) => favRecipe.label === recipe.label);
  const setIcon = findFav && findFav.isFavorite == true ? "star" : "star-outline"
  
  const openRecipe = () => {
    console.log('OPEN RECIPE');
    // eyeIcon === "eye-outline" ? setEyeIcon("eye") : setEyeIcon("eye-outline");
  };

  return (
    <>
      <div className="recipe">
        <div className="recipe-header">
          <h2>{title}</h2>

          <div className="buttons">
            <span value={recipe} onClick={handleAddRecipeToFavorites}>
              <ion-icon name={setIcon}></ion-icon>
            </span>
            <span value={recipe} onClick={openRecipe}>
              <ion-icon name="eye-outline"></ion-icon>
            </span>
          </div>

        </div>
        <p>Cuisine type: {type}</p>
        {/* <img src={image}></img> */}
      </div>
    </>
  )
}

import FavContext from "../context/favorites";
import RecipesContext from "../context/recipes";
import React, { useContext } from 'react';
import '../styles.css';

export default function FavRecipe({ recipe }) {

  const { removeFromFavorites } = useContext(FavContext);
  const { setClickedRecipe, setView } = useContext(RecipesContext);

  const handleRemoveRecipe = () => {
    removeFromFavorites(recipe);
  };

  const handleGoToDetails = () => {
    console.log('Sending recipe: ', recipe);
    setClickedRecipe(recipe);
    setView(true);
  };

  return (
    <div className="favorite">
      <h2>{recipe.label}</h2>
      <div className='fav-header'>
        <span value={recipe} onClick={handleRemoveRecipe}>
          <ion-icon name="trash-outline"></ion-icon>
        </span>
        <span value={recipe} onClick={handleGoToDetails}>
          <ion-icon name="eye-outline"></ion-icon>
        </span>
      </div>
    </div>
  )
}

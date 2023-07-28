import FavContext from "../context/favorites";
import React, { useContext } from 'react';
import '../styles.css';

export default function FavRecipe({ recipe }) {

  const { removeFromFavorites } = useContext(FavContext);

  const handleRemoveRecipe = (e) => {
    removeFromFavorites(recipe);
  };

  return (
    <div className="favorites">
      <div className='fav-header'>
        <h2>{recipe.label}</h2>
        <button value={recipe} onClick={handleRemoveRecipe}>
          <ion-icon name="trash-outline"></ion-icon>
        </button>
      </div>
    </div>
  )
}

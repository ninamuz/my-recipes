import React, { useContext } from 'react';
import FavContext from '../context/favorites';
import '../styles.css';

export default function Recipe({ title, type, image, recipe }) {

  const { addToFavorites } = useContext(FavContext);

  function handleAddRecipeToFavorites(e) {
    e.preventDefault();
    addToFavorites(recipe);
  };

  return (
    <div className="recipe">
      <div className='recipe-header'>
        <h2>{title}</h2>
        <button value={recipe} onClick={handleAddRecipeToFavorites}>
          <ion-icon name="star-outline"></ion-icon>
        </button>
      </div>
      <p>Cuisine type: {type}</p>
      {/* <img src={image}></img> */}
    </div>
  )
}

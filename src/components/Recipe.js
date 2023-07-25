import React, { useContext } from 'react';
import FavContext from '../context/favorites';
import '../styles.css';

export default function Recipe({ title, type, image, recipe }) {

  const { updateFavorites } = useContext(FavContext);

  function addToFavorites(e) {
    e.preventDefault();
    console.log('recipe clicked', recipe);
    updateFavorites(recipe);
  };

  return (
    <div className="recipe">
      <h1>Single Recipe</h1>
      <div>
      <h2>{title}</h2>
      <button value={recipe} onClick={addToFavorites}>Add to Favs</button>
      </div>
      <p>Cuisine type: {type}</p>
      {/* <img src={image}></img> */}
    </div>
  )
}

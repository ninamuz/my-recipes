import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import FavContext from '../context/favorites';
import RecipesContext from '../context/recipes';
import '../styles.css';

export default function Recipe({ recipe, title, image }) {
  const { addToFavorites, favorites } = useContext(FavContext);
  const { setClickedRecipe } = useContext(RecipesContext);

  function handleAddRecipeToFavorites() {
    addToFavorites(recipe);
  };

  const findFav = favorites.find((favRecipe) => favRecipe.label === recipe.label);
  const setIcon = findFav && findFav.isFavorite == true ? "star" : "star-outline"

  const handleGoToDetails = () => {
    console.log('Sending recipe: ', recipe);
    setClickedRecipe(recipe);
  };
return (
  <>
    <div className="recipe">
      <div className="recipe-header">
        <h2>
          <Link to="/recipe-details" onClick={handleGoToDetails}>Go to Recipe Details</Link>
        </h2>
        <div className="buttons">
          <span value={recipe} onClick={handleAddRecipeToFavorites}>
            <ion-icon name={setIcon}></ion-icon>
          </span>
        </div>
      </div>
      <div className="recipe-body">
        <img src={image} className="recipe-img"></img>
        <div className="recipe-facts">
          <p>Cuisine type: {recipe.cuisineType}</p>
          <p>Dish type: {recipe.dishType}</p>
          <p>Meal type: {recipe.mealType}</p>
        </div>
      </div>
    </div>
  </>
)
}

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import RecipesContext from '../context/recipes';
import FavContext from '../context/favorites';

const RecipeDetails = ({ currentPage }) => {

  const { clickedRecipe } = useContext(RecipesContext);
  const { addToFavorites, favorites } = useContext(FavContext);
  // console.log('Received recipe: ', clickedRecipe);

  const {
    label,
    cuisineType,
    dishType,
    mealType,
    image
  } = clickedRecipe;

  const someID = Math.floor(Math.random() * Date.now());

  const renderedIngredients = clickedRecipe.ingredients.map((ing) => {
    return <li key={someID + Math.random()}>{ing.food}</li>
  });

  function handleAddRecipeToFavorites() {
    console.log('clicked recipeeee', clickedRecipe);
    addToFavorites(clickedRecipe);
  };

  const findFav = favorites.find((favRecipe) => favRecipe.label === clickedRecipe.label);
  const setIcon = findFav && findFav.isFavorite == true ? "star" : "star-outline"

  return (<>
    {
      currentPage !== "MyFavRecipes" && <>
      <Link to="/" className='backLink'>
        <ion-icon name="arrow-back-circle-outline"></ion-icon>
      </Link>
        <span className='starButton' value={clickedRecipe} onClick={handleAddRecipeToFavorites}>
        <ion-icon name={setIcon}></ion-icon>
      </span>
      </>
    }

    <div className="recipe-details">
      <div className='recipe-details_header'>
        <h2>
          {label}
        </h2>
        <img src={image} alt={label}></img>
      </div>

      <div className='recipe-details_body'>
        <p>Cuisine type: {cuisineType}</p>
        <p>Dish type: {dishType}</p>
        <p>Meal type: {mealType}</p>
        <div className='recipe-details_ingredients'>
          <h2>Ingredients:</h2>
          <ul>{renderedIngredients}</ul>
        </div>
      </div>

    </div>
  </>
  );
};

export default RecipeDetails;

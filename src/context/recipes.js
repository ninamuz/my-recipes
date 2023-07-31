import React, { createContext, useState } from 'react';

const RecipesContext = createContext();

const RecipesContextProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('rice');
  const [clickedRecipe, setClickedRecipe] = useState(null);

  // Api Data
  const APP_ID = '51373062';
  const APP_KEY = '90535d024248fe2974e42d57d4578d9b';
  const BASE_URL = `https://api.edamam.com/api/recipes/v2?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&type=public`;

  // Fetching data from server
  const fetchRecipes = async () => {
    const response = await fetch(BASE_URL);
    try {
      if (response.ok) {
        const data = await response.json();
        console.log('DATA', data.hits);
        setRecipes(data.hits);
      }
    } catch (error) {
      console.log(error);
    }
  };



 const valueToShare = {
  recipes,
  clickedRecipe,
  query,
  fetchRecipes,
  setQuery,
  setClickedRecipe
 };

  return (
    <RecipesContext.Provider value={valueToShare}>
      {children}
    </RecipesContext.Provider>
  );
};

export { RecipesContextProvider };
export default RecipesContext;


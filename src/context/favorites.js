import React, { createContext, useState } from 'react';

const FavContext = createContext();

const FavContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // Function to add a recipe to favorites
  const addToFavorites = (recipe) => {
    if (!favorites.find((favRecipe) => favRecipe.label === recipe.label)) {
      setFavorites([...favorites, recipe]);
    }
  };

  const removeFromFavorites = (recipe) => {
    const newFavorites = favorites.filter(fav =>
      fav.label !== recipe.label
    );
    setFavorites(newFavorites);
  };

  const valueToShare = {
    favorites,
    setFavorites,
    addToFavorites,
    removeFromFavorites
  };

  return (
    <FavContext.Provider value={valueToShare}>
      {children}
    </FavContext.Provider>
  );
};

export { FavContextProvider };
export default FavContext;


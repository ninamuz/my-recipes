import React, { createContext, useState } from 'react';

const FavContext = createContext();

const FavContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
 
  // Function to add a recipe to favorites
  const updateFavorites = (recipe) => {
    setFavorites([...favorites, recipe]);
  };

  const valueToShare = {
    favorites,
    updateFavorites
  };

  return (
    <FavContext.Provider value={valueToShare}>
      {children}
    </FavContext.Provider>
  );
};

export { FavContextProvider };
export default FavContext;


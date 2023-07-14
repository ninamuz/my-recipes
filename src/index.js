import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RecipesContextProvider } from './context/recipes';
import { FavContextProvider } from './context/favorites';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FavContextProvider>
  <RecipesContextProvider>
    <App />
  </RecipesContextProvider>
  </FavContextProvider>
);

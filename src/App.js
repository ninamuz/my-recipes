import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import BookOfRecipes from "./components/BookOfRecipes";
import MyFavRecipes from "./components/MyFavRecipes";
import RecipeDetails from "./components/RecipeDetails";
import headerImage from "./images/header.jpg";
import './styles.css';

function App() {

  return (
    <div className="app-container">
      <div className="app-header">
        <img src={headerImage} className="app-header-img"></img>
      </div>


      <BrowserRouter >
        <div className="router">
          <NavLink to="/" className="link">Home</NavLink>
          <NavLink to="/favorites" className="link">Favorites</NavLink>
        </div>

        <Routes>
          <Route name="Home" exact path="/" element={<BookOfRecipes />} />
          <Route name="Favorites" exact path="/favorites" element={<MyFavRecipes />} />
          <Route name="Details" exact path="/recipe-details" element={<RecipeDetails />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App;
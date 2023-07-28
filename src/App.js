import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import BookOfRecipes from "./components/BookOfRecipes";
import MyFavRecipes from "./components/MyFavRecipes";
import './styles.css';

function App() {

  return (
    <div className="app-container">
      <div className="app-title"><h1>App Book of Recipes</h1></div>
      
      <BrowserRouter >
        <div className="router">

          <NavLink to="/" style={({ isActive }) => ({
            color: isActive ? 'purple' : 'black'
          })}>
            Home
          </NavLink>


          <NavLink to="/favorites" style={({ isActive }) => ({
            color: isActive ? 'purple' : 'black'
          })}>
            Favorites
          </NavLink>

        </div>

        <Routes>
          <Route exact path="/" element={<BookOfRecipes />} />
          <Route exact path="/favorites" element={<MyFavRecipes />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App;
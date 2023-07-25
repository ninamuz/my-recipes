import BookOfRecipes from "./components/BookOfRecipes";
import MyFavRecipes from "./components/MyFavRecipes";
import SearchRecipes from "./components/SearchRecipes";
import './styles.css';

function App() {

  return (
    <div className="app-container">
      <div className="app-title"><h1>App Book of Recipes</h1></div>
      <SearchRecipes />
      <BookOfRecipes />
      <MyFavRecipes />
    </div>
  )
}

export default App;
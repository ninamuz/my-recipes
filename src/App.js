import BookOfRecipes from "./components/BookOfRecipes";
import SearchRecipes from "./components/SearchRecipes";
import { FavContextProvider } from "./context/favorites";

function App() {

  return (
    <>
    <h1>Book of Recipes</h1>
      <SearchRecipes />
      <BookOfRecipes />
    </>
  )
}

export default App;
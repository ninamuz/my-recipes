import BookOfRecipes from "./components/BookOfRecipes";
import MyFavRecipes from "./components/MyFavRecipes";
import SearchRecipes from "./components/SearchRecipes";

function App() {

  return (
    <>
    <h1>Book of Recipes</h1>
      <SearchRecipes />
      <BookOfRecipes />
      <MyFavRecipes />
    </>
  )
}

export default App;
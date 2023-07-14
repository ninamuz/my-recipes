import { useState, useContext } from "react";
import RecipesContext from "../context/recipes";

const SearchRecipes = () => {
  const [search, setSearch] = useState('');
  const recipesContext = useContext(RecipesContext);

  const updateSearch = (e) => {
    setSearch(e.target.value)
    console.log(search);
  }

  const getSearch = (e) => {
    e.preventDefault();
    recipesContext.setQuery(search);
    console.log(search);
  }

  return (
    <div>
      <form onSubmit={getSearch}>
        <input
          name="foodTerm"
          type="text"
          onChange={updateSearch}
          value={search}
        />
        <button type="submit">Search</button>
      </form>

      {search !== '' && <p>Your search term is: {search}</p>}
    </div>
  )
}

export default SearchRecipes;
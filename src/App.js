import React, { useEffect, useState } from 'react';
import './App.css';
import getRecipes from './api/getRecipes';
import getApiQuery from './api/getApiQuery';
import Recipe from './Recipe';

const App = () => {
  // State
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    const apiUrl = getApiQuery(query);
    getRecipes(apiUrl, setRecipes);
  }, [query]);

  const onUpdateHandler = (e) => {
    setSearch(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <div className="App">
      <h1>Recipes!</h1>
      <form className="search-form" onSubmit={onSubmitHandler}>
        <input
          className="search-bar"
          type="text"
          placeholder="Enter a term"
          value={search}
          onChange={onUpdateHandler}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className='recipes'>
        {recipes.map((recipe) => (
          <Recipe recipe={recipe.recipe} key={recipe.recipe.label} />
        ))}
      </div>
    </div>
  );
};

export default App;

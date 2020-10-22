import React, { useEffect, useState } from 'react';
import './App.css';
import getRecipes from './api/getRecipes';
import buildApiUrl from './api/buildApiUrl';
import Recipe from './Recipe';

const App = () => {
  // State
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');
  const [start, setStart] = useState(0);

  useEffect(() => {
    const apiUrl = buildApiUrl(query, start);
    getRecipes(apiUrl, setRecipes);
  }, [query, start]);

  const onUpdateHandler = (e) => {
    setSearch(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  const nextPageHandler = (e) => {
    e.preventDefault();
    setStart((prevStart) => prevStart + 10);
  };

  const prevPageHandler = (e) => {
    e.preventDefault();
    setStart((prevStart) => prevStart - 10);
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
      {start !== 0 && 
        <button className='next-results' onClick={prevPageHandler}>Prev. 10 results</button>
      }
      <button className='next-results' onClick={nextPageHandler}>Next 10 results</button>
    </div>
  );
};

export default App;

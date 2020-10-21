import React, { useEffect } from 'react';
import './App.css';
import getRecipes from './api/getRecipes';
import getApiQuery from './api/getApiQuery';


const App = () => {
  useEffect(() => {
    const apiUrl = getApiQuery();
    getRecipes(apiUrl);
  });


  return (
    <div className="App">
      <h1>Recipes!</h1>
      <form className="search-form">
        <input className="search-bar" type="text" placeholder="Enter a term" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default App;

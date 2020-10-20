import React, { useEffect } from 'react';
import './App.css';

const APP_ID = process.env.REACT_APP_ID;
const API_KEY = process.env.REACT_APP_KEY;
const apiUrl = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${API_KEY}`;

const App = () => {
  useEffect(() => {
    getRecipes();
  });

  async function getRecipes() {
    const response = await fetch(apiUrl);
    const body = await response.json();
    console.log(body);
  }
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

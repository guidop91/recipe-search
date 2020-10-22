import React from 'react';

import style from './recipe.module.css';

const Recipe = ({ recipe }) => (
  <div className={style['recipe-container']}>
    <h2>{recipe.label}</h2>
    <img src={recipe.image} alt={recipe.label} className={style['recipe-img']}/>
    <h3>Energy: {recipe.calories.toFixed(0)} kCal</h3>
    <h3>Ingredients:</h3>
    <ul>
      {recipe.ingredientLines.map((ingredient, i) => (
        <li key={recipe.label + i}>{ingredient}</li>
      ))}
    </ul>
    <h3><a href={recipe.url}>Get this recipe</a></h3>
  </div>
);

export default Recipe;

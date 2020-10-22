/**
 * Get recipes from edamam API
 *
 * @param {string} apiUrl
 * @param {Function} setRecipes - set recipes state
 * @returns {null}
 */
async function getRecipes(apiUrl, setRecipes) {
  const response = await fetch(apiUrl);
  const body = await response.json();
  console.log(body);
  setRecipes(body.hits);
}

export default getRecipes;

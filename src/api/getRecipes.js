/**
 * Get recipes from edamam API
 *
 * @param {string} apiUrl
 * @returns {null}
 */
async function getRecipes(apiUrl) {
  const response = await fetch(apiUrl);
  const body = await response.json();
  console.log(body);
}

export default getRecipes;

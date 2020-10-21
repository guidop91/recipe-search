import { API_KEY, APP_ID } from './constants';

const getApiQuery = (query = 'chicken') => `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`;

export default getApiQuery;
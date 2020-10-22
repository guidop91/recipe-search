import { API_KEY, APP_ID } from './constants';

const buildApiUrl = (query, start) =>
  `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}&from=${start}`;

export default buildApiUrl;

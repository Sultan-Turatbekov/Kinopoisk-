import axios from 'axios';

export const API_KEY = 'db558b98-44e8-418f-ba9e-8c48070133a9';
export const API_KEY2 = '7f7b4b40-2e43-4958-ba7a-f1bea2c85208';

const API = axios.create({
  baseURL: 'https://kinopoiskapiunofficial.tech/',
});

API.defaults.headers['X-API-KEY'] = API_KEY2;
// console.log(API);
export default API;

import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-app-817fa.firebaseio.com/',
});

export default instance;

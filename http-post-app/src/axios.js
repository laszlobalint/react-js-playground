import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

instance.defaults.common['Authorization'] = 'AUTH_TOKEN_FROM_INSTANCE';

// Import the instance in component where needed as 'axios'.

export default instance;

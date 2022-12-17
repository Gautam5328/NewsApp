import axios from 'axios';
const BASE_URL = 'https://newsapi.org/v2/';

export const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'X-Api-key': '7a6003fc307f436b970aa61aef9b2b7a',
  },
});

import axios from 'axios';

const api = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

api.interceptors.request.use(request => {
  // if (request.url.includes('cart') || request.url.includes('customer')) {
  //   request.headers = {
  //     ...request.headers,
  //     'Cache-Control': 'no-cache',
  //     Pragma: 'no-cache',
  //     Expires: '0',
  //   };
  // }
  return request;
});

export default api;

import axios from 'axios';

const host = process.env.REACT_APP_API_HOST || 'http://localhost:8080';

const Api = axios.create({
  baseURL: host,
  withCredentials: true
});

export default Api;

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://vehicle-management-dashboard-onmh3htc8-brooktewabes-projects.vercel.app/api/vehicles',
});

export default axiosInstance;

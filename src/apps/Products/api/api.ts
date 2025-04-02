import axios, { AxiosInstance } from 'axios';

export const productApi: AxiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/products`,
});

export const categoryApi: AxiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/categories`,
});

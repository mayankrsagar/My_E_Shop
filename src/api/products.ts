import axios from 'axios';

import type { Product } from '../types';

const BASE_URL = 'https://fakestoreapi.com';  // replace with your API

export const fetchProducts = async (): Promise<Product[]> => {
  const res = await axios.get<Product[]>(`${BASE_URL}/products`);
  return res.data;
};

export const fetchProductById = async (id: number): Promise<Product> => {
  const res = await axios.get<Product>(`${BASE_URL}/products/${id}`);
  console.log(res.data);
  return res.data;
};
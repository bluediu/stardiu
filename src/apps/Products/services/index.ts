/* Api */
import { productApi } from '../api';

/* Interfaces */
import { IProduct } from '../interfaces';

export const getLatestProducts = async () => {
  try {
    const { data } = await productApi.get<IProduct[]>('/latest');

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getProductById = async (id: string) => {
  try {
    const { data } = await productApi.get<IProduct>(`/get/${id}`);

    return data;
  } catch (error) {
    console.error(error);
  }
};

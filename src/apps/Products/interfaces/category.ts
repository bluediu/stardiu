import { IProduct } from './product';

export interface ICategoryResponse {
  total: number;
  categories: ICategory[];
}

export interface IProductByCtgyResponse {
  total: number;
  products: IProduct[];
}

export interface ICategory {
  _id: string;
  name: string;
  user: string;
}

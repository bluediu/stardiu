export interface IProductResponse {
  total: number;
  page: number;
  itemsPerPage: number;
  products: IProduct[];
}

export interface ISearchResponse {
  results: IProduct[];
  validProductsExists: boolean;
}

export interface IProduct {
  _id: string;
  price: number;
  available: boolean;
  size: string[];
  name: string;
  description: string;
  category: ICategory;
  createdAt: Date;
  updatedAt: Date;
  img: string;
}

interface ICategory {
  _id: string;
  name: string;
}

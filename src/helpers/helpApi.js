// eslint-disable-next-line no-undef
const api_conn = process.env.REACT_APP_API_URL;

export const api_enpoint = {
  login: `${api_conn}/auth/login`,
  loginWithGoogle: `${api_conn}/auth/google`,
  renew: `${api_conn}/auth/renew`,
  createUser: `${api_conn}/users`,

  getProducts: `${api_conn}/products`,
  search: `${api_conn}/search`,

  addToCart: `${api_conn}/cart/add`,
  getShoppingCart: `${api_conn}/cart`,
  countShoppingCart: `${api_conn}/cart/count`,
  productExistInShoppingCart: `${api_conn}/cart/verify`,
  deleteOneFromShoppingCart: `${api_conn}/cart/delete`,

  getCategories: `${api_conn}/categories`,
  getProductsByCategory: `${api_conn}/products/category`,

  createOrder: `${api_conn}/order/create`,
};

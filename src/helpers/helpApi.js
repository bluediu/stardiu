// eslint-disable-next-line no-undef
const api_conn = process.env.REACT_APP_API_URL;

export const api_enpoint = {
  login: `${api_conn}/auth/login`,
  loginWithGoogle: `${api_conn}/auth/google`,
  renew: `${api_conn}/auth/renew`,
  createUser: `${api_conn}/users`,
  getProducts: `${api_conn}/products`,
  createProduct: `${api_conn}/products`,
  updateProduct: `${api_conn}/products/`,
  deleteProduct: `${api_conn}/products/`,
};

/**
 * @params API
 * updateProduct: `${api_conn}/products/:id`,
 * deleteProduct: `${api_conn}/products/:id`,
 * getProducts: `${api_conn}/products/?page=:number&limit=:number`,
 */

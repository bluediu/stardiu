import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { categoryReducer } from './categoryReducer';
import { productReducer } from './productReducer';
import { searchReducer } from './searchReducer';
import { shoppingCartReducer } from './shoppingCartReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  products: productReducer,
  categories: categoryReducer,
  shoppingCart: shoppingCartReducer,
  search: searchReducer,
});

import { combineReducers } from 'redux';
import products from './Product';
const appReducers = combineReducers({
  products,
});
export default appReducers;

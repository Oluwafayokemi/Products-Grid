import initialState from './initialState';
import { GET_ALL_PRODUCTS, IS_LOADING } from '../actions/actionTypes';

export default (state = initialState.products, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload
      }
    case IS_LOADING:
      return {
        ...state,
        loading: action.payload
      }
    default:
      return {
        ...state,
      };
  }
}
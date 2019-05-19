/**
 * @file action for products
 */

import { GET_ALL_PRODUCTS, IS_LOADING } from './actionTypes';
import fetchData from '../util/fetchData';

export const getAllProducts = payload => ({
  type: GET_ALL_PRODUCTS,
  payload
});
export const isLoading = payload => ({
  type: IS_LOADING,
  payload
});


export const fetchProducts = (request) => async (dispatch) => {
  const sortTag = request && request.productTag
  dispatch(isLoading(true))
  try {
    const url = sortTag ? `/products?_sort=${sortTag}` : "/products?_page=10&_limit=15"
    const response = await fetchData({
      method: 'get',
      url,
      header: {
        'Content-Type': 'application/json',
      },
      data: request,
    });
    if (response.status === 200) {
      dispatch(getAllProducts(response.data))
      dispatch(isLoading(false))
    }
    const error = Object.assign({}, {
      status: response.data.status,
      message: response.data.message,
    });
    return console.log(error.message);
  } catch (error) {
    return console.log(error.message);
  }
}

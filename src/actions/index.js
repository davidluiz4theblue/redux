import * as Types from '../constants/actionTypes';
import apiCall from './../API/apiCaller';

// ======================== LẤY DỮ LIỆU TỪ API ========================
// ===Request trước sau đó mới Fetch ra
export const actFetchProductsRequest = () => {
  return dispatch => {
    return apiCall('products', 'GET', null).then(res => {
      dispatch(actFetchProducts(res.data));
    });
  };
};
export const actFetchProducts = products => {
  return {
    type: Types.FETCH_PRODUCTS,
    products,
  };
};

// ======================== XÓA DỮ LIỆU TỪ API ========================
export const actDeleteProductsRequest = id => {
  return dispatch => {
    return apiCall(`products/${id}`, 'DELETE', null).then(res => {
      dispatch(actDeleteProducts(id));
    });
  };
};
export const actDeleteProducts = id => {
  return {
    type: Types.DELETE_PRODUCTS,
    id,
  };
};

// ======================== THÊM DỮ LIỆU TỪ API ========================
export const actAddProductsRequest = products => {
  return dispatch => {
    return apiCall('products/content/save', 'POST', products).then(res => {
      dispatch(actAddProducts(res.data));
    });
  };
};
export const actAddProducts = products => {
  return {
    type: Types.ADD_PRODUCTS,
    products,
  };
};

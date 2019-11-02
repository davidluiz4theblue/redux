import * as Types from '../constants/actionTypes';

let initialState = {};

const itemEditing = (state = initialState, action) => {
  switch (action.type) {
    case Types.EDIT_PRODUCTS:
      return action.products;
    default:
      return state;
  }
};
export default itemEditing;

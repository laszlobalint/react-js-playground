import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  orders: [],
  loading: false,
  purchased: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_BURGET_INIT:
      return updateObject(state, { purchased: false });
    case actionTypes.PURCHASE_BURGER:
      return updateObject(state, { loading: true });
    case actionTypes.PURCHASE_BURGER_SUCCESS:
      return updateObject(state, { loading: false, purchased: true, orders: state.orders.concat({ id: action.id, ...action.data }) });
    case actionTypes.PURCHASE_BURGER_FAILURE:
      return updateObject(state, { loading: false });
    case actionTypes.FETCH_ORDERS_INIT:
      return updateObject(state, { loading: true });
    case actionTypes.FETCH_ORDERS_SUCCESS:
      return updateObject(state, { loading: false, orders: action.orders });
    case actionTypes.FETCH_ORDERS_FAILURE:
      return updateObject(state, { loading: false });
    default:
      return state;
  }
};

export default reducer;

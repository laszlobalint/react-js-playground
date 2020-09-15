import * as actionTypes from '../actions/actionTypes';

const initialState = {
  orders: [],
  loading: false,
  purchased: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_BURGET_INIT:
      return {
        ...state,
        purchased: false,
      };
    case actionTypes.PURCHASE_BURGER:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.PURCHASE_BURGER_SUCCESS:
      return {
        ...state,
        loading: false,
        purchased: true,
        orders: state.orders.concat({ id: action.id, ...action.data }),
      };
    case actionTypes.PURCHASE_BURGER_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;

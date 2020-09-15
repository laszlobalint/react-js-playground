import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const purchaseBurgerInit = () => {
  return {
    type: actionTypes.PURCHASE_BURGET_INIT,
  };
};

const purchaseBurgerInitInner = () => {
  return {
    type: actionTypes.PURCHASE_BURGER,
  };
};

export const purchaseBurger = (data) => {
  return (dispatch) => {
    dispatch(purchaseBurgerInitInner());
    axios
      .post('/orders.json', data)
      .then((response) => dispatch(purchaseBurgerSuccess(response.data.name, data)))
      .catch((error) => dispatch(purchaseBurgerFailure(error)));
  };
};

export const purchaseBurgerSuccess = (id, data) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    id,
    data,
  };
};

export const purchaseBurgerFailure = (error) => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAILURE,
    error,
  };
};

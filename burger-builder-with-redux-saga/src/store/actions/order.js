import * as actionTypes from './actionTypes';

export const purchaseBurgerInit = () => {
  return {
    type: actionTypes.PURCHASE_BURGER_INIT,
  };
};

export const purchaseBurgerStart = () => {
  return {
    type: actionTypes.PURCHASE_BURGER,
  };
};

export const purchaseBurger = (data, token) => {
  return {
    type: actionTypes.PURCHASE_BURGER_START,
    data,
    token,
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

export const fetchOrdersInit = () => {
  return {
    type: actionTypes.FETCH_ORDERS_INIT,
  };
};

export const fetchOrders = (token, userId) => {
  return {
    type: actionTypes.FETCH_ORDERS,
    token,
    userId,
  };
};

export const fetchOrdersSuccess = (orders) => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders,
  };
};

export const fetchOrdersFailure = (error) => {
  return {
    type: actionTypes.FETCH_ORDERS_FAILURE,
    error,
  };
};

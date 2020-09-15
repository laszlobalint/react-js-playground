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

export const fetchOrdersInit = () => {
  return {
    type: actionTypes.FETCH_ORDERS_INIT,
  };
};

export const fetchOrders = () => {
  return (dispatch) => {
    dispatch(fetchOrdersInit());
    axios
      .get('/orders.json')
      .then((response) => {
        const orders = [];
        for (let key in response.data)
          orders.push({
            ...response.data[key],
            id: key,
          });
        dispatch(fetchOrdersSuccess(orders));
        this.setState({ orders });
      })
      .catch((error) => {
        dispatch(fetchOrdersFailure(error));
      });
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

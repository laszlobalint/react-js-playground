import { put } from 'redux-saga/effects';

import axios from '../../axios';
import * as actions from '../actions';

export function* fetchOrdersSaga(action) {
  yield put(actions.fetchOrdersInit());
  const querParams = `?auth=${action.token}&orderBy="userId"&equalTo="${action.userId}"`;
  try {
    const response = yield axios.get(`/orders.json${querParams}`);
    const orders = [];
    for (let key in response.data)
      orders.push({
        ...response.data[key],
        id: key,
      });
    yield put(actions.fetchOrdersSuccess(orders));
  } catch (error) {
    yield put(actions.fetchOrdersFailure(error));
  }
}

export function* purchaseBurgerSaga(action) {
  yield put(actions.purchaseBurgerStart());
  try {
    const response = yield axios.post(`/orders.json?auth=${action.token}`, action.data);
    yield put(actions.purchaseBurgerSuccess(response.data.name, action.data));
  } catch (error) {
    yield put(actions.purchaseBurgerFailure(error));
  }
}

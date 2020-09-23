import { takeEvery, takeLatest, all } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import { authUserSaga, checkAuthTimeoutSaga, logoutSaga, authCheckStateSaga } from './auth';
import { fetchIngredientsSaga } from './burgerBuilder';
import { fetchOrdersSaga, purchaseBurgerSaga } from './order';

export function* watchAuth() {
  yield all([
    takeEvery(actionTypes.AUTHENTICATE_USER, authUserSaga),
    takeEvery(actionTypes.AUTHENTICATE_CHECK_TIMEOUT, checkAuthTimeoutSaga),
    takeEvery(actionTypes.AUTHENTICATE_INITIATE_LOGOUT, logoutSaga),
    takeEvery(actionTypes.AUTHENTICATE_CHECK_STATE, authCheckStateSaga),
  ]);
}

export function* watchBurgerBuilder() {
  yield all([takeEvery(actionTypes.INIT_INGREDIENTS, fetchIngredientsSaga)]);
}

export function* watchOrder() {
  yield all([
    yield takeEvery(actionTypes.FETCH_ORDERS, fetchOrdersSaga),
    yield takeLatest(actionTypes.PURCHASE_BURGER_START, purchaseBurgerSaga),
  ]);
}

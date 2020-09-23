import { put, delay, call } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from '../actions';

export function* authUserSaga(action) {
  yield put(actions.authenticate());
  const authData = {
    email: action.email,
    password: action.password,
    returnSecureToken: true,
  };
  let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBQBRLe-XSJ2-rYROOhAkZuqlsZFWk39Uk';
  if (!action.isSignup) url = url.replace('signUp', 'signInWithPassword');
  try {
    const response = yield axios.post(url, authData);
    yield localStorage.setItem('token', response.data.idToken);
    yield localStorage.setItem('expirationDate', yield new Date(new Date().getTime() + response.data.expiresIn * 1000));
    yield localStorage.setItem('userId', response.data.localId);
    yield put(actions.authenticateSuccess(response.data.idToken, response.data.localId));
    yield put(actions.checkAuthTimeout(response.data.expiresIn));
  } catch (error) {
    yield put(actions.authenticateFailure(error.response.data.error));
  }
}

export function* checkAuthTimeoutSaga(action) {
  yield delay(action.expirationTime * 1000);
  yield put(actions.logout());
}

export function* logoutSaga(action) {
  yield call([localStorage, 'clear']);
  yield put(actions.logoutSucceed());
}

export function* authCheckStateSaga(action) {
  const token = yield call([localStorage, 'getItem'], 'token');
  const expirationDate = yield new Date(yield call([localStorage, 'getItem'], 'expirationDate'));
  const userId = yield call([localStorage, 'getItem'], 'userId');
  if (!token || !userId || expirationDate < new Date()) yield put(actions.logout());
  else {
    yield put(actions.authenticateSuccess(token, userId));
    yield put(actions.checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
  }
}

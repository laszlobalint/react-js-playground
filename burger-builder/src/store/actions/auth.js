import axios from 'axios';
import { mapErrorCodeToMessage } from '../utility';

import * as actionTypes from './actionTypes';

export const authenticate = () => {
  return {
    type: actionTypes.AUTHENTICATE,
  };
};

export const authenticateSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTHENTICATE_SUCCESS,
    token,
    userId,
  };
};

export const authenticateFailure = (error) => {
  return {
    type: actionTypes.AUTHENTICATE_FAILURE,
    error: mapErrorCodeToMessage(error.message),
  };
};

export const logout = () => {
  localStorage.clear();
  return {
    type: actionTypes.AUTHENTICATE_LOGOUT,
  };
};

export const checkAuthTimeout = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

export const auth = (email, password, isSignup) => {
  return (dispatch) => {
    dispatch(authenticate());
    const authData = {
      email,
      password,
      returnSecureToken: true,
    };
    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBQBRLe-XSJ2-rYROOhAkZuqlsZFWk39Uk';
    if (!isSignup) url = url.replace('signUp', 'signInWithPassword');
    axios
      .post(url, authData)
      .then((response) => {
        localStorage.setItem('token', response.data.idToken);
        localStorage.setItem('expirationDate', new Date(new Date().getTime() + response.data.expiresIn * 1000));
        localStorage.setItem('userId', response.data.idToken, response.data.localId);
        dispatch(authenticateSuccess(response.data.idToken, response.data.localId));
        dispatch(checkAuthTimeout(response.data.expiresIn));
      })
      .catch((error) => {
        dispatch(authenticateFailure(error.response.data.error));
      });
  };
};

export const setAuthRedirectPath = (redirectPath) => {
  return {
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    redirectPath,
  };
};

export const checkAuthState = () => {
  return (dispatch) => {
    const token = localStorage.getItem('token');
    const expirationDate = new Date(localStorage.getItem('expirationDate'));
    const userId = localStorage.getItem('userId');

    if (!token || !userId || expirationDate < new Date()) dispatch(logout());
    else {
      dispatch(authenticateSuccess(token, userId));
      dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
    }
  };
};

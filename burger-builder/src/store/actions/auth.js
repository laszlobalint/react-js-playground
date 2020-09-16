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
        dispatch(authenticateSuccess(response.data.idToken, response.data.localId));
        dispatch(checkAuthTimeout(response.data.expiresIn));
      })
      .catch((error) => {
        dispatch(authenticateFailure(error.response.data.error));
      });
  };
};

import axios from 'axios';

import * as actionTypes from './actionTypes';

export const authenticate = () => {
  return {
    type: actionTypes.AUTHENTICATE,
  };
};

export const authenticateSuccess = (authData) => {
  return {
    type: actionTypes.AUTHENTICATE_SUCCESS,
    authData,
  };
};

export const authenticateFailure = (error) => {
  return {
    type: actionTypes.AUTHENTICATE_FAILURE,
    error,
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
        dispatch(authenticateSuccess(response.data));
      })
      .catch((error) => {
        dispatch(authenticateFailure(error));
      });
  };
};

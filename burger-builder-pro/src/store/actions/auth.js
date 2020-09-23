import { mapErrorCodeToMessage } from '../../shared/utility';

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
    type: actionTypes.AUTHENTICATE_INITIATE_LOGOUT,
  };
};

export const logoutSucceed = () => {
  return {
    type: actionTypes.AUTHENTICATE_LOGOUT,
  };
};

export const checkAuthTimeout = (expirationTime) => {
  return {
    type: actionTypes.AUTHENTICATE_CHECK_TIMEOUT,
    expirationTime,
  };
};

export const auth = (email, password, isSignup) => {
  return {
    type: actionTypes.AUTHENTICATE_USER,
    email,
    password,
    isSignup,
  };
};

export const setAuthRedirectPath = (redirectPath) => {
  return {
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    redirectPath,
  };
};

export const checkAuthState = () => {
  return {
    type: actionTypes.AUTHENTICATE_CHECK_STATE,
  };
};

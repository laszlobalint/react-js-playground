import * as actionTypes from './actions';

const saveResult = (value) => {
  return {
    type: actionTypes.STORE_RESULT,
    value,
  };
};

export const storeResult = (value) => {
  return (dispatch, getState) => {
    setTimeout(() => {
      // Avoid putting logic into Action Creators!
      const oldCounter = getState().ctr.counter;
      console.log('[COUNTER] Old Value', oldCounter);
      dispatch(saveResult(value));
    }, 2000);
  };
};

export const deleteResult = (id) => {
  return {
    type: actionTypes.DELETE_RESULT,
    id,
  };
};

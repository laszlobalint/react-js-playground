import * as actionTypes from '../actions';

const initialState = {
  results: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: action.value }),
      };
    case actionTypes.DELETE_RESULT:
      return {
        ...state,
        results: state.results.filter((result) => result.id !== action.id),
      };
    default:
      return state;
  }
};

export default reducer;

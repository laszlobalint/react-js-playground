import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  ingredients: null,
  totalPrice: 3,
  error: false,
  building: false,
};

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

const addIngredients = (state, action) => {
  return {
    ...state,
    ingredients: updateObject(state.ingredients, { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 }),
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
    building: true,
  };
};

const removeIngredients = (state, action) => {
  return {
    ...state,
    ingredients: updateObject(state.ingredients, { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 }),
    totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
    building: true,
  };
};

const fetchIngredients = (state, action) => {
  return updateObject(state, {
    totalPrice: 3,
    error: false,
    building: false,
    ingredients: {
      salad: action.ingredients.salad,
      bacon: action.ingredients.bacon,
      cheese: action.ingredients.cheese,
      meat: action.ingredients.meat,
    },
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENTS:
      return addIngredients(state, action);
    case actionTypes.REMOVE_INGREDIENTS:
      return removeIngredients(state, action);
    case actionTypes.FETCH_INGREDIENTS:
      return fetchIngredients(state, action);
    case actionTypes.FETCH_INGREDIENTS_FAILURE:
      return updateObject(state, { error: true });
    default:
      return state;
  }
};

export default reducer;

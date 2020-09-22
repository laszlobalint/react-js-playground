import * as actionTypes from './actionTypes';

export const addIngredients = (ingredientName) => {
  return {
    type: actionTypes.ADD_INGREDIENTS,
    ingredientName,
  };
};

export const removeIngredients = (ingredientName) => {
  return {
    type: actionTypes.REMOVE_INGREDIENTS,
    ingredientName,
  };
};

export const setIngredients = (ingredients) => {
  return {
    type: actionTypes.FETCH_INGREDIENTS,
    ingredients,
  };
};

export const fetchIngredientsFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILURE,
  };
};

export const initIngredients = () => {
  return {
    type: actionTypes.INIT_INGREDIENTS,
  };
};

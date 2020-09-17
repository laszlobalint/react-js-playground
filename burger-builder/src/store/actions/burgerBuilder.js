import * as actionTypes from './actionTypes';
import axios from '../../axios';

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

const setIngredients = (ingredients) => {
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
  return (dispatch) => {
    axios
      .get('https://burger-builder-app-817fa.firebaseio.com/ingredients.json')
      .then((response) => {
        dispatch(setIngredients(response.data));
      })
      .catch((error) => {
        dispatch(fetchIngredientsFailed());
      });
  };
};

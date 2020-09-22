import { put } from 'redux-saga/effects';

import axios from '../../axios';
import * as actions from '../actions';

export function* fetchIngredientsSaga(action) {
  try {
    const response = yield axios.get('https://burger-builder-app-817fa.firebaseio.com/ingredients.json');
    yield put(actions.setIngredients(response.data));
  } catch (error) {
    yield put(actions.fetchIngredientsFailed());
  }
}

import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import WithErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler';
import * as actions from '../../store/actions/index';
import axios from '../../axios';

const BurgerBuilder = (props) => {
  const [purchasing, setPurchasing] = useState(false);
  const dispatch = useDispatch();

  const ingredients = useSelector((state) => state.builder.ingredients);
  const totalPrice = useSelector((state) => state.builder.totalPrice);
  const error = useSelector((state) => state.builder.error);
  const isAuthenticated = useSelector((state) => state.auth.token && state.auth.userId);

  const onInitIngredients = useCallback(() => dispatch(actions.initIngredients()), [dispatch]);
  const onAddedIngredient = (ingredientName) => dispatch(actions.addIngredients(ingredientName));
  const onRemovedIngredient = (ingredientName) => dispatch(actions.removeIngredients(ingredientName));
  const onPurchaseBurgerInit = () => dispatch(actions.purchaseBurgerInit());
  const onSetAuthRedirectPath = (redirectPath) => dispatch(actions.setAuthRedirectPath(redirectPath));

  useEffect(() => {
    onInitIngredients();
  }, [onInitIngredients]);

  const updatePurchaseState = () => {
    return (
      Object.keys(ingredients)
        .map((igKey) => ingredients[igKey])
        .reduce((sum, el) => {
          return sum + el;
        }, 0) > 0
    );
  };

  const purchaseHandler = () => {
    if (isAuthenticated) {
      setPurchasing(true);
    } else {
      onSetAuthRedirectPath('/checkout');
      props.history.push('/auth');
    }
  };

  const purchaseCancelHandler = () => {
    setPurchasing(false);
  };

  const purchaseContinueHandler = () => {
    onPurchaseBurgerInit();
    props.history.push('/checkout');
  };

  const disabledInfo = { ...ingredients };
  for (let key in disabledInfo) disabledInfo[key] = disabledInfo[key] <= 0;
  let orderSummary = null;
  let burger = error ? <p>Ingredients can't be loaded!</p> : <Spinner />;
  if (ingredients)
    orderSummary = (
      <OrderSummary
        ingredients={ingredients}
        totalPrice={totalPrice}
        purchaseCancelled={purchaseCancelHandler}
        purchaseContinued={purchaseContinueHandler}
      />
    );
  if (ingredients) {
    burger = (
      <Aux>
        <Burger ingredients={ingredients} />
        <BuildControls
          isAuthenticated={isAuthenticated}
          disabled={disabledInfo}
          totalPrice={totalPrice}
          purchasable={updatePurchaseState()}
          ingredientAdded={onAddedIngredient}
          ingredientRemoved={onRemovedIngredient}
          orderClicked={purchaseHandler}
        />
      </Aux>
    );
  }

  return (
    <Aux>
      <Modal show={purchasing} modalClosed={purchaseHandler}>
        {orderSummary}
      </Modal>
      {burger}
    </Aux>
  );
};

export default WithErrorHandler(BurgerBuilder, axios);

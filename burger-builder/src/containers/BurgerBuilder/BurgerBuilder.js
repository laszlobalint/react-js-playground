/*eslint-disable no-eval */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import WithErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler';
import * as actions from '../../store/actions/index';
import axios from '../../axios-orders';

class BurgerBuilder extends Component {
  state = {
    purchasable: false,
    purchasing: false,
  };

  componentDidMount() {
    this.props.onInitIngredients();
  }

  updatePurchaseState = () => {
    return (
      Object.keys(this.props.ingredients)
        .map((igKey) => this.props.ingredients[igKey])
        .reduce((sum, el) => {
          return sum + el;
        }, 0) > 0
    );
  };

  purchaseHandler = () => {
    this.setState((prevState) => {
      return { purchasing: !prevState.purchasing };
    });
  };

  purchaseContinueHandler = () => {
    this.props.onPurchaseBurgerInit();
    this.props.history.push('/checkout');
  };

  render() {
    const disabledInfo = { ...this.props.ingredients };
    for (let key in disabledInfo) disabledInfo[key] = disabledInfo[key] <= 0;
    let orderSummary = null;
    let burger = this.props.error ? <p>Ingredients can't be loaded!</p> : <Spinner />;
    if (this.props.ingredients)
      orderSummary = (
        <OrderSummary
          ingredients={this.props.ingredients}
          totalPrice={this.props.totalPrice}
          purchaseCancelled={this.purchaseHandler}
          purchaseContinued={this.purchaseContinueHandler}
        />
      );
    if (this.props.ingredients) {
      burger = (
        <Aux>
          <Burger ingredients={this.props.ingredients} />
          <BuildControls
            disabled={disabledInfo}
            totalPrice={this.props.totalPrice}
            purchasable={this.updatePurchaseState()}
            ingredientAdded={this.props.onAddedIngredient}
            ingredientRemoved={this.props.onRemovedIngredient}
            orderClicked={this.purchaseHandler}
          />
        </Aux>
      );
    }

    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseHandler}>
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ingredients: state.builder.ingredients,
    totalPrice: state.builder.totalPrice,
    error: state.builder.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInitIngredients: () => dispatch(actions.initIngredients()),
    onAddedIngredient: (ingredientName) => dispatch(actions.addIngredients(ingredientName)),
    onRemovedIngredient: (ingredientName) => dispatch(actions.removeIngredients(ingredientName)),
    onPurchaseBurgerInit: () => dispatch(actions.purchaseBurgerInit()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WithErrorHandler(BurgerBuilder, axios));

/*eslint-disable no-eval */
import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      bacon: 0,
      cheese: 0,
      meat: 0,
      salad: 0,
    },
    totalPrice: 4,
    purcasable: false,
    purchasing: false,
  };

  updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((igKey) => ingredients[igKey])
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purcasable: sum > 0 });
  };

  modifyIngredientHandler = (type, action) => {
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = eval(`${this.state.ingredients[type]} ${action} 1`);
    const newTotalPrice = eval(`${this.state.totalPrice} ${action} ${INGREDIENT_PRICES[type]}`);
    this.setState({ ingredients: updatedIngredients, totalPrice: newTotalPrice });
    this.updatePurchaseState(updatedIngredients);
  };

  purchaseHandler = () => {
    this.setState({ purchasing: !this.state.purchasing });
  };

  render() {
    const disabledInfo = { ...this.state.ingredients };
    for (let key in disabledInfo) disabledInfo[key] = disabledInfo[key] <= 0;

    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseHandler}>
          <OrderSummary ingredients={this.state.ingredients} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purcasable={this.state.purcasable}
          ingredientAdded={this.modifyIngredientHandler}
          ingredientRemoved={this.modifyIngredientHandler}
          orderClicked={this.purchaseHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;

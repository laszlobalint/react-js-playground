/*eslint-disable no-eval */
import React, { Component } from 'react';
import axios from '../../axios-orders';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import WithErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 4,
    purcasable: false,
    purchasing: false,
    loading: false,
    error: false,
  };

  componentDidMount() {
    axios
      .get('https://burger-builder-app-817fa.firebaseio.com/ingredients.json')
      .then((response) => {
        this.setState({
          ingredients: response.data,
        });
      })
      .catch((error) => this.setState({ error: true }));
  }

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
    this.setState((prevState) => {
      return { purchasing: !prevState.purchasing };
    });
  };

  purchaseContinueHandler = () => {
    this.setState({ loading: true });
    axios
      .post('/orders.json', {
        ingredients: this.state.ingredients,
        price: this.state.totalPrice,
        customer: {
          name: 'Bálint László',
          address: { street: 'Rókusi körút 2-10.', zipCode: 123456, country: 'Hungary' },
          email: 'john@doe.com',
        },
        deliveryMethod: 'fast',
      })
      .then((response) => response)
      .catch((error) => error)
      .then((response) => this.setState({ purchasing: false, loading: false }));
  };

  render() {
    const disabledInfo = { ...this.state.ingredients };
    for (let key in disabledInfo) disabledInfo[key] = disabledInfo[key] <= 0;
    let orderSummary,
      burger = this.state.error ? <p>Ingredients can't be loaded!</p> : <Spinner />;
    if (!this.state.loading && this.state.ingredients)
      orderSummary = (
        <OrderSummary
          ingredients={this.state.ingredients}
          price={this.state.totalPrice}
          purchaseCancelled={this.purchaseHandler}
          purchaseContinued={this.purchaseContinueHandler}
        />
      );
    if (this.state.ingredients) {
      burger = (
        <Aux>
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

export default WithErrorHandler(BurgerBuilder, axios);

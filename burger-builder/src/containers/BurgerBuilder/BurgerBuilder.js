import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      bacon: 1,
      cheese: 2,
      meat: 2,
      salad: 1,
    },
  };

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <div>Build Contorls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;

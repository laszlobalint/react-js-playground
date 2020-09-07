import React, { Component } from 'react';

import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import WithErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler';

class Orders extends Component {
  state = {
    orders: [],
    loading: true,
  };

  componentDidMount() {
    axios
      .get('/orders.json')
      .then((response) => {
        const orders = [];
        for (let key in response.data)
          orders.push({
            ...response.data[key],
            id: key,
          });
        this.setState({ orders });
      })
      .catch((error) => {})
      .then((response) => {
        this.setState({ loading: false });
      });
  }

  render() {
    return (
      <div>
        {this.state.orders.map((order) => (
          <Order key={order.id} ingredients={order.ingredients} price={order.price} />
        ))}
      </div>
    );
  }
}

export default WithErrorHandler(Orders, axios);

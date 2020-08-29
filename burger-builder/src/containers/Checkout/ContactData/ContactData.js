import React, { Component } from 'react';

import classes from './ContactData.module.css';
import Button from '../../../components/UI/Button/Button';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
  state = {
    name: 'John Doe',
    email: 'john@doe.com',
    address: {
      street: 'Radnóti Miklós street 1.',
      postalCode: '24000',
    },
    deliveryMethod: 'fastest',
    loading: false,
    error: false,
  };

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: this.state.name,
        address: {
          street: this.state.street,
          postalCode: this.state.postalCode,
        },
      },
    };
    axios
      .post('/orders.json', order)
      .then((response) => response)
      .catch((error) => error)
      .then(() => {
        this.setState({ loading: false });
        this.props.history.push('/');
      });
  };

  render() {
    let form = (
      <form>
        <input className={classes.Input} type="text" name="name" placeholder="Enter your name..." />
        <input className={classes.Input} type="email" name="email" placeholder="Enter your email..." />
        <input className={classes.Input} type="text" name="street" placeholder="Enter your address..." />
        <input className={classes.Input} type="number" name="postal" placeholder="Enter your postal code..." />
        <select className={classes.Input} name="deliveryMethod">
          <option value="fastest">Fastest</option>
          <option value="fastest">Later</option>
          <option value="fastest">Pick Up</option>
        </select>
        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) form = <Spinner />;
    return (
      <div className={classes.ContactData}>
        <h4>Enter your contact data:</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;

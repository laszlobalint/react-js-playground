import React, { Component } from 'react';

import classes from './ContactData.module.css';
import Button from '../../../components/UI/Button/Button';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
  state = {
    orderForm: {
      name: this.createInputConfig('input', 'text', 'Enter your name...'),
      email: this.createInputConfig('input', 'text', 'Enter your email...'),
      street: this.createInputConfig('input', 'text', 'Enter your address...'),
      postalCode: this.createInputConfig('input', 'number', 'Enter your postal code...'),
      country: this.createInputConfig('input', 'text', 'Enter your country...'),
      deliveryMethod: this.createInputConfig('select', null, null, true),
    },
    loading: false,
    error: false,
  };

  createInputConfig(elementType, type, placeholder, options) {
    if (!options) {
      return {
        elementType,
        elementConfig: {
          type,
          placeholder,
        },
      };
    } else {
      return {
        elementType,
        elementConfig: {
          options: [
            { value: 'fastest', displayValue: 'Fastest' },
            { value: 'later', displayValue: 'Later' },
            { value: 'cheapest', displayValue: 'Cheapest' },
          ],
        },
      };
    }
  }

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
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
    const formElements = [];
    for (let key in this.state.orderForm) formElements.push({ id: key, config: this.state.orderForm[key] });

    let form = (
      <form>
        {formElements.map((element) => (
          <Input
            key={element.id}
            elementType={element.config.elementType}
            elementConfig={element.config.elementConfig}
            value={element.config.value}
          />
        ))}
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

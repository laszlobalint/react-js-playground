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
    formIsValid: false,
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
        value: '',
        validation: {
          required: true,
          minLength: 3,
          maxLength: 50,
        },
        valid: false,
        touched: false,
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
        value: 'fastest',
        validation: {},
        valid: true,
        touched: false,
      };
    }
  }

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const formData = {};
    for (let inputId in this.state.orderForm) {
      formData[inputId] = this.state.orderForm[inputId].value;
    }
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      orderData: formData,
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

  checkValidity = (value, rules) => {
    let isValid = true;
    if (rules.required) isValid = value.trim() !== '' && isValid;
    if (rules.minLength) isValid = value.length >= rules.minLength && isValid;
    if (rules.maxLength) isValid = value.length <= rules.maxLength && isValid;

    return isValid;
  };

  inputChangedHandler = (event, inputId) => {
    const updatedOrderForm = { ...this.state.orderForm };
    const updatedFormElement = { ...updatedOrderForm[inputId] };
    updatedFormElement.value = event.target.value;

    updatedFormElement.touched = true;
    updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
    updatedOrderForm[inputId] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedOrderForm) formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;

    this.setState({ orderForm: updatedOrderForm, formIsValid });
  };

  render() {
    const formElements = [];
    for (let key in this.state.orderForm) formElements.push({ id: key, config: this.state.orderForm[key] });

    let form = (
      <form onSubmit={this.orderHandler}>
        {formElements.map((element) => (
          <Input
            key={element.id}
            elementType={element.config.elementType}
            elementConfig={element.config.elementConfig}
            value={element.config.value}
            invalid={!element.config.valid}
            shouldValidate={element.config.validation}
            touched={element.config.touched}
            changed={(event) => this.inputChangedHandler(event, element.id)}
          />
        ))}
        <Button btnType="Success" disabled={!this.state.formIsValid}>
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

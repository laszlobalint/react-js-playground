import React, { useState } from 'react';
import { connect } from 'react-redux';

import classes from './ContactData.module.css';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
import WithErrorHandler from '../../../hoc/WithErrorHandler/WithErrorHandler';
import * as actions from '../../../store/actions';
import axios from '../../../axios';
import { updateObject, checkValidity } from '../../../shared/utility';

const createInputConfig = (elementType, type, placeholder, options) => {
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
};

const ContactData = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [orderForm, setOrderForm] = useState({
    name: createInputConfig('input', 'text', 'Enter your name...'),
    email: createInputConfig('input', 'text', 'Enter your email...'),
    street: createInputConfig('input', 'text', 'Enter your address...'),
    postalCode: createInputConfig('input', 'number', 'Enter your postal code...'),
    country: createInputConfig('input', 'text', 'Enter your country...'),
    deliveryMethod: createInputConfig('select', null, null, true),
  });

  const orderHandler = (event) => {
    event.preventDefault();
    const formData = {};
    for (let inputId in orderForm) {
      formData[inputId] = orderForm[inputId].value;
    }
    const order = {
      ingredients: props.ingredients,
      totalPrice: props.totalPrice.toFixed(2),
      orderData: formData,
      userId: props.userId,
    };
    props.onPurchaseBurger(order, props.token);
  };

  const inputChangedHandler = (event, inputId) => {
    const updatedFormElement = updateObject(orderForm[inputId], {
      value: event.target.value,
      valid: checkValidity(event.target.value, orderForm[inputId].validation),
      touched: true,
    });
    const updatedOrderForm = updateObject(orderForm, {
      [inputId]: updatedFormElement,
    });

    let formIsValid = true;
    for (let inputIdentifier in updatedOrderForm) formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;

    setOrderForm(updatedOrderForm);
    setFormIsValid(formIsValid);
  };

  const formElements = [];
  for (let key in orderForm) formElements.push({ id: key, config: orderForm[key] });

  let form = (
    <form onSubmit={orderHandler}>
      {formElements.map((element) => (
        <Input
          key={element.id}
          elementType={element.config.elementType}
          elementConfig={element.config.elementConfig}
          value={element.config.value}
          invalid={!element.config.valid}
          shouldValidate={element.config.validation}
          touched={element.config.touched}
          changed={(event) => inputChangedHandler(event, element.id)}
        />
      ))}
      <Button btnType="Success" disabled={!formIsValid}>
        ORDER
      </Button>
    </form>
  );
  if (props.loading) form = <Spinner />;
  return (
    <div className={classes.ContactData}>
      <h4>Enter your contact data:</h4>
      {form}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ingredients: state.builder.ingredients,
    totalPrice: state.builder.totalPrice,
    loading: state.order.loading,
    token: state.auth.token,
    userId: state.auth.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPurchaseBurger: (data, token) => dispatch(actions.purchaseBurger(data, token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WithErrorHandler(ContactData, axios));

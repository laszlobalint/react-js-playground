import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import withClass from '../../../hoc/with-Class';
import classes from './Person.module.css';

const person = (props) => {
  return (
    <Fragment>
      <p onClick={props.clicked}>
        I'm {props.name} and {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" placeholder="Write a new name..." value={props.name} onChange={props.changed}></input>
    </Fragment>
  );
};

person.propType = {
  clicked: PropTypes.func,
  changed: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
};

export default withClass(person, classes.Person);

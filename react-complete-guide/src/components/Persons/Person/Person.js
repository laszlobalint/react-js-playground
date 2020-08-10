import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';
import withClass from '../../../hoc/with-Class';
import classes from './Person.module.css';

class Person extends Component {
  static contextType = AuthContext;

  componentDidMount() {
    console.log(this.context.authenticated);
  }

  render() {
    return (
      <Fragment>
        {this.context.authenticated ? <p>Authenticated!</p> : <p>Please, log!</p>}
        <p onClick={this.props.clicked}>
          I'm {this.props.name} and {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input type="text" placeholder="Write a new name..." value={this.props.name} onChange={this.props.changed}></input>
      </Fragment>
    );
  }
}

Person.propType = {
  clicked: PropTypes.func,
  changed: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
};

export default withClass(Person, classes.Person);

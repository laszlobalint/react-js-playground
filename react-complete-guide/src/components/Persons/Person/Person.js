import React from 'react';
import classes from './Person.module.css';

const person = (props) => {
  return (
    <div className={classes.Person}>
      <p onClick={props.clicked}>
        I'm {props.name} and {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" placeholder="Write a new name..." value={props.name} onChange={props.changed}></input>
    </div>
  );
};

export default person;

import React from 'react';
import classes from './Cockpit.module.css';

const cockpit = (props) => {
  const btnClasses = [classes.Button];
  const assignedClasses = [];
  if (props.showPersons) btnClasses.push(classes.Red);
  if (props.persons.length <= 2) assignedClasses.push(classes.red);
  if (props.persons.length <= 1) assignedClasses.push(classes.uppercase);

  return (
    <div>
      <h1>{props.appTitle}</h1>
      <p className={assignedClasses.join(' ')}>A working application</p>
      <button className={btnClasses.join(' ')} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;

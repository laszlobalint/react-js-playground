import React, { useEffect } from 'react';
import classes from './Cockpit.module.css';

const Cockpit = (props) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      alert('Fetched data!');
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const btnClasses = [classes.Button];
  const assignedClasses = [];
  if (props.showPersons) btnClasses.push(classes.Red);
  if (props.personsLength <= 2) assignedClasses.push(classes.red);
  if (props.personsLength <= 1) assignedClasses.push(classes.uppercase);

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

export default React.memo(Cockpit);

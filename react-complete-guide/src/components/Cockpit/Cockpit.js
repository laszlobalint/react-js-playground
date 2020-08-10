import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {
  const toggleButtonRef = useRef(null);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    toggleButtonRef.current.click();
    return () => {};
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
      <button ref={toggleButtonRef} className={btnClasses.join(' ')} onClick={props.clicked}>
        Toggle Persons
      </button>
      <button className={classes.Button} onClick={authContext.login}>
        Authentication
      </button>
    </div>
  );
};

export default React.memo(Cockpit);

import React from 'react';
import classes from './Modal.module.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

const Modal = (props) => {
  const assignedClasses = [classes.Modal];
  props.show ? assignedClasses.push(classes.Show) : assignedClasses.push(classes.Hide);
  return (
    <Aux>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div className={assignedClasses.join(' ')}>{props.children}</div>
    </Aux>
  );
};

const areEqual = (prevProps, nextProps) => nextProps.show !== prevProps.show;

export default React.memo(Modal, areEqual);

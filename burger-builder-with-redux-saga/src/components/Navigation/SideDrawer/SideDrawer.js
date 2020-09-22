import React from 'react';

import classes from './SideDrawer.module.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

const SideDrawer = (props) => {
  let assignedClasses = [classes.SideDrawer, classes.Close];
  if (props.opened) assignedClasses = [classes.SideDrawer, classes.Open];
  return (
    <Aux>
      <Backdrop show={props.opened} clicked={props.closed} />
      <div className={assignedClasses.join(' ')} onClick={props.closed}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems isAuthenticated={props.isAuthenticated} />
        </nav>
      </div>
    </Aux>
  );
};

export default SideDrawer;

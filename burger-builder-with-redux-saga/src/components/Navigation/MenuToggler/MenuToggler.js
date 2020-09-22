import React from 'react';

import classes from './MenuToggler.module.css';

const MenuToggler = (props) => (
  <label className={classes.MenuToggler} onClick={props.toggle}>
    <span></span>
  </label>
);

export default MenuToggler;

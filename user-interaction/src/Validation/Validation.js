import React from 'react';

const Validation = (props) => {
  let message = null;
  props.inputLength >= 5 ? (message = 'Text long enough.') : (message = 'Text too short!');
  return <p>{message}</p>;
};

export default Validation;

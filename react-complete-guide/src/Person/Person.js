import React from 'react';
import styled from 'styled-components';
// import './Person.css';

const StyledDiv = styled.div`
  width: 60%;
  margin: 2em auto;
  padding: 1.5em;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  @media (min-width: 600px) {
    width: 450px;
  }
`;

const person = (props) => {
  return (
    <StyledDiv className="Person">
      <p onClick={props.click}>
        I'm {props.name} and {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" placeholder="Write a new name..." value={props.name} onChange={props.changed}></input>
    </StyledDiv>
  );
};

export default person;

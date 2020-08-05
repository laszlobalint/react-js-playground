import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import Person from './Person/Person';

const StyledButton = styled.button`
  background-color: ${(props) => (props.alt ? 'red' : 'green')};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.alt ? 'salmon' : 'lightgreen')};;
    color: black;
  },
`;

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Max', age: 28 },
      { id: '2', name: 'Manu', age: 29 },
      { id: '3', name: 'Jane', age: 40 },
    ],
    otherState: 'Some other state',
    showPersons: false,
  };

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };

  personChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons });
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons });
  };

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((p, i) => {
            return (
              <Person
                key={p.id}
                name={p.name}
                age={p.age}
                changed={(event) => this.personChangedHandler(event, p.id)}
                click={() => this.deletePersonHandler(i)}
              />
            );
          })}
        </div>
      );
    }

    let classes = [];
    if (this.state.persons.length <= 2) classes.push('red');
    if (this.state.persons.length <= 1) classes.push('uppercase');

    return (
      <div className="App">
        <h1>React App</h1>
        <p className={classes.join(' ')}>A working application</p>
        <StyledButton alt={this.state.showPersons ? 1 : 0} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </StyledButton>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;

import React, { Component } from 'react';
import classes from './App.module.css';
import WithClass from '../hoc/WithClass';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';

class App extends Component {
  constructor(props) {
    super(props);
    this.elementRef = React.createRef();
  }

  state = {
    persons: [
      { id: '1', name: 'Max', age: 28 },
      { id: '2', name: 'Manu', age: 29 },
      { id: '3', name: 'Jane', age: 40 },
    ],
    showPersons: false,
    toggleCounter: 0,
  };

  componentDidMount() {
    this.elementRef.current.focus();
  }

  togglePersonsHandler = () => {
    this.setState((prevState, props) => {
      return { showPersons: !this.state.showPersons, toggleCounter: ++prevState.toggleCounter };
    });
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
    if (this.state.showPersons)
      persons = <Persons persons={this.state.persons} clicked={this.deletePersonHandler} changed={this.personChangedHandler} />;

    return (
      <WithClass classes={classes.App}>
        <input ref={this.elementRef} type="number" />
        <Cockpit
          appTitle={this.props.appTitle}
          showPersons={this.state.showPersons}
          personsLength={this.state.persons.length}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </WithClass>
    );
  }
}

export default App;

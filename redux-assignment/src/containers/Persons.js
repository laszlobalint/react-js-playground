import React, { Component } from 'react';
import { connect } from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actionTypes from '../store/action';

class Persons extends Component {
  render() {
    return (
      <div>
        <AddPerson personAdded={this.props.onAddPerson} />
        {this.props.persons.map((person) => (
          <Person key={person.id} name={person.name} age={person.age} clicked={() => this.props.onDeletePerson(person.id)} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    persons: state.persons,
  };
};

const mapDispatchToProps = (dispath) => {
  return {
    onAddPerson: (name, age) => dispath({ type: actionTypes.ADD_PERSON, payload: { name, age } }),
    onDeletePerson: (id) => dispath({ type: actionTypes.DELETE_PERSON, id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);

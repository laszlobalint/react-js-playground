import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps.persons !== this.props.persons;
  // }

  render() {
    return this.props.persons.map((p, i) => {
      return (
        <Person
          key={p.id}
          name={p.name}
          age={p.age}
          changed={(event) => this.props.changed(event, p.id)}
          clicked={() => this.props.clicked(i)}
        />
      );
    });
  }
}

export default Persons;

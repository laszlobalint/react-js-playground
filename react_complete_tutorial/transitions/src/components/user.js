import React, { Component } from 'react';
import UserTemplate from './user_template';

class user extends Component {
  state = {
    name: 'Francis',
    lastname: 'Jones',
    age: 25,
    hobbies: ['run', 'yoga'],
    spanish: false,
    message() {console.log('Hello')},
    car: {brand: 'Ford', model: 'Focus'},
    mother: 'Jane',
    color: 'red'
  }

  changeColor() {
    this.setState({
      color: 'blue'
    })
  }

  render () {
    const style = {
      color: this.state.color
    }
    return (
      <div>
        <h4 style={style}>{this.state.mother}</h4>
        <div onClick={ () => this.changeColor() }>Change color</div>
        <UserTemplate {... this.state}/>
      </div>
    );
  }
}

export default user;
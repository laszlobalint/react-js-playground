import React from 'react';

class ToDoItem extends React.Component {
  render () {
    return (
      <li>{this.props.label}</li>
    );
  }
}

export default ToDoItem;

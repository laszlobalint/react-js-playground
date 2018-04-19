import React from 'react';

class ToDoItem extends React.Component {
  constructor (props) {
    super(props);
    this.state = { isDone: false };
  }

  delete () {
    console.log('Delete was successful!', this.state.isDone);
    this.props.delete(this.props.todo.label);
  }

  changeDone () {
    this.setState({ isDone: !this.state.isDone });
    if (this.state.isDone === true) {
    }
  }

  render () {
    return (
      <div>
        <li onClick={this.changeDone.bind(this)} style={{ color: ((this.state.isDone ? 'green' : 'red')) }}>{this.props.todo.label}
          <button onClick={this.delete.bind(this)}>Delete</button></li>
      </div>
    );
  }
}

export default ToDoItem;

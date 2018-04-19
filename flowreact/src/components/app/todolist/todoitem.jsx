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
      this.delete();
    }
  }

  render () {
    return (
      <div>
        <li onClick={this.changeDone.bind(this)}
          style={{ color: ((this.state.isDone ? 'red' : '')) }}
        >{this.props.label}
          <button type='button' onClick={this.delete.bind(this)}>Delete</button>
        </li>
      </div>
    );
  }
}

export default ToDoItem;

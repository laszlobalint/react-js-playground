import React from 'react';
import ToDoList from './toDoList';
import CreateItem from './createItem';

class TodoIndex extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      todos: [
        { label: 'First task to do' },
        { label: 'Second task to do' },
        { label: 'Third task to do' },
        { label: 'Fourth task to do' },
        { label: 'Fifth task to do' }
      ]
    };
  }

  delete (label) {
    console.log(label);
    let todos = this.state.todos;
    let i = 0;
    while (i < todos.length && todos[i].label !== label) {
      i++;
    }
    console.log(i);
    if (i < todos.length) {
      todos.splice(i, 1);
      this.setState({ todos: todos });
    }
  }

  submit (inputValue) {
    console.log(inputValue);
    let todos = this.state.todos;
    todos.push({ label: inputValue });
    this.setState({ todos: this.state.todos });
  }

  render () {
    return (
      <table class='table table-bordered'>
        <thead>
          <tr>
            <th>Task</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <ToDoList todos={this.state.todos} delete={this.delete.bind(this)} />
            <CreateItem submit={this.submit.bind(this)} />
          </tr>
        </tbody>
      </table>
    );
  }
}

export default TodoIndex;

import React from 'react';
import ToDoList from './app/todolist';
import CreateItem from './app/createitem';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      todos: [
        { label: 'one' },
        { label: 'two' },
        { label: 'three' },
        { label: 'four' },
        { label: 'five' }
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
      this.setState({ todos: this.state.todos });
    }
  }

  submit (inputValue) {
    console.log(inputValue);
    let todos = this.state.todos;
    todos.push({ label: inputValue });
    this.setState({ todos: this.state.todos });
  }

  render () {
    console.log(this.state);
    return (
      <div className='toDoListWrapper'>
        <div class='container'>
          <h2>React practice</h2>
          <div class='panel panel-default'>
            <div class='panel-body'>My To Do List</div>
          </div>
          <table class='table table-bordered'>
            <thead>
              <tr>
                <th>Task</th>
                <th>Comments</th>
              </tr>
            </thead>
            <tbody>
              <div>
                <th><ToDoList todos={this.state.todos} delete={this.delete.bind(this)} />
                  <CreateItem submit={this.submit.bind(this)} /></th>
              </div>
            </tbody>
          </table>
        </div>
      </div >
    );
  }
}

export default App;

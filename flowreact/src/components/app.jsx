import React from 'react';
import ToDoList from './app/todolist';
import CreateItem from './app/createitem';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = { todos: [
      { label: 'one' },
      { label: 'two' },
      { label: 'three' },
      { label: 'four' },
      { label: 'five' }
    ] };
  }

  submit (inputValue) {
    console.log(inputValue);
    let todos = this.state.todos;
    todos.push({label: inputValue});
    this.setState({todos: todos});
  }

  render () {
    console.log(this.state);
    return (
      <div className='toDoListWrapper'>
        <h2>To do list</h2>
        <ToDoList todos={this.state.todos} />
        <CreateItem submit={this.submit.bind(this)} />
      </div>
    );
  }
}

export default App;

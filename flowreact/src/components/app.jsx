import React from 'react';
import ToDoItem from './todolist/todoitem';

class App extends React.Component {
  render () {
    return (
      <ul className='todo-list'>
        <ToDoItem label='First task' />
        <ToDoItem label='Second task' />
        <ToDoItem label='Third task' />
      </ul>
    );
  }
}

export default App;

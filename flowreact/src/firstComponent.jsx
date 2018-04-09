import React from 'react';
import ToDoItem from './todoitem';

class App extends React.Component {
  render () {
    return (
      <ul>
        <ToDoItem label='First task' />
        <ToDoItem label='Second task' />
        <ToDoItem label='Third task' />
      </ul>
    );
  }
}

export default App;

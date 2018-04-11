import React from 'react';
import ToDoList from './app/todolist';
import CreateItem from './app/createitem';

class App extends React.Component {
  render () {
    return (
      <div className='toDoListWrapper'>
        <h2>To do list</h2>
        <ToDoList />
        <CreateItem />
      </div>
    );
  }
}

export default App;

import React from 'react';
import ToDoItem from './todolist/todoitem';

class ToDoList extends React.Component {
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

  render () {
    let todos = this.state.todos.map(element => {
      return <ToDoItem label={element.label} key={element.label} />;
    });
    return (
      <ul className='todo-list'>
        {todos}
      </ul>
    );
  }
}

export default ToDoList;

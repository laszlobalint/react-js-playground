import React from 'react';
import ToDoItem from './todolist/todoitem';

class ToDoList extends React.Component {
  render () {
    let todos = this.props.todos.map(element => {
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

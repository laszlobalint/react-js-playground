import React from 'react';
import ToDoItem from './todolist/todoitem';

class ToDoList extends React.Component {
  delete (label) {
    console.log(label);
    this.props.delete(label);
  }
  render () {
    let todos = this.props.todos.map(todo => {
      return <ToDoItem todo={todo} key={todo} delete={this.delete.bind(this)} />;
    });
    return (
      <ul className='todo-list'>
        {todos}
      </ul>
    );
  }
}

export default ToDoList;

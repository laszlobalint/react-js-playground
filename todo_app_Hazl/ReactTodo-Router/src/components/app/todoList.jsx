import React from 'react';
import TodoItem from './todoList/todoItem';

class TodoList extends React.Component {
  delete (label) {
    this.props.delete(label);
  }

  render () { // RENDERING COMPONENTS (TodoItem) AND PROPS (label="") see also todoitem.jsx
    let toDos = this.props.toDos.map(toDo => {
      return <TodoItem toDo={toDo} key={toDo.label} delete={this.delete.bind(this)} />;
    });
    return (
      <ul className='todo-list'>
        {toDos}
      </ul>
    );
  }
}
export default TodoList;

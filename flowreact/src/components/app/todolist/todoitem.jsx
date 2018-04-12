import React from 'react';

class ToDoItem extends React.Component {
  constructor (props) {
    super(props);
    this.state = { isDone: false };
  }
  changeDone () {
    this.setState({ isDone: !this.state.isDone });
  }

  render () {
    return (
      <div>
        <li
          onClick={this.changeDone.bind(this)}
          style={{ color: ((this.state.isDone ? 'red' : '')) }}
        >{this.props.label}
        </li>
      </div>
    );
  }
}

export default ToDoItem;

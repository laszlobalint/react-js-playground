import React from 'react';

class ToDoItem extends React.Component {
  constructor (props) {
    super(props);
    this.state = { items: [], text: '' };
    this.change = this.change.bind(this);
    this.submit = this.submit.bind(this);
    this.state = { isRed: false };
  }
  changeColor () {
    this.setState({ isRed: !this.state.isRed });
  }

  render () {
    return (
      <div>
        <h2>To do list</h2>
        <li
          onClick={this.changeColor.bind(this)}
          style={{ color: ((this.state.isRed ? 'red' : '')) }}
        >{this.props.label}</li>
      </div>
    );
  }
}

export default ToDoItem;

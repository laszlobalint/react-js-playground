import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import Char from './Char/Char';
import Validation from './Validation/Validation';

class App extends Component {
  state = {
    username: 'John Doe',
    inputText: '',
  };

  changeUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  setInputTextHandler = (event) => {
    this.setState({ inputText: event.target.value });
  };

  removeCharEventHandler = (index) => {
    const inputText = this.state.inputText.split('');
    inputText.splice(index, 1);
    const updatedText = inputText.join('');
    this.setState({ inputText: updatedText });
  };

  render() {
    return (
      <div className="App">
        <UserInput username={this.state.username} nameChanged={this.changeUsername} />
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
        <hr />
        <div>
          <input type="text" value={this.state.inputText} onChange={(event) => this.setInputTextHandler(event)}></input>
          <p>{this.state.inputText.length}</p>
        </div>
        <Validation inputLength={this.state.inputText.length} />
        {this.state.inputText.split('').map((char, index) => {
          return <Char key={index} char={char} clicked={(event) => this.removeCharEventHandler(index)} />;
        })}
      </div>
    );
  }
}

export default App;

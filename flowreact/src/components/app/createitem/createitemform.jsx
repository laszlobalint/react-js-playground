import React from 'react';

class CreateItemForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }
  submit () {
    console.log('Submit was successful!');
    this.props.submit(this.state.inputValue);
  }
  changeInputValue (element) {
    this.setState({inputValue: element.target.value});
  }

  render () {
    return (
      <form>
        <input type='text' placeholder='What do I need to do?' value={this.state.inputValue} onChange={this.changeInputValue.bind(this)} />
        <button type='button' class='btn btn-success' onClick={this.submit.bind(this)}>Submit</button>
        <br />
        {this.state.inputValue}
      </form>
    );
  }
}

export default CreateItemForm;

import React, { PureComponent } from 'react';

class Life extends PureComponent {
  state = {
    title: 'Life cycles'
  }

/*   componentWillMount() {
    console.log('Happens before rendering');
  }

  componentWillUpdate() {
    console.log('Before update');
  }

  componentDidUpdate() {
    console.log('After update');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(this.state.title);
    console.log(nextState.title);
    if (nextState.title === this.state.title) {
      return false;
    }
    return true;
  }

  componentWillReceiveProps() {
    console.log('Before receive props');
  }

  componentWillUnmount() {
    console.log('Unmount')
  } */

  render() {
    console.log('RENDER');
    return (
      <div>
        <h3>{this.state.title}</h3>
        <div onClick={ () => this.setState({title: 'Something else'}) }>CLICK TO CHANGE</div>
      </div>
    );
  }

/*   componentDidMount() {
    console.log('Happens after rendering');
    document.querySelector('h3').style.color = 'red';
  } */
}

export default Life;

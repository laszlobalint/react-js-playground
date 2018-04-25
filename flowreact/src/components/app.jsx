import React from 'react';
import TodoIndex from './app/todoIndex';
// import ContactIndex from './app/contactIndex';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';

class App extends React.Component {
  render () {
    console.log(this.state);
    return (
      <div className='toDoListWrapper'>
        <div class='container'>
          <h2>React practice</h2>
          <div class='panel panel-default'>
            <div class='panel-body'>My To Do List</div>
          </div>
          <BrowserRouter>
            <Route path='/' component={TodoIndex} />
            {/* <Route path='/contact' component={ContactIndex} /> */}
          </BrowserRouter>
        </div>
      </div >
    );
  }
}

export default App;

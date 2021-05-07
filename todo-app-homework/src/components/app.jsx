/* EXAMPLE FOR CLASSES
class Something {
  constructor () {
    console.log('ok');
  }
}

export default Something; // NO, NO SENOR!!!: export.modules = Something
*/
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import ModalFooter from 'react-bootstrap/lib/ModalFooter';
import React from 'react';
import Navigation from './app/navbar';
import TodoIndex from './app/todoIndex';
import ContactIndex from './app/contactIndex';
import { BrowserRouter, Link } from 'react-router-dom';
import { Route } from 'react-router';

class App extends React.Component {
  render() { // RENDERING COMPONENTS (TodoListWrapper) see also todoitem.jsx
    return (
      <div className='todoListWrapper'>
        <Jumbotron bsClass='my-jumbotron' />
        <Navigation />
        <BrowserRouter>
          <div>
            <Link to='/contact'>Contact</Link>
            <Link to='/todos'>ToDo List</Link>
            <Route path='/todos' component={TodoIndex} />
            <Route path='/contact' component={ContactIndex} />
          </div>
        </BrowserRouter>
        <ModalFooter>
          <p>Szabina Házi, Flow Academy © 2018.</p>
        </ModalFooter>
      </div>
    );
  }
}
export default App;

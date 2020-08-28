import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch, NavLink } from 'react-router-dom';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import Error from './containers/Error/Error';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/">
        <div className="App">
          <nav>
            <ul style={{ listStyle: 'none', margin: 'auto', padding: '0' }}>
              <li>
                <NavLink to="/users" activeStyle={{ color: '#fa923f' }}>
                  Users
                </NavLink>
              </li>
              <li>
                <NavLink to="/courses" activeStyle={{ color: '#fa923f' }}>
                  Courses
                </NavLink>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/users" exact component={Users} />
            <Route path="/courses" component={Courses} />
            <Redirect from="/all-courses" to="/courses" />
            <Redirect from="/" to="/courses" />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

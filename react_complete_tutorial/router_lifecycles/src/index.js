import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';

// COMPONENTS
import Home from './components/home';
import Posts from './components/posts';
import Profiles from './components/profiles';
import PostItem from './components/post_item';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <header>
          <NavLink to='/'>Home</NavLink><br />
          <NavLink
            to='/posts'
            activeStyle={{ color: 'red' }}
            activeClassName='selected'
          >Posts</NavLink><br />
          <NavLink to={{
            pathname: '/profiles'
          }}>Profiles</NavLink><br />
          <hr />
        </header>
        <Switch>
          <Route path='/posts/:id/:username' component={PostItem} />
          <Route path='/profiles' component={Profiles} />
          <Route path='/posts' component={Posts} />
          <Route path='/' exact component={Home} />
          <Route render={() => <h3>Error 404 Custom Page</h3>} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));

import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import './Blog.css';
import Posts from './Posts/Posts';
import AsyncComponent from '../../hoc/asyncComponent';

const AsyncNewPost = AsyncComponent(() => import('./NewPost/NewPost'));

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/posts" exact="true">
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink to={{ pathname: '/new-post', hash: '#submit', search: '?quick-submit=true' }}>New Post</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/posts" component={Posts} />
          <Route path="/new-post" component={AsyncNewPost} />
          <Redirect from="/" to="/posts" />
          <Route render={() => <h1>Page not found! (404)</h1>} />
        </Switch>
      </div>
    );
  }
}

export default Blog;

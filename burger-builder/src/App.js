import React, { Component } from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './hoc/Layout/Layout';
import AsyncComponent from './hoc/AsyncComponent/AsyncComponent';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions';

const ASYNC_AUTH = AsyncComponent(() => {
  return import('./containers/Auth/Auth');
});
const ASYNC_CHECKOUT = AsyncComponent(() => {
  return import('./containers/Checkout/Checkout');
});
const ASYNC_ORDERS = AsyncComponent(() => {
  return import('./containers/Orders/Orders');
});

class App extends Component {
  componentDidMount() {
    this.props.onCheckAuthState();
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/auth" component={ASYNC_AUTH} />
        <Route path="/" exact component={BurgerBuilder} />
        <Redirect to="/" />
      </Switch>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/checkout" component={ASYNC_CHECKOUT} />
          <Route path="/orders" component={ASYNC_ORDERS} />
          <Route path="/logout" component={Logout} />
          <Route path="/auth" component={ASYNC_AUTH} />
          <Route path="/" exact component={BurgerBuilder} />
          <Redirect to="/" />
        </Switch>
      );
    }

    return (
      <div>
        <Layout>{routes}</Layout>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token && state.auth.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCheckAuthState: () => dispatch(actions.checkAuthState()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

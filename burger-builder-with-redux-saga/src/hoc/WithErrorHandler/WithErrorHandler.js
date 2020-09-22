import React, { Component } from 'react';

import Aux from '../Auxiliary/Auxiliary';
import Modal from '../../components/UI/Modal/Modal';

const WithErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null,
    };

    SAFE_componentWillMount() {
      this.reqIntrceptor = axios.interceptors.request.use((req) => {
        this.setState({ error: null });
        return req;
      });
      this.resIntrceptor = axios.interceptors.response.use(
        (res) => res,
        (error) => {
          this.setState({ error: error.toString() });
        },
      );
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqIntrceptor);
      axios.interceptors.response.eject(this.resIntrceptor);
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };

    render() {
      return (
        <Aux>
          <Modal show={this.state.error} modalClosed={this.errorConfirmedHandler}>
            {this.state.error ? this.state.error : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  };
};

export default WithErrorHandler;

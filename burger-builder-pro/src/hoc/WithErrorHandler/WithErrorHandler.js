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
            {this.state.error && this.state.error}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  };
};

export default WithErrorHandler;

// import React, { useState, useEffect } from 'react';

// import Aux from '../Auxiliary/Auxiliary';
// import Modal from '../../components/UI/Modal/Modal';

// const WithErrorHandler = ({ axios, component: WrappedComponent, ...props }) => {
//   const [error, setError] = useState(null);

//   const reqInterceptor = axios.interceptors.request.use((req) => {
//     setError(null);
//     return req;
//   });
//   const resInterceptor = axios.interceptors.response.use(
//     (res) => res,
//     (err) => {
//       setError(err);
//     },
//   );

//   useEffect(() => {
//     return () => {
//       axios.interceptors.request.eject(reqInterceptor);
//       axios.interceptors.response.eject(resInterceptor);
//     };
//   }, [reqInterceptor, resInterceptor, axios]);

//   const errorConfirmedHandler = () => {
//     setError(null);
//   };

//   return (
//     <Aux>
//       <Modal show={error} modalClosed={errorConfirmedHandler}>
//         {error && error.message}
//       </Modal>
//       <WrappedComponent {...props} />
//     </Aux>
//   );
// };

// export default WithErrorHandler;

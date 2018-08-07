import React, { Component } from 'react';
import { connect } from 'react-redux';
import { movieslist, directorlist } from '../actions';
import { bindActionCreators } from 'redux';
import Movieslist from '../components/moviesList';

class App extends Component {
  componentWillMount () {
    this.props.movieslist();
    this.props.directorlist();
  }

  render () {
    return (
      <div>
        <Movieslist {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.movies
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({movieslist, directorlist}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

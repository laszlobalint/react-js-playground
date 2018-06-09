import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';

class App extends Component {
  componentWillMount () {
    this.props.movieslist()
  }

  renderMovies = (movies) => (
    movies ?
      movies.map(item => (
        <div>
          {item.name}
        </div>  
      )) : null
    )

  render () {
    return (
      <div>
        {this.renderMovies(this.props.data.movies)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.movies
  };
};

export default connect(mapStateToProps, actions)(App);

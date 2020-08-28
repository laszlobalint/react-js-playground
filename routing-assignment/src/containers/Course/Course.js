import React, { Component } from 'react';

class Course extends Component {
  state = {
    param: [],
  };

  componentDidMount() {
    this.parseQueryParams();
  }

  componentDidUpdate() {
    this.parseQueryParams();
  }

  parseQueryParams = () => {
    const query = new URLSearchParams(this.props.location.search);
    for (let param of query.entries()) {
      if (param[1] !== this.state.param[1]) this.setState({ param });
    }
  };

  render() {
    return (
      <div>
        <h1>{this.state.param[1]}</h1>
        <p>You selected the Course with ID: {this.props.match.params.id}</p>
      </div>
    );
  }
}

export default Course;

import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {
  state = {
    loadedPost: null,
  };

  componentDidMount() {
    if (
      (!this.state.loadedPost && this.props.match.params.id) ||
      (this.props.match.params.id && this.state.loadedPost.id !== Number(this.props.match.params.id))
    )
      this.fetchData();
  }

  componentDidUpdate() {
    if (this.state.loadedPost.id !== Number(this.props.match.params.id)) this.fetchData();
  }

  fetchData = () => {
    axios.get(`posts/${this.props.match.params.id}`).then((response) => {
      this.setState({ loadedPost: response.data });
    });
  };

  deleteDataHandler = () => {
    axios.delete(`posts/${this.state.loadedPost.id}`).then((response) => this.props.onDeletePost(Number(this.props.match.params.id)));
  };

  render() {
    let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
    console.log(this.props);
    if (this.props.match.params.id) post = <p style={{ textAlign: 'center' }}>Loading...</p>;
    if (this.state.loadedPost) {
      post = (
        <div className="FullPost">
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <div className="Edit">
            <button className="Delete" onClick={this.deleteDataHandler}>
              Delete
            </button>
          </div>
        </div>
      );
    }
    return post;
  }
}

export default FullPost;

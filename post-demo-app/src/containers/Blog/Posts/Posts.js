import React, { Component } from 'react';
import axios from 'axios';
import './Posts.css';
import Post from '../../../components/Post/Post';
import { Link, Route } from 'react-router-dom';
import FullPost from '../FullPost/FullPost';

class Posts extends Component {
  state = {
    posts: [],
    error: false,
  };

  componentDidMount() {
    axios
      .get('/posts')
      .then((response) => {
        const posts = response.data.slice(0, 4).map((post) => {
          return {
            ...post,
            author: 'Bálint',
          };
        });
        this.setState({ posts });
      })
      .catch((error) => {
        this.setState({ error: true });
      });
  }

  postSelectedHandler = (id) => {
    this.props.history.push('/' + id);
  };

  postDeletedHandler = (id) => {
    console.log(id);
    let posts = this.state.posts.filter((p) => {
      return p.id !== id;
    });
    this.setState({ posts });
    this.props.history.push('/posts');
  };

  render() {
    let posts = <span style={{ textAlign: 'center' }}>Something went wrong!</span>;
    if (!this.state.error) {
      posts = this.state.posts.map((post) => {
        return (
          <Link key={post.id} to={this.props.match.url + '/' + post.id}>
            <Post author={post.author} title={post.title} clicked={() => this.postSelectedHandler(post.id)} />
          </Link>
        );
      });
    }
    return (
      <div>
        <section className="Posts">{posts}</section>
        <Route
          path={this.props.match.url + '/:id'}
          exact
          render={(props) => <FullPost {...props} onDeletePost={(id) => this.postDeletedHandler(id)} />}
        />
      </div>
    );
  }
}

export default Posts;

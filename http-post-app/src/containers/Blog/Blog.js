import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
  state = {
    posts: [],
    selectedPostId: null,
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

  postSelectedHandler = (selectedPostId) => {
    this.setState({ selectedPostId });
  };

  postDeletedHandler = () => {
    let posts = this.state.posts.filter((p) => {
      return p.id !== this.state.selectedPostId;
    });
    this.setState({
      posts,
      selectedPostId: null,
    });
  };

  render() {
    let posts = <span style={{ textAlign: 'center' }}>Someting went wrong!</span>;
    if (!this.state.error) {
      posts = this.state.posts.map((post) => {
        return <Post key={post.id} author={post.author} title={post.title} clicked={() => this.postSelectedHandler(post.id)} />;
      });
    }

    return (
      <div>
        <section className="Posts">{posts}</section>
        <section>
          <FullPost id={this.state.selectedPostId} onDeletePost={this.postDeletedHandler} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Post extends Component {
  render() {
    const { post } = this.props;

    return (
      <div className="post">
        <div>#{post.id}</div>
        <div className="post_title">{post.title}</div>
        <div className="post_title">{post.text}</div>
        <hr/>
      </div>
    );
  }
}

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired
};

export default Post;

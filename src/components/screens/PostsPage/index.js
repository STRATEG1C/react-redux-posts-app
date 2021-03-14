import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, selectAllPosts } from '../../../store/Post';
import PageWrapper from '../../common/PageWrapper';
import Post from './Post';

class PostsPage extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const { isLoading, posts } = this.props;

    return (
      <PageWrapper title="Posts">
        Posts Page
        <br/>
        {isLoading && 'Posts are loading...'}
        <br/>
        {posts.map(item => <Post post={item} key={item.id} />)}
      </PageWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  posts: selectAllPosts(state.post),
  isLoading: state.post.isLoading
});

const mapDispatchToProps = {
  fetchPosts
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsPage);

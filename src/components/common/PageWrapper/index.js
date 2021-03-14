import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PageWrapper extends Component {
  componentDidMount() {
    document.title = this.props.title;
  }

  render() {
    return (
      <div className="page-wrapper">
        {this.props.children}
      </div>
    )
  }
}

PageWrapper.propTypes = {
  title: PropTypes.string.isRequired,

  // I've found it on StackOverflow :)
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default PageWrapper;

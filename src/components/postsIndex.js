import React from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';
import _ from 'lodash';
import {Link} from 'react-router-dom';

class PostsIndex extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  };

  render () {
    const {posts} = this.props;

    return (
      <div>
        <div className="text-xs-right">
          <Link
            className="btn btn-primary"
            to="/posts/new"
          >
            Add a post!
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this._renderPosts(posts)}
        </ul>
      </div>
    );
  }

  _renderPosts = (posts) => {
    return _.map(posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={`/posts/${post.id}`}>
            {post.title}
          </Link>
        </li>
      );
    })
  }
}

const mapStateToProps = (state) => {
  return {posts: state.posts}
};

export default connect(mapStateToProps, {fetchPosts})(PostsIndex);

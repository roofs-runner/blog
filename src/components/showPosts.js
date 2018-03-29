import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchPost, deletePost} from '../actions';

class ShowPost extends React.Component {
  componentDidMount () {
    const {id} = this.props.match.params;
    this.props.fetchPost(id);
  }

  render () {
    const {post} = this.props;

    if(!post) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <Link to="/">Back to index</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this._onDeleteClick}
        >
          Delete post
        </button>
        <h3>{post.title}</h3>
        <h6>{post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }

  _onDeleteClick = () => {
    const {id} = this.props.match.params;

    this.props.deletePost(id, () => {
      this.props.history.push("/");
    });
  }
}

const mapStateToProps = ({posts}, ownProps) => {
  return {post: posts[ownProps.match.params.id]}
};

export default connect(mapStateToProps, {fetchPost, deletePost})(ShowPost);
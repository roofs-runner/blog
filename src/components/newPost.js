import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createPost} from '../actions';

class NewPost extends React.Component {

  render () {
    const {handleSubmit} = this.props;

    return (
      <form onSubmit={handleSubmit(this._handleSubmit)}>
        <Field
          label="Title"
          name="title"
          component={this._renderField}
        />
        <Field
          label='Categories'
          name="categories"
          component={this._renderField}
        />
        <Field
          label='Post Content'
          name="content"
          component={this._renderField}
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Link to='/' className="btn btn-danger">
          Cancel
        </Link>
      </form>
    );
  }

  _renderField = (field) => {
    const {meta: {touched, error}} = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : null}
        </div>
      </div>
    );
  }

  _handleSubmit = (values) => {
    this.props.createPost(values, () => {
      this.props.history.push("/");
    });
  }
}

const validate = (values) => {
  const errors = {};

  if (!values.title) {
    errors.title = 'Enter a valid title';
  }

  if (!values.categories) {
    errors.categories = 'Enter some categories';
  }

  if (!values.content) {
    errors.content = 'Enter content';
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'newPostForm'
})(
  connect(null, {createPost})(NewPost)
);
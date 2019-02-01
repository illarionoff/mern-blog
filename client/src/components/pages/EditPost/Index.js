import React, { Component } from "react";

import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

// Redux
import { connect } from "react-redux";
import { editBlogpost } from "../../../actions/blogpostActions";

class index extends Component {
  state = {
    title: "",
    body: ""
  };

  componentDidMount() {
    this.setState({
      title: this.props.blogpost.editPost.title,
      body: this.props.blogpost.editPost.body
    });
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const editedBlogpost = {
      title: this.state.title,
      body: this.state.body,
      _id: this.props.blogpost.editPost._id
    };
    this.props.editBlogpost(editedBlogpost, this.props.history);
  };

  render() {
    const { editPost } = this.props.blogpost;
    return (
      <div>
        <div>
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              placeholder="Title"
              onChange={this.onChange}
              name="title"
              value={this.state.title}
            />
            <input
              type="text"
              placeholder="Body"
              onChange={this.onChange}
              name="body"
              value={this.state.body}
            />
            <input type="submit" className="button" placeholder="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

index.propTypes = {
  auth: PropTypes.object.isRequired,
  blogpost: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  blogpost: state.blogpost
});

export default connect(
  mapStateToProps,
  { editBlogpost }
)(withRouter(index));

import React, { Component } from "react";

import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import "./EditPost.scss";
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
      <section className="editform">
        <form onSubmit={this.onSubmit} className="editform-input">
          <input
            className="center"
            type="text"
            placeholder="Title"
            onChange={this.onChange}
            name="title"
            value={this.state.title}
          />

          <textarea
            className="center"
            value={this.state.body}
            onChange={this.onChange}
            name="body"
          />
          <div className="center">
            <input type="submit" className="button" placeholder="Submit" />
            <button
              className="button button-green"
              onClick={() => this.props.history.goBack()}
            >
              BACK
            </button>
          </div>
        </form>
      </section>
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

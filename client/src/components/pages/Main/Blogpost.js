import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
// Redux
import { connect } from "react-redux";
import { setPost, setEditBlogpost } from "../../../actions/blogpostActions";

class Blogpost extends Component {
  onEditClick = e => {
    e.preventDefault();
    this.props.setEditBlogpost(this.props.blogpost);
    this.props.history.push("/edit");
  };
  render() {
    const { blogpost } = this.props;
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="body__post">
        <h3 className="body_list_subheader title title-secondary">
          Date: {blogpost.date.slice(0, 10)}
        </h3>
        <h2 className="body__header title title-primary">{blogpost.title}</h2>

        <div className="solid-line" />
        <img
          className="body__image"
          src="https://source.unsplash.com/800x600"
          alt="Post image"
        />
        <p className="body__text paragraph paragraph-left">{blogpost.body}</p>
        <Link
          to="/post"
          className="button button-green"
          onClick={() => this.props.setPost(blogpost)}
        >
          Read More
        </Link>
        {isAuthenticated ? (
          <button className="button" onClick={this.onEditClick}>
            Edit
          </button>
        ) : null}
      </div>
    );
  }
}

Blogpost.propTypes = {
  setPost: PropTypes.func.isRequired,
  blogpost: PropTypes.object.isRequired,
  setEditBlogpost: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { setPost, setEditBlogpost }
)(withRouter(Blogpost));

import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// Redux
import { connect } from "react-redux";
import { setPost } from "../../../actions/blogpostActions";

class Blogpost extends Component {
  render() {
    const { blogpost } = this.props;
    return (
      <div className="body__post">
        <h2 className="body__header">{blogpost.title}</h2>
        <h3 className="body_list_subheader">
          Date: {blogpost.date.slice(0, 10)}
        </h3>
        <img
          className="body__image"
          src="https://source.unsplash.com/800x600"
          alt="Post image"
        />
        <p className="body__text">{blogpost.body}</p>
        <Link
          to="/post"
          className="button button-green"
          onClick={() => this.props.setPost(blogpost)}
        >
          Read More
        </Link>
      </div>
    );
  }
}

Blogpost.propTypes = {
  setPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { setPost }
)(Blogpost);

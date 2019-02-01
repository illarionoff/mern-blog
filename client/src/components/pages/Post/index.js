import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Aside from "../Main/Aside";

// Redux
import { connect } from "react-redux";

import { setEditBlogpost } from "../../../actions/blogpostActions";

class index extends Component {
  onEditClick = e => {
    e.preventDefault();
    this.props.setEditBlogpost(this.props.blogpost.currentPost);
    this.props.history.push("/edit");
  };

  render() {
    console.log(this.props);
    const { currentPost } = this.props.blogpost;
    return (
      <div className="main">
        <div className="body__post">
          <h2 className="body__header">{currentPost.title}</h2>
          <h3 className="body_list_subheader">
            Date: {currentPost.date.slice(0, 10)}
          </h3>
          <img
            className="body__image"
            src="https://source.unsplash.com/800x600"
            alt="Post image"
          />
          <p className="body__text">{currentPost.body}</p>
          <button
            className="button button-green"
            onClick={() => this.props.history.goBack()}
          >
            BACK
          </button>
          <button onClick={this.onEditClick}>Edit</button>
        </div>
        <Aside />
      </div>
    );
  }
}

index.propTypes = {
  blogpost: PropTypes.object.isRequired,
  setEditBlogpost: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  blogpost: state.blogpost
});

export default connect(
  mapStateToProps,
  { setEditBlogpost }
)(index);

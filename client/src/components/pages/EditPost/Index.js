import React, { Component } from "react";

import PropTypes from "prop-types";

// Redux
import { connect } from "react-redux";

class index extends Component {
  render() {
    const { editPost } = this.props.blogpost;
    return <div>{editPost.title}</div>;
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

export default connect(mapStateToProps)(index);

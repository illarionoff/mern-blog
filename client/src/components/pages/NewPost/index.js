import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
// Redux
import { connect } from "react-redux";
import { addNewPost } from "../../../actions/blogpostActions";

class index extends Component {
  state = {
    title: "",
    body: "",
    errors: {}
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const newBlogpost = {
      title: this.state.title,
      body: this.state.body
    };
    this.props.addNewPost(newBlogpost, this.props.history);
  };

  render() {
    return (
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
    );
  }
}
index.propTypes = {
  addNewPost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addNewPost }
)(withRouter(index));

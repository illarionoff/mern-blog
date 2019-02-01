import React, { Component } from "react";
import PropTypes from "prop-types";

// Redux
import { connect } from "react-redux";
import { loginUser } from "../../../actions/authActions";
import "./Login.scss";

class index extends Component {
  state = {
    email: "",
    password: "",
    errors: {}
  };

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(user);
    console.log(user);
  };

  render() {
    return (
      <section className="loginform">
        <form noValidate className="loginform-input" onSubmit={this.onSubmit}>
          <h2 className="loginform-title title title-primary">Login</h2>
          <input
            name="email"
            value={this.state.email}
            type="email"
            placeholder="Email"
            onChange={this.onChange}
            labels="Email address"
          />
          <input
            name="password"
            value={this.state.password}
            type="password"
            placeholder="Password"
            onChange={this.onChange}
            labels="Your password"
          />

          <div className="loginform-button">
            <button type="submit" className="button button-green">
              Submit
            </button>
          </div>
        </form>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(index);

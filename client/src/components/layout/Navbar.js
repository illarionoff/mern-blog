import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import PropTypes from "prop-types";
// Redux
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Navbar extends Component {
  render() {
    const { isAuthenticated } = this.props.auth;
    const guestPanel = (
      <ul className="navbar__menu">
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    );
    const adminPanel = (
      <ul className="navbar__menu">
        <li>
          <Link to="/new">New</Link>
        </li>
        <li>
          <Link to="/stats">Stats</Link>
        </li>
        <li>
          <button onClick={() => this.props.logoutUser()}>Logout</button>
        </li>
      </ul>
    );
    return (
      <div className="navbar">
        <div className="navbar__brand">
          <Link to="/">LOGO</Link>
        </div>
        {isAuthenticated ? adminPanel : guestPanel}
      </div>
    );
  }
}

Navbar.propTypes = {
  auth: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);

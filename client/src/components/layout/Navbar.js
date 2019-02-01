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
      <ul className="navbar__menu ">
        <li>
          <Link to="/login" className="link">
            Login
          </Link>
        </li>
      </ul>
    );
    const adminPanel = (
      <ul className="navbar__menu">
        <li>
          <Link to="/new" className="link">
            New
          </Link>
        </li>
        <li>
          <Link to="/stats" className="link">
            Stats
          </Link>
        </li>
        <li>
          <button onClick={() => this.props.logoutUser()} className="link">
            Logout
          </button>
        </li>
      </ul>
    );
    return (
      <div className="navbar">{isAuthenticated ? adminPanel : guestPanel}</div>
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

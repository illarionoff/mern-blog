import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./scss/App.scss";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
// Layout components
import Header from "./components/layout/Header";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
// Page components
import Login from "./components/pages/Login";
import Main from "./components/pages/Main";
import My404Component from "./components/pages/My404Component";
import Post from "./components/pages/Post";
import NewPost from "./components/pages/NewPost";
import EditPost from "./components/pages/EditPost";
// Actions
import { setCurrentUser, logoutUser } from "./actions/authActions";
// Store
import store from "./store";

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // decode token and get user info and expiration
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Header />
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/new" component={NewPost} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/post" component={Post} />
              <Route exact path="/edit" component={EditPost} />
              <Route path="*" component={My404Component} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

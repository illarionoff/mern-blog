import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
// Layout components
import Header from "./components/layout/Header";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
// Page components
import Login from "./components/pages/Login";
import Main from "./components/pages/Main";
import My404Component from "./components/pages/My404Component";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Header />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/login" component={Login} />
            <Route path="*" component={My404Component} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

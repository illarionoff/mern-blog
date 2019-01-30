import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Main from "./components/Main";
import My404Component from "./components/My404Component";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/login" component={Login} />
            <Route path="*" component={My404Component} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

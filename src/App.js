import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Signup from "./components/Signup";
import Signin from "./components/Login";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signin" component={Signin} />
        </div>
      </Router>
    );
  }
}

export default App;

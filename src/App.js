import React, { Component } from "react";
import { Route, Link, BrowserRouter, Switch } from "react-router-dom";
import { Provider } from "react-redux"; // Redux Provider
import store from "./store";

import "./css/stylesheet.css"; // import before pages or style gets funky
import Home from "./pages/Home";
import Pledge from "./pages/Pledge";
import About from "./pages/About";
import India from "./pages/India";
import Rwanda from "./pages/Rwanda";
import Oops from "./pages/Oops";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/Pledge" component={Pledge} exact />
            <Route path="/About" component={About} exact />
            <Route path="/India" component={India} exact />
            <Route path="/Rwanda" component={Rwanda} exact />
            <Route path="/Oops" component={Oops} exact />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

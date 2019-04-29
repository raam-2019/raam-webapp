import React, { Component } from 'react';
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom';

import Dashboard from './Components/Dashboard/dashboard';
import Fanexperience from './Components/FanExperience/fanexperience';

import { Provider } from "react-redux"; // Redux Provider
import store from "./store";

import Navagation from "./Components/Navagation";
import Mapboxmain from "./Components/FanExperience/mapboxmain";

// import 'mapbox-gl/dist/mapbox-gl.css';

class App extends Component {
  render() {
    return (
      //Fan experience page. This is the first page that will load. For Dashboard access for now 
      //we will have to add /dashboardRAAMforVIPaccess to out http

      //Removing the extact will show both the fan page and dash page together
      //which we might need later to avoid multiple same implementations.
      //For development purpose I have added the exact.
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            {/* <Route path="/" component={Navagation} /> */}
            <Route path="/" component={Fanexperience}  />
            <Route path="/dashboardRAAMforVIPaccess" component={Dashboard} />
          </Switch>
        </BrowserRouter>
      </Provider>


    );
  }
}

export default App;

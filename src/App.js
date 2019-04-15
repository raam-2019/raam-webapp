import React, { Component } from 'react';
import { Route, Link, BrowserRouter } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard/dashboard';
import Fanexperience from './Components/FanExperience/fanexperience';

class App extends Component {
  render() {
    return (
      //Fan experience page. This is the first page that will load. For Dashboard access for now 
      //we will have to add /dashboardRAAMforVIPaccess to out http
      <BrowserRouter>
        <div>
          <Route path="/" component={Fanexperience} />
          <Route path="/dashboardRAAMforVIPaccess" component={Dashboard} />
        </div>
      </BrowserRouter>


    );
  }
}

export default App;

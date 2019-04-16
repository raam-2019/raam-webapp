import React, { Component } from 'react';
import { Collapse } from "reactstrap";
import "./custom_stylesheet.css"

class mySidebar extends Component {
    constructor(props){
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            collapse: true,
        }
    }

    toggle(){
        this.setState({ collapse: !this.state.collapse });
    }

    ReloadWindow = e => {
        window.location.assign(e.target.name);
        setTimeout(function () {
          window.location.reload();
        }, 8);
      }

    render() { 
        return ( 
            <nav id="sidebar">
            <div className="sidebar-header">
              <h3>Placeholder Title</h3>
            </div>
            <ul className="list-unstyled components">
              <li>
                <a onClick={this.ReloadWindow} name="/">View 1</a>
              </li>
              <li>
                <a onClick={this.ReloadWindow} name="/">View 2</a>
              </li>
              <li>
                <a onClick={this.ReloadWindow} name="/">View 3</a>
              </li>
              <li>
                <a onClick={this.ReloadWindow} name="/">View 4</a>
              </li>
              <li>
                <a onClick={this.ReloadWindow} name="/">View 5</a>
              </li>
              <li>
                <a onClick={this.ReloadWindow} name="/">View 6</a>
              </li>
              <li>
                <a onClick={this.ReloadWindow} name="/">View 7</a>
              </li>
              <li className="active">
                <a
                  href="#placeHolder"
                  data-toggle="collapse"
                  aria-expanded="false"
                  className="dropdown-toggle"
                  onClick={this.toggle}
                  style={this.state}
                  id="dropDown"
                >
                  Favorites
                </a>
                <Collapse isOpen={this.state.collapse}>
                <ul className="list-unstyled">
                    <li>
                      <a href="https://www.google.com/">Link 1</a>
                    </li>
                    <li>
                      <a href="https://www.google.com/">Link 2</a>
                    </li>
                    <li>
                      <a href="https://www.google.com/">Link 3</a>
                    </li>
                  </ul>
                </Collapse>
              </li>
            </ul>
          </nav>
         );
    }
}
 
export default mySidebar;
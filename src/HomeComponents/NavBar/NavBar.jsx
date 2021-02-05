import React, { Component } from "react";
import "../../css/Styles.css";
import DropButton from "./DropButton";
import logo from "../../images/iym.png";

class NavBar extends Component {
  render() {
    return (
      <div className="Nav-Bar">
        <div className="row">
          {/* add col here for icon or something */}
          <div className="col-sm-6 Nav-Bar-Title">
            <a href="/">
              <img src={logo} alt="It's Your Move" />
            </a>
          </div>

          <div className="col-sm-6 Nav-Bar-Content">
            <div className="Nav-Bar-Content-Item">
              <a className="Nav-Bar-Content-Link" href="/">
                Home
              </a>
            </div>
            <div className="Nav-Bar-Content-Item">
              <a
                className="Nav-Bar-Content-Link"
                href="/Pledge" // filler link
              >
                Pledges
              </a>
            </div>
            <DropButton />
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;

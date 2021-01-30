import React, { Component } from "react";

import "../css/Styles.css";

import MapBox from "../HomeComponents/Map/MapBox";

class LiveEvent extends Component {
  render() {
    return (
      <div className="Live-Event row">
        <div className="col Live-Event-Map-Box">
          <MapBox />
        </div>
        <div className="col Live-Event-Feed-Box">Live Feed</div>
      </div>
    );
  }
}

export default LiveEvent;

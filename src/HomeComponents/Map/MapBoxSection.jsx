import React, { Component } from "react";

import "../../css/Styles.css";

import MapBox from "./MapBox";

class MapBoxSection extends Component {
  render() {
    return (
      <div className="Live-Event row">
        <div className="col Live-Event-Map-Box">
          <MapBox />
        </div>
      </div>
    );
  }
}

export default MapBoxSection;

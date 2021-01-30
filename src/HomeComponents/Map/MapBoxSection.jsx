import React, { Component } from "react";

import "../../css/Styles.css";

import Mapboxmain from "./Mapboxmain";

class MapBoxSection extends Component {
  render() {
    return (
      <div className="Live-Event row">
        <div className="col Live-Event-Map-Box">
          <Mapboxmain />
        </div>
      </div>
    );
  }
}

export default MapBoxSection;

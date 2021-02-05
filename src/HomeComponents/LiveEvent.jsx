import React, { Component } from "react";

import "../css/Styles.css";

import MapBox from "../HomeComponents/Map/MapBox";

class LiveEvent extends Component {
  render() {
    return (
      <div className="Live-Event row">
        <div className="col Live-Event-Map-Box">
          {/* USE MAPBOX FOR ALL EVENTS AFTER RWANDA */}
          <MapBox />

          {/* V REMOVE GARMIN MAP WHEN RWANDA IS FINISHED V */}
          {/* <div className="Garmin-Map">
            <iframe
              src="https://share.garmin.com/share/lespoulettesfrites"
              frameborder="0"
              marginwidth="0"
              marginheight="0"
              width="100%"
              height="760"
            ></iframe>
          </div> */}
          {/* ^ REMOVE GARMIN MAP WHEN RWANDA IS FINISHED ^ */}
        </div>
        <div className="col Live-Event-Feed-Box">Live Feed</div>
      </div>
    );
  }
}

export default LiveEvent;

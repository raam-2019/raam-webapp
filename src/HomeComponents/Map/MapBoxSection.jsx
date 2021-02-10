import React, { Component } from "react";
import "../../css/Styles.css";
import MapBox from "./MapBox";

const INDIA_TOKEN = "pk.eyJ1IjoiaXRzeW91cm1vdmUiLCJhIjoiY2tqeGJqbzg5MDF3eDJ3bzh1MTk2bWhqYSJ9.w4UUfWxmTk630JJ0CgtfnA";
const INDIA_STYLE = "mapbox://styles/itsyourmove/ckjxu50uf218917pc610sqa3n";

class MapBoxSection extends Component {
  render() {
    switch(this.props.id) {
      case "00001":
        return (
          <div className="Live-Event row">
            <div className="col Live-Event-Map-Box">
              <MapBox
                token={INDIA_TOKEN}
                mapStyle={INDIA_STYLE}
                latitude={21}
                longitude={79}
                markLat={this.props.athleteLat}
                markLong={this.props.athleteLong}
                zoom={4.2}
              />
            </div>
          </div>
        );
      // case "TEST1":
      //   return (
      //     <div className="Live-Event row">
      //     <div className="col Live-Event-Map-Box">
      //       <MapBox
      //           token={INDIA_TOKEN}
      //           mapStyle={INDIA_STYLE}
      //           latitude={21}
      //           longitude={79}
      //           markLat={43}
      //           markLong={-89}
      //           zoom={4.2}
      //       />
      //     </div>
      //   </div>
      //   );
      default: //always returns before the correct map
        return (
          <div></div>
        );
    }
  }
}

export default MapBoxSection;

import React, { Component } from "react";

import "../../css/Styles.css";

class GalleryCard extends Component {
  render() {
    return (
      <div className="Event-Gallery-Card">
        <a href={this.props.link}>
          <img
            className="Event-Gallery-Card-Image"
            src={this.props.img}
            alt={this.props.name}
          ></img>
          <div className="Event-Gallery-Card-Info">
            <p className="Event-Gallery-Card-Name">{this.props.name}</p>
            <span className="Event-Gallery-Card-Bio">{this.props.event}</span>
          </div>
        </a>
      </div>
    );
  }
}

export default GalleryCard;

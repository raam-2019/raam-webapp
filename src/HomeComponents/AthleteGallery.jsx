import React, { Component } from "react";
import GalleryCard from "../HomeComponents/GalleryCard";
import "../css/Styles.css";

import samarth from "../images/athletes/samarth.jpeg";
import haase from "../images/athletes/haase.png";
import macdonald from "../images/athletes/macdonald.PNG";
import cross from "../images/athletes/cross.jpg";
import fraissard from "../images/athletes/fraissard.PNG";
import hering from "../images/athletes/hering.jpg";

class AthleteGallery extends Component {
  render() {
    return (
      <div className="Event-Gallery">
        <h2>Athletes</h2>
        {/* Row 1 */}
        <div className="row">
          <div className="col Event-Gallery-Card-Container">
            <GalleryCard
              name="Dr. Amit Samarth"
              event="Ride Around India"
              img={samarth}
              link="" // each card should have a link and image
            ></GalleryCard>
          </div>
          <div className="col Event-Gallery-Card-Container">
            <GalleryCard
              name="Dave Haase"
              event="Bicycle Route 66"
              img={haase}
              link=""
            ></GalleryCard>
          </div>
          <div className="col Event-Gallery-Card-Container">
            <GalleryCard
              name="James MacDonald"
              event="TBD"
              img={macdonald}
              link=""
            ></GalleryCard>
          </div>
          <div className="col Event-Gallery-Card-Container">
            <GalleryCard
              name="Sandrine Fraissard"
              event="Race Around Rwanda"
              img={fraissard}
              link=""
            ></GalleryCard>
          </div>
          <div className="col Event-Gallery-Card-Container">
            <GalleryCard
              name="Julia Cross"
              event="Canadian Challenge"
              img={cross}
              link=""
            ></GalleryCard>
          </div>
          <div className="col Event-Gallery-Card-Container">
            <GalleryCard
              name="____ Hering"
              event="TBD"
              img={hering}
              link=""
            ></GalleryCard>
          </div>
        </div>
      </div>
    );
  }
}

export default AthleteGallery;

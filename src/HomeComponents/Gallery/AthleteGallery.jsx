import React, { Component } from "react";
import GalleryCard from "./GalleryCard";
import "../../css/Styles.css";

import samarth from "../../images/athletes/samarth.jpeg";
import haase from "../../images/athletes/haase.png";
import macdonald from "../../images/athletes/macdonald.PNG";
import cross from "../../images/athletes/cross.jpg";
import fraissard from "../../images/athletes/fraissard.PNG";
import hering from "../../images/athletes/hering.jpg";

class AthleteGallery extends Component {
  render() {
    return (
      <div className="Event-Gallery">
        <h2>Athletes</h2>
        <div className="row">
          <div className="col Event-Gallery-Card-Container">
            <GalleryCard
              name="Sandrine Fraissard"
              event="Journey Around Rwanda"
              img={fraissard}
              link="/Rwanda"
            ></GalleryCard>
          </div>
          <div className="col Event-Gallery-Card-Container">
            <GalleryCard
              name="Dr. Amit Samarth"
              event="Ride Across India"
              img={samarth}
              link="/India"
            ></GalleryCard>
          </div>
          <div className="col Event-Gallery-Card-Container">
            <GalleryCard
              name="Dave Haase"
              event="Ultracycling"
              img={haase}
              link="/Oops"
            ></GalleryCard>
          </div>
          <div className="col Event-Gallery-Card-Container">
            <GalleryCard
              name="James MacDonald"
              event="Ultracycling"
              img={macdonald}
              link="/Oops"
            ></GalleryCard>
          </div>
          <div className="col Event-Gallery-Card-Container">
            <GalleryCard
              name="Julia Cross"
              event="Dogsledding"
              img={cross}
              link="/Oops"
            ></GalleryCard>
          </div>
          <div className="col Event-Gallery-Card-Container">
            <GalleryCard
              name="Jackie Hering"
              event="Snowshoe Running"
              img={hering}
              link="/Oops"
            ></GalleryCard>
          </div>
        </div>
      </div>
    );
  }
}

export default AthleteGallery;

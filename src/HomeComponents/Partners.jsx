import React, { Component } from "react";
import "../css/Styles.css";
import PartnerCard from "../HomeComponents/PartnerCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import garmin from "../images/partners/garmin.png";
import corelogo from "../images/partners/core.png";
import healthio from "../images/partners/healthio.jpeg";
import mapbox from "../images/partners/mapbox.png";
import moxy from "../images/partners/moxy.png";
import narrativeScience from "../images/partners/narrativescience.jpg";

class Partners extends Component {
  render() {
    return (
      <div className="Content-Section">
        <div className="Partners">
          <h2>Partners</h2>
          <Slider
            autoplay={true}
            autoplaySpeed={5000}
            dots={true}
            arrows={false}
            infinite={true}
            speed={1000}
            slidesToShow={1}
            slidesToScroll={1}
            useTransform={true}
            cssEase={"cubic-bezier(0.83, 0, 0.17, 1)"}
            centerMode={true}
          >
            <PartnerCard
              name="Garmin"
              img={garmin}
              text="This is what we're using Garmin's tech for"
            />
            <PartnerCard name="CORE" img={corelogo} text="words" />
            <PartnerCard name="HealthIO" img={healthio} text="words" />
            <PartnerCard name="Mapbox" img={mapbox} text="words" />
            <PartnerCard name="Moxy" img={moxy} text="words" />
            <PartnerCard
              name="Narrative Science"
              img={narrativeScience}
              text="words"
            />
          </Slider>
        </div>
      </div>
    );
  }
}

export default Partners;

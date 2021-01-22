import React, { Component } from "react";
import "../css/Styles.css";
import PartnerCard from "../HomeComponents/PartnerCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import garmin from "../images/partners/garmin.png";

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
            <PartnerCard name="Slide2" img={""} text="words" />
            <PartnerCard name="Slide3" img={""} text="words" />
            <PartnerCard name="Slide4" img={""} text="words" />
            <PartnerCard name="Slide5" img={""} text="words" />
          </Slider>
        </div>
      </div>
    );
  }
}

export default Partners;

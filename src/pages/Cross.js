import React, { Component } from "react";
import NavBar from "../Components/NavBar/NavBar";
import PageHeader from "../Components/Header";

import "../css/Styles.css";
import MapSection from "../Components/Map/MapBoxSection";
import CrossSocial from "../Components/Social/CrossSocial";
import Footer from "../Components/Footer";
import AthleteInfo from "../Components/AthleteInfo";

import { Parallax } from "react-parallax";
import background from "../images/background.png";

import cross from "../images/AtheletePages/cross.png";
import CrossBio from "../Components/Bio/CrossBio";

class Cross extends Component {
  render() {
    return (
      <Parallax bgImage={background} strength={1000} blur={3}>
        <NavBar />
        <PageHeader text="Julia Cross" />
        <AthleteInfo name="Julia Cross" img={cross} bio={CrossBio} />
        <MapSection
          token="pk.eyJ1IjoiaXRzeW91cm1vdmUiLCJhIjoiY2tqeGJqbzg5MDF3eDJ3bzh1MTk2bWhqYSJ9.w4UUfWxmTk630JJ0CgtfnA"
          mapStyle="mapbox://styles/itsyourmove/ckjxu50uf218917pc610sqa3n"
          latitude={21}
          longitude={79}
          zoom={4.2}
        />
        <CrossSocial />
        <Footer />
      </Parallax>
    );
  }
}
export default Cross;

import React, { Component } from "react";
import NavBar from "../Components/NavBar/NavBar";
import PageHeader from "../Components/Header";

import "../css/Styles.css";
import MapSection from "../Components/Map/MapBoxSection";
import HaaseSocial from "../Components/Social/HaaseSocial";
import Footer from "../Components/Footer";
import AthleteInfo from "../Components/AthleteInfo";

import { Parallax } from "react-parallax";
import background from "../images/background.png";

import haase from "../images/AtheletePages/haase.png";
import HaaseBio from "../Components/Bio/HaaseBio";

class Haase extends Component {
  render() {
    return (
      <Parallax bgImage={background} strength={1000} blur={3}>
        <NavBar />
        <PageHeader text="Dave Haase" />
        <AthleteInfo name="Dave Haase" img={haase} bio={HaaseBio} />
        <MapSection
          token="pk.eyJ1IjoiaXRzeW91cm1vdmUiLCJhIjoiY2tqeGJqbzg5MDF3eDJ3bzh1MTk2bWhqYSJ9.w4UUfWxmTk630JJ0CgtfnA"
          mapStyle="mapbox://styles/itsyourmove/ckjxu50uf218917pc610sqa3n"
          latitude={21}
          longitude={79}
          zoom={4.2}
        />
        <HaaseSocial />
        <Footer />
      </Parallax>
    );
  }
}
export default Haase;

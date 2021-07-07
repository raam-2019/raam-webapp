import React, { Component } from "react";
import NavBar from "../Components/NavBar/NavBar";
import PageHeader from "../Components/Header";

import "../css/Styles.css";
import MapSection from "../Components/Map/MapBoxSection";
import HeringSocial from "../Components/Social/HeringSocial";
import Footer from "../Components/Footer";
import AthleteInfo from "../Components/AthleteInfo";

import { Parallax } from "react-parallax";
import background from "../images/background.png";

import hering from "../images/AtheletePages/hering.png";
import HeringBio from "../Components/Bio/HeringBio";

class Hering extends Component {
  render() {
    return (
      <Parallax bgImage={background} strength={1000} blur={3}>
        <NavBar />
        <PageHeader text="Jackie Hering" />
        <AthleteInfo name="Jackie Hering" img={hering} bio={HeringBio} />
        <MapSection
          token="pk.eyJ1IjoiaXRzeW91cm1vdmUiLCJhIjoiY2tqeGJqbzg5MDF3eDJ3bzh1MTk2bWhqYSJ9.w4UUfWxmTk630JJ0CgtfnA"
          mapStyle="mapbox://styles/itsyourmove/ckjxu50uf218917pc610sqa3n"
          latitude={21}
          longitude={79}
          zoom={4.2}
        />
        <HeringSocial />
        <Footer />
      </Parallax>
    );
  }
}
export default Hering;

import React, { Component } from "react";
import NavBar from "../Components/NavBar/NavBar";
import PageHeader from "../Components/Header";

import "../css/Styles.css";
import ChallengeMapSection from "../Components/Map/ChallengeMapSection";
import FraissardSocial from "../Components/Social/FraissardSocial";
import Footer from "../Components/Footer";
import AthleteInfo from "../Components/AthleteInfo";

import { Parallax } from "react-parallax";
import background from "../images/background.png";

import fraissard from "../images/AtheletePages/fraissard.png";
import FraissardBio from "../Components/Bio/FraissardBio";

class Fraissard extends Component {
  render() {
    return (
      <Parallax bgImage={background} strength={1000} blur={3}>
        <NavBar />
        <PageHeader text="Sandrine Fraissard" />
        <AthleteInfo
          name="Sandrine Fraissard"
          img={fraissard}
          bio={FraissardBio}
        />
        <ChallengeMapSection />
        <FraissardSocial />
        <Footer />
      </Parallax>
    );
  }
}
export default Fraissard;

import React, { Component } from "react";
import NavBar from "../HomeComponents/NavBar/NavBar";
import PageHeader from "../HomeComponents/Header";

import "../css/Styles.css";
import MapSection from "../HomeComponents/Map/MapBoxSection";
import SamarthSocial from "../HomeComponents/Social/SamarthSocial";
import Footer from "../HomeComponents/Footer";
import AthleteInfo from "../HomeComponents/AthleteInfo";

import { Parallax } from "react-parallax";
import background from "../images/background.png";

import samarth from "../images/AtheletePages/samarth.png";
import SamarthBio from "../HomeComponents/Bio/SamarthBio";
import AthleteLiveData from "../HomeComponents/AthleteLiveData";

class Samarth extends Component {
  render() {
    return (
      <Parallax bgImage={background} strength={1000} blur={3}>
        <NavBar />
        <PageHeader text="Dr. Amit Samarth" />
        <AthleteInfo name="Dr. Amit Samarth" img={samarth} bio={SamarthBio} />
        <AthleteLiveData id="00001" isHome={false} />
        <SamarthSocial />
        <Footer />
      </Parallax>
    );
  }
}

export default Samarth;

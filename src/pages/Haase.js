import React, { Component } from "react";
import NavBar from "../HomeComponents/NavBar/NavBar";
import PledgeTracker from "../HomeComponents/PledgeTracker/PledgeTracker";
import PageHeader from "../HomeComponents/Header";

import "../css/Styles.css";
import MapSection from "../HomeComponents/Map/MapBoxSection";
import HaaseSocial from "../HomeComponents/Social/HaaseSocial";
import Footer from "../HomeComponents/Footer";
import AthleteInfo from "../HomeComponents/AthleteInfo";

import { Parallax } from "react-parallax";
import background from "../images/background.png";

import haase from "../images/AtheletePages/haase.png";
import HaaseBio from "../HomeComponents/Bio/HaaseBio";

class Haase extends Component {
  render() {
    return (
      <Parallax bgImage={background} strength={1000} blur={3}>
        <NavBar />
        <PageHeader text="Dave Haase" />
        <AthleteInfo name="Dave Haase" img={haase} bio={HaaseBio} />
        <MapSection />
        <PledgeTracker />
        <HaaseSocial />
        <Footer />
      </Parallax>
    );
  }
}
export default Haase;

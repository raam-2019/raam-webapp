import React, { Component } from "react";
import NavBar from "../Components/NavBar/NavBar";
import PageHeader from "../Components/Header";

import { Parallax } from "react-parallax";
import background from "../images/background.png";

import "../css/Styles.css";
import Footer from "../Components/Footer";
import AboutContent from "../Components/AboutContent";
import IYMSocial from "../Components/Social/IYMSocial";
import IYMTeam from "../Components/IYMTeam";

class About extends Component {
  render() {
    return (
      <Parallax bgImage={background} strength={1000} blur={3}>
        <NavBar />
        <PageHeader text="About" />
        <AboutContent />
        <IYMSocial />
        <IYMTeam />
        <Footer />
      </Parallax>
    );
  }
}
export default About;

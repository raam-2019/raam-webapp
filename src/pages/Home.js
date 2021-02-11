import React, { Component } from "react";
import "../css/Styles.css";

import NavBar from "../HomeComponents/NavBar/NavBar";
import PageHeader from "../HomeComponents/Header";
import AthleteGallery from "../HomeComponents/Gallery/AthleteGallery";
import Partners from "../HomeComponents/Partner/Partners";
import Footer from "../HomeComponents/Footer";

import { Parallax } from "react-parallax";
import background from "../images/background.png";
import AthleteLiveData from "../HomeComponents/AthleteLiveData";

class Home extends Component {
  render() {
    return (
      <Parallax bgImage={background} strength={1000} blur={3}>
        <NavBar />
        <PageHeader text="Welcome" />
        {/* To update homepage map, must manually change props in LiveEvent */}
        <AthleteLiveData id="00001" isHome={true} />
        <AthleteGallery />
        <Partners />
        <Footer />
      </Parallax>
    );
  }
}

export default Home;

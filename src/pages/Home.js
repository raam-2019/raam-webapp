import React, { Component } from "react";
import "../css/Styles.css";

import NavBar from "../Components/NavBar/NavBar";
import PageHeader from "../Components/Header";
import AthleteGallery from "../Components/Gallery/AthleteGallery";
import Partners from "../Components/Partner/Partners";
import Footer from "../Components/Footer";

import { Parallax } from "react-parallax";
import background from "../images/background.png";
import AthleteLiveData from "../Components/AthleteLiveData";

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

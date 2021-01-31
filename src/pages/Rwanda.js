import React, { Component } from "react";
import NavBar from "../HomeComponents/NavBar/NavBar";
import PledgeTracker from "../HomeComponents/PledgeTracker/PledgeTracker";
import GarminMap from "../HomeComponents/Map/GarminMapSection";
import ChallengeMap from "../HomeComponents/Map/ChallengeMapSection";
import PageHeader from "../HomeComponents/Header";

import { Parallax } from "react-parallax";
import background from "../images/background.png";

import "../css/Styles.css";

class Rwanda extends Component {
  render() {
    return (
      <Parallax bgImage={background} strength={1000} blur={3}>
        <NavBar />
        <PageHeader text="Race Around Rwanda" />
        <ChallengeMap />
        <GarminMap />
        <PledgeTracker />
        <p style={{ textAlign: "center" }}>[Why pledge this athlete?]</p>
        <p style={{ textAlign: "center" }}>[User interaction options]</p>
        {/* <Container style={{paddingTop: "2rem"}}>
                <Row>
                    <Col xs="1"></Col>
                    <Col><h1 style = {{textAlign: "center"}}>Race Around Rwanda</h1></Col>
                    <Col xs="1"></Col>
                </Row>
                <Row style={{paddingTop: "2rem"}}>
                    <Col xs="1"></Col>
                    <Col><iframe src="https://share.garmin.com/DustinSchmidt" frameborder="0" marginwidth="0" marginheight="0" width="810" height="760"></iframe></Col>
                    <Col xs="1"></Col>
                </Row>
                
                <Row style={{paddingTop: "2rem"}}>
                    <Col xs="1"></Col>
                    <Col><div style = {{textAlign: "center"}}>User participation meter</div></Col>
                    <Col xs="1"></Col>
                </Row>
                <Row>
                    <Col xs="1"></Col>
                    <Col><div style = {{textAlign: "center"}}>Why pledge this athlete?</div></Col>
                    <Col xs="1"></Col>
                </Row>
                <Row>
                    <Col xs="1"></Col>
                    <Col><div style = {{textAlign: "center"}}>User interaction option</div></Col>
                    <Col xs="1"></Col>
                </Row>
            </Container> */}
      </Parallax>
    );
  }
}
export default Rwanda;

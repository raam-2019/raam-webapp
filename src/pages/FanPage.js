import React, { Component } from 'react';
import {Container, Row, Col} from "reactstrap";
import MapBoxComp from "../Components/MapBox Components/MapBox";
import MapBoxmain from "../Components/MapBox Components/Mapboxmain";
import Navagation from "../Components/Navagation";
import Widget from "../Components/Widgets/Widget";
import Footer from "../Components/Footer";

import "../css/fanexperience.css";
import "../css/stylesheet.css";

class FanPage extends Component {
    render() { 
        return (
            <div id="FanPageWrapper" style={{background: "#2c2954", paddingBottom: "30px" }}>
                <Navagation />
                <MapBoxmain />
                <br />
                <Container className="App" fluid="true">
                    <Widget heading="Stat 1" rowspan={3} />
                    <Widget heading="Stat 2"/>
                    <Widget heading="Some graph shit" colspan={2} rowspan={2}/>
                    <Widget heading="Some more stat"/>
                    <Widget heading="ThisAndThat"/>
                    <Widget heading="RAAM"/>
                </Container>
                <Footer />
            </div> 
         );
    }
}
 
export default FanPage;
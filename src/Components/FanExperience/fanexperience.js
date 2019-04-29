import React, { Component } from 'react';
import Navagation from "../Navagation";
import { Container } from "reactstrap";
// import React from 'react'
import ReactMapGL, { Marker, Popup, NavigationControl, LinearInterpolator, FlyToInterpolator } from 'react-map-gl';
// import ReactMapGL from 'react-map-gl';
// import { Component } from 'react';
// import Pin from './Pin'
// import './fanexperience.css';
// 3rd-party easing functions
// import d3 from 'd3-ease';//Mapbox token
// const TOKEN = 'pk.eyJ1IjoibWlzbGFtNSIsImEiOiJjanVpdG5vZWoxZThsNGZwamJ4Nmxya2o0In0.19pBli659L76GrJaX0JWoA';
//Mapbox Navigation Style


import "../../css/fanexperience.css";


import Mapboxmain from "./mapboxmain";
import Widget from "./Widget";


class Fanexperience extends Component {

    // For Dashboard access for now we will have to add /dashboardRAAMforVIPaccess to our http
    //Fanexperience will be root dir
    render() {
        return (
            <div className="main">
                <div className="container-fluid">
                    <Navagation />
                    <Mapboxmain />
                    <br />
                    <div className="App">
                    <Widget heading="Stat 1" rowspan={3} />
                    <Widget heading="Stat 2"/>
                    <Widget heading="Some graph shit" colspan={2} rowspan={2}/>
                    <Widget heading="Some more stat"/>
                    <Widget heading="ThisAndThat"/>
                    <Widget heading="RAAM"/>

                    </div>
                    



                </div>
            </div>

        );
    }
}

export default Fanexperience
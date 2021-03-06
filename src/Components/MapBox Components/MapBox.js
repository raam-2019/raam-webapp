import React, {Component} from 'react';
import { Container } from "reactstrap";
// import React from 'react'
import ReactMapGL, { Marker, Popup, NavigationControl,LinearInterpolator, FlyToInterpolator } from 'react-map-gl';
// import ReactMapGL from 'react-map-gl';
// import { Component } from 'react';
// import Pin from './Pin'
// 3rd-party easing functions
// import d3 from 'd3-ease';//Mapbox token
const TOKEN = 'pk.eyJ1IjoibWlzbGFtNSIsImEiOiJjanVpdG5vZWoxZThsNGZwamJ4Nmxya2o0In0.19pBli659L76GrJaX0JWoA';
//Mapbox Navigation Style


class Fanexperience extends Component {

    state = {
        viewport: {
            width: '70%',
            height: 500,
            latitude: 43.053619,
            longitude: -89.3778086,
            zoom: 10,
            bearing: 0,
            pitch: 0,
        }
        
    };

    _onViewportChange = viewport => {
        this.setState({viewport});
    };

    _goToCyclist = () => {
        const viewport = {
            ...this.state.viewport,
            longitude: -74.1, //This is be the coordinate of the cyclist
            latitude: 40.7,
            zoom: 14,
            transitionDuration: 5000,
            transitionInterpolator: new FlyToInterpolator(),
            // transitionEasing: d3.easeCubic
        };
        this.setState({viewport});
    };

    // mapStyle = "mapbox://styles/mislam5/cjuiyejbm6qn11gnv0e44i7qm"
    // For Dashboard access for now we will have to add /dashboardRAAMforVIPaccess to our http
    //Fanexperience will be root dir
    render() {
        return (
            <div id="MapboxWrapper">
                <div className="d-flex flex-wrap justify-content-left align-items-center align-content-center">
                    <ReactMapGL mapboxApiAccessToken={TOKEN}
                        mapStyle="mapbox://styles/mislam5/cjuiyejbm6qn11gnv0e44i7qm"
                        {...this.state.viewport} onViewportChange={this._onViewportChange}
                     >
                        <div className="nav">
                            <NavigationControl onViewportChange={(viewport) => this.setState({ viewport })}  />   
                        </div>
                    </ReactMapGL>
                    <button onClick={this._goToCyclist}>Cyclist</button>
                </div>
            </div>
        );
    }
}

export default Fanexperience
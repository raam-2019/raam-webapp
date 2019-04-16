import React from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import MapGL, { Marker, Popup, NavigationControl } from 'react-map-gl';
// import Pin from './Pin'
import './fanexperience.css';



//Mapbox token
const TOKEN = 'pk.eyJ1IjoibWlzbGFtNSIsImEiOiJjanVpdG5vZWoxZThsNGZwamJ4Nmxya2o0In0.19pBli659L76GrJaX0JWoA';

//Mapbox Navigation Style
const navStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '10px'
};

class Fanexperience extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            viewport: {
                latitude: 43.053619, // Co-ordinates from Germin Watch for map init
                longitude: -89.377808,     // Co-ordinates from Germin Watch for map init
                zoom: 10,
                bearing: 0,
                pitch: 0,
                width: 1000,
                height: 500,
            },

            popupInfo: null
        };
        this.renderPopup = this.renderPopup.bind(this)
    }

    renderPopup() {
        return this.state.popupInfo && (
            <Popup tipSize={5}
                anchor="bottom-right"
                longitude={this.state.popupInfo.state.longitude}
                latitude={this.state.popupInfo.state.latitude}
                onClose={() => this.setState({ popupInfo: null })}
                closeOnClick={true}>
                <p>{"Dough cycling up Bascom Hill"}</p>
            </Popup>
        )
    }
    // mapStyle = "mapbox://styles/mislam5/cjuiyejbm6qn11gnv0e44i7qm"
    render() {
        const { viewport } = this.state;

        return (
            // For Dashboard access for now we will have to add /dashboardRAAMforVIPaccess to our http
            //Fanexperience will be root dir
            <div className="d-flex flex-wrap justify-content-left align-items-center align-content-center">
                <MapGL
                    {...viewport}
                    mapStyle = "mapbox://styles/mislam5/cjuiyejbm6qn11gnv0e44i7qm"
                    mapboxApiAccessToken={TOKEN} >
                    {Marker}
                    {this.renderPopup()}
                    <div className="nav" style={navStyle}>
                        <NavigationControl />
                        {/* Will need to set up a function for real time update of co-ordinates */}
                        <Marker longitude={43.053619} latitude={-89.377808} offsetTop={0.0} offsetLeft={0.0}>
                            {/* <Pin onClick={() => this.setState({})} /> */}
                        </Marker>
                    </div>
                </MapGL>
            </div>



        );
    }
}
export default Fanexperience
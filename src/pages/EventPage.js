import React, { Component } from 'react';
import Navagation from "../Components/Navagation";
import MapBox from "../Components/MapBox Components/MapBox";
import "../css/stylesheet.css";

class EventPage extends Component {
    render() {
        return (
            <div>
            <Navagation />
                    <h1 style = {{textAlign: "center"}}>Events</h1>
                    <MapBox />
                    <div style = {{textAlign: "center"}}>User participation meter</div>
                    <div style = {{textAlign: "center"}}>Why pledge this athlete?</div>
                    <div style = {{textAlign: "center"}}>User interaction option</div>
            </div>
        )
    }
}
export default EventPage;
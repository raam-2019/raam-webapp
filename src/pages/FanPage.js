import React, { Component } from 'react';
import MapBoxComp from "../Components/MapBox Components/MapBox";
import Navagation from "../Components/Navagation";
import "../css/fanexperience.css";

class FanPage extends Component {
    render() { 
        return (
            <div id="FanPageWrapper">
                <Navagation />
                <MapBoxComp />
            </div> 
         );
    }
}
 
export default FanPage;
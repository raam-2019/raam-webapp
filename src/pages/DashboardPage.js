import React, { Component } from 'react';
import DashboardComp from "../Components/Dashboard Components/dashboard";
import Navagation from "../Components/Navagation";

class CustomDashboardPage extends Component {
    render() { 
        return (
            <div id="DashboardWrapper">
                <Navagation />
                <DashboardComp />
            </div> 
         );
    }
}
 
export default CustomDashboardPage;
import React from 'react';
import { Row, Container } from "reactstrap"
import Custom_Content from "./custom_content";
import mySidebar from "./mySidebar";
import Nav_Header from "./nav_header"
import "./custom_stylesheet.css"

class Fanexperience extends React.Component {
  render() {
    return (
        // For Dashboard access for now we will have to add /dashboardRAAMforVIPaccess to out http
        //  Fanexperience will be root
        <div id="wraper">
          <Nav_Header />
          <Container id="content">
            <h1>Hello World</h1>
          </Container>
        </div>
      );
  }
}
export default Fanexperience
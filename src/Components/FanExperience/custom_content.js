import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import "./custom_stylesheet.css"

class Custom_Content extends React.Component {
  render() {
    return (
        <div id="content">
          <Row>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{width: "100%"}}>
              <div className="container-fluid">
                <ul className="nav navbar-nav" style={{float: "left"}}>
                  <li style={{ display: "inline" }}>
                    <button type="button" id="sidebarCollapse" className="navbar-btn">
                      <span /> <span /> <span />
                    </button>
                  </li>
                </ul>
                <ul className="nav navbar-nav" style={{float: "right"}}>
                  <li style={{ display: "inline" }}>
              
                  </li>
                </ul>
              </div>
            </nav>
            <Container id="Main_FanPage">
              <h1>Hello World</h1>

            </Container>
          </Row>
        </div>
      );
  }
}
export default Custom_Content
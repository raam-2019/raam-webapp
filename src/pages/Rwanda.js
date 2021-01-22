import React, { Component } from 'react';
import Navagation from "../Components/Navagation";
import MapBox from "../Components/MapBox Components/MapBox";
import Mapboxmain from "../Components/MapBox Components/Mapboxmain"
import {Container, Row, Col} from "reactstrap";
import "../css/stylesheet.css";

class Rwanda extends Component {
    render() {
        return (
            <div>
            <Navagation />
            <Container style={{paddingTop: "2rem"}}>
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
            </Container>
            </div>
        )
    }
}
export default Rwanda;
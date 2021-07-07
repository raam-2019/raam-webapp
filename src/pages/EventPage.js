import React, { Component } from 'react';
import Navagation from "../Components/Navagation";
import MapBox from "../Components/MapBox Components/MapBox";
import {Container, Row, Col} from "reactstrap";
import "../css/stylesheet.css";

class EventPage extends Component {
    render() {
        return (
            <div>
            <Navagation />
            <Container style={{paddingTop: "2rem"}}>
                <Row>
                    <Col xs="1"></Col>
                    <Col><h1 style = {{textAlign: "center"}}>Events</h1></Col>
                    <Col xs="1"></Col>
                </Row>
                <Row style={{paddingTop: "2rem"}}>
                    <Col xs="1"></Col>
                    <Col><MapBox /></Col>
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
export default EventPage;
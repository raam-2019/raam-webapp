import React, { Component } from "react";
import "../css/Styles.css";
import Biometrics from "./Biometrics";
import LiveEvent from "./LiveEvent";
import MapBoxSection from "./Map/MapBoxSection";

class AthleteLiveData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      index: 0,
      items: [],
    };
  }

  componentDidMount() {
    this.getData();
    this.intervalID = setInterval(this.getData.bind(this), 10000);
  }

  componentWillUnmount() {
    clearTimeout(this.intervalID);
  }

  getData = () => {
    console.log("Fetch data");
    fetch("https://c0hjtg8xa3.execute-api.us-west-2.amazonaws.com/dev/")
      .then((res) => res.json())
      .then(
        (result) => {
          for (var i = 0; i < result.features.length; i++) {
            console.log(
              "testing " + result.features[i].properties.device.testing
            );
            console.log("props id " + this.props.id);
            if (result.features[i].properties.id == this.props.id) {
              console.log("data id " + result.features[i].properties.id);
              this.setState({
                isLoaded: true,
                index: i,
                items: result.features,
              });
            }
          }
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  };

  render() {
    const { error, isLoaded, index, items } = this.state;
    console.log(items);
    if (error) {
      return <div className="errorMsg">ERROR</div>;
    } else if (!isLoaded) {
      return <div className="loadingMsg">Loading...</div>;
    } else if (this.props.isHome) {
      return (
        <LiveEvent
          athleteLat={items[index].geometry.coordinates[1]}
          athleteLong={items[index].geometry.coordinates[0]}
        />
      );
    } else {
      return (
        <div>
          <MapBoxSection
            id={this.props.id}
            athleteLat={items[index].geometry.coordinates[1]}
            athleteLong={items[index].geometry.coordinates[0]}
          />
          <h2>Live Data</h2>
          {items[index].properties.device.testing && !this.props.isHome ? (
            <div className="testingMsg" style={{ textAlign: "center" }}>
              This athlete's data is in the testing stage
            </div>
          ) : (
            <Biometrics
              hr={
                items[index].properties.sensors.hr !== undefined
                  ? items[index].properties.sensors.hr
                  : undefined
              }
              speed={
                items[index].properties.speed !== undefined
                  ? items[index].properties.speed
                  : undefined
              }
              cadence={
                items[index].properties.sensors.cadence !== undefined
                  ? items[index].properties.sensors.cadence
                  : undefined
              }
              power={
                items[index].properties.sensors.power !== undefined
                  ? items[index].properties.sensors.power
                  : undefined
              }
              altitude={
                items[index].properties.altitude !== undefined
                  ? items[index].properties.altitude
                  : undefined
              }
              temp={
                items[index].properties.sensors.temp !== undefined
                  ? items[index].properties.sensors.temp
                  : undefined
              }
              mo2={
                items[index].properties.sensors.mo2 !== undefined
                  ? items[index].properties.sensors.mo2.mo2Saturation
                  : undefined
              }
            />
          )}
        </div>
      );
    }
  }
}

export default AthleteLiveData;

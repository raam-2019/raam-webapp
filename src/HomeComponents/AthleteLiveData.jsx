import React, { Component } from "react";
import "../css/Styles.css";

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
            console.log("testing "+result.features[i].properties.device.testing);
            console.log("props id "+ this.props.id);
            // if (!result.features[i].properties.device.testing &&
              if (result.features[i].properties.id == this.props.id){
                console.log("data id "+result.features[i].properties.id);
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
  }


  render() {
    const { error, isLoaded, index, items } = this.state;
    console.log(items);
    if (error) {
      return <div className="errorMsg">ERROR</div>;
    } else if (!isLoaded) {
      return <div className="loadingMsg">Loading...</div>;
    } else {
      return (
        <div className="">
          <h2>Live Data</h2>
          {items[index].properties.device.testing ? <div className="testingMsg" style={{textAlign: "center"}}>This athlete's data is in the testing stage</div> :
            <div className="liveData">
                <table
                  align="center"
                  className="liveDataTable"
                  style={{ marginBottom: 25 }}
                >
                  <tr>
                    <td className="liveDataCell">Heart rate:</td>
                    <td className="liveDataCell" key={items[index].properties.sensors.hr}>
                      {items[index].properties.sensors.hr} bpm
                    </td>
                  </tr>
                  <tr>
                    <td className="liveDataCell">Speed:</td>
                    <td className="liveDataCell" key={items[index].properties.speed}>
                      {items[index].properties.speed * 3.6} km/hr
                    </td>
                  </tr>
                  <tr>
                    <td className="liveDataCell">Cadence:</td>
                    <td className="liveDataCell" key={items[index].properties.sensors.cadence}>
                      {items[index].properties.sensors.cadence} rpm
                    </td>
                  </tr>
                  <tr>
                    <td className="liveDataCell">Power:</td>
                    <td className="liveDataCell" key={items[index].properties.sensors.power}>
                      {items[index].properties.sensors.power} watts
                    </td>
                  </tr>
                  <tr>
                    <td className="liveDataCell">Altitude:</td>
                    <td
                      className="liveDataCell"
                      key={items[index].properties.altitude}
                    >
                      {items[index].properties.altitude} meters
                    </td>
                  </tr>
                  <tr>
                    <td className="liveDataCell">Temperature:</td>
                    <td className="liveDataCell" key={items[index].properties.sensors.temp}>
                      {items[index].properties.sensors.temp}&#186;C
                    </td>
                  </tr>
                  <tr>
                    <td className="liveDataCell">
                      MO<sub>2</sub>:
                    </td>
                    <td className="liveDataCell" key={items[index].properties.sensors.mo2.mo2Saturation}>
                      {items[index].properties.sensors.mo2.mo2Saturation}%
                    </td>
                  </tr>
                </table>
            </div>
          }
        </div>
      );
    }
  }
}

export default AthleteLiveData;

import React, { Component } from "react";
import "../css/Styles.css";

class Biometrics extends Component {
    render() {
        return (
            <div className="liveData">
                <table
                  align="center"
                  className="liveDataTable"
                  style={{ marginBottom: 25 }}
                >
                <tbody>
                  <tr>
                    <td className="liveDataCell">Heart rate:</td>
                    <td className="liveDataCell">
                      {this.props.hr} bpm
                    </td>
                  </tr>
                  <tr>
                    <td className="liveDataCell">Speed:</td>
                    <td className="liveDataCell">
                      {this.props.speed * 3.6} km/hr
                    </td>
                  </tr>
                  <tr>
                    <td className="liveDataCell">Cadence:</td>
                    <td className="liveDataCell">
                      {this.props.cadence} rpm
                    </td>
                  </tr>
                  <tr>
                    <td className="liveDataCell">Power:</td>
                    <td className="liveDataCell">
                      {this.props.power} watts
                    </td>
                  </tr>
                  <tr>
                    <td className="liveDataCell">Altitude:</td>
                    <td className="liveDataCell">
                      {this.props.altitude} meters
                    </td>
                  </tr>
                  <tr>
                    <td className="liveDataCell">Temperature:</td>
                    <td className="liveDataCell">
                      {this.props.temp}&#186;C
                    </td>
                  </tr>
                  <tr>
                    <td className="liveDataCell">
                      MO<sub>2</sub>:
                    </td>
                    <td className="liveDataCell">
                      {this.props.mo2}%
                    </td>
                  </tr>
                </tbody>
                </table>
            </div>
        );
    }
}
export default Biometrics;
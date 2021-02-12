import React, { Component } from "react";
import "../css/Styles.css";

class Biometrics extends Component {
  render() {
    return (
      // <div className="Live-Data">
      //   <div className="Live-Data-Cell">
      //     {this.props.hr !== undefined ? this.props.hr + " bpm" : "No data"}
      //   </div>
      //   <div className="Live-Data-Cell">
      //     {this.props.speed !== undefined
      //       ? this.props.speed * 3.6 + " km/hr"
      //       : "No data"}
      //   </div>
      //   <div className="Live-Data-Cell">
      //     {this.props.cadence !== undefined
      //       ? this.props.cadence + " rpm"
      //       : "No data"}
      //   </div>
      //   <div className="Live-Data-Cell">
      //     {this.props.power !== undefined
      //       ? this.props.power + " watts"
      //       : "No data"}
      //   </div>
      //   <div className="Live-Data-Cell">
      //     {this.props.altitude !== undefined
      //       ? this.props.altitude + " meters"
      //       : "No data"}
      //   </div>
      //   <div className="Live-Data-Cell">
      //     {this.props.temp !== undefined
      //       ? this.props.temp + "\u00B0 C"
      //       : "No data"}
      //   </div>
      //   <div className="Live-Data-Cell">
      //     {this.props.mo2 !== undefined ? this.props.mo2 + "%" : "No data"}
      //   </div>
      // </div>

      <div className="liveData">
        <table
          align="center"
          className="liveDataTable"
          style={{ marginBottom: 25 }}
        >
          <tbody>
            <tr>
              <td className="liveDataCell">Heart rate:&emsp;</td>
              <td className="liveDataCell">
                {this.props.hr !== undefined
                  ? this.props.hr + " bpm"
                  : "No data"}
              </td>
            </tr>
            <tr>
              <td className="liveDataCell">Speed:&emsp;</td>
              <td className="liveDataCell">
                {this.props.speed !== undefined
                  ? this.props.speed * 3.6 + " km/hr"
                  : "No data"}
              </td>
            </tr>
            <tr>
              <td className="liveDataCell">Cadence:&emsp;</td>
              <td className="liveDataCell">
                {this.props.cadence !== undefined
                  ? this.props.cadence + " rpm"
                  : "No data"}
              </td>
            </tr>
            <tr>
              <td className="liveDataCell">Power:&emsp;</td>
              <td className="liveDataCell">
                {this.props.power !== undefined
                  ? this.props.power + " watts"
                  : "No data"}
              </td>
            </tr>
            <tr>
              <td className="liveDataCell">Altitude:&emsp;</td>
              <td className="liveDataCell">
                {this.props.altitude !== undefined
                  ? this.props.altitude + " meters"
                  : "No data"}
              </td>
            </tr>
            <tr>
              <td className="liveDataCell">Temperature:&emsp;</td>
              <td className="liveDataCell">
                {this.props.temp !== undefined
                  ? this.props.temp + "\u00B0 C"
                  : "No data"}
              </td>
            </tr>
            <tr>
              <td className="liveDataCell">
                MO<sub>2</sub>:&emsp;
              </td>
              <td className="liveDataCell">
                {this.props.mo2 !== undefined
                  ? this.props.mo2 + "%"
                  : "No data"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default Biometrics;

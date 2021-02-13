import React, { Component } from "react";
import "../css/Styles.css";

function round(num) {
  return Math.round(num * 100) / 100;
}

class Biometrics extends Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          <div className="Live-Data">
            <div className="Live-Data-Cell Item-1">
              {this.props.hr !== undefined ? this.props.hr + " bpm" : "No data"}
              <div className="Live-Data-Cell-Name"> {"- Heart Rate"}</div>
              <div className="Live-Data-Cell-Description">{""}</div>
            </div>
            <div className="Live-Data-Cell Item-2">
              {this.props.speed !== undefined
                ? round(this.props.speed * 3.6) + " km/hr"
                : "No data"}
              <div className="Live-Data-Cell-Name"> {"- Speed"}</div>
              <div className="Live-Data-Cell-Description">{""}</div>
            </div>
            <div className="Live-Data-Cell Item-3">
              {this.props.cadence !== undefined
                ? this.props.cadence + " rpm"
                : "No data"}
              <div className="Live-Data-Cell-Name"> {"- Cadence"}</div>
              <div className="Live-Data-Cell-Description">{""}</div>
            </div>
            <div className="Live-Data-Cell Item-4">
              {this.props.power !== undefined
                ? this.props.power + " W"
                : "No data"}
              <div className="Live-Data-Cell-Name"> {"- Power Output"}</div>
              <div className="Live-Data-Cell-Description">{""}</div>
            </div>
            <div className="Live-Data-Cell Item-5">
              {this.props.altitude !== undefined
                ? round(this.props.altitude) + " m"
                : "No data"}
              <div className="Live-Data-Cell-Name"> {"- Altitude"}</div>
              <div className="Live-Data-Cell-Description">{""}</div>
            </div>
            <div className="Live-Data-Cell Item-6">
              {this.props.temp !== undefined
                ? round(this.props.temp) + "\u00B0 C"
                : "No data"}
              <div className="Live-Data-Cell-Name"> {"- Core Temperature"}</div>
              <div className="Live-Data-Cell-Description">
                {
                  "CORE's ingestible thermometer reports back data which helps prevent serious heat stress injury"
                }
              </div>
            </div>
            <div className="Live-Data-Cell Item-7">
              {this.props.mo2 !== undefined ? this.props.mo2 + "%" : "No data"}
              <div className="Live-Data-Cell-Name"> {"- Muscle Oxygen"}</div>
              <div className="Live-Data-Cell-Description">
                {
                  "MOXY technology uses near-infrared spectroscopy to measure oxygen saturation in the muscles"
                }
              </div>
            </div>
          </div>
        </div>
        {/* <div className="col"></div> */}
      </div>

      // <div className="liveData">
      //   <table
      //     align="center"
      //     className="liveDataTable"
      //     style={{ marginBottom: 25 }}
      //   >
      //     <tbody>
      //       <tr>
      //         <td className="liveDataCell">Heart rate:&emsp;</td>
      //         <td className="liveDataCell">
      //           {this.props.hr !== undefined
      //             ? this.props.hr + " bpm"
      //             : "No data"}
      //         </td>
      //       </tr>
      //       <tr>
      //         <td className="liveDataCell">Speed:&emsp;</td>
      //         <td className="liveDataCell">
      //           {this.props.speed !== undefined
      //             ? this.props.speed * 3.6 + " km/hr"
      //             : "No data"}
      //         </td>
      //       </tr>
      //       <tr>
      //         <td className="liveDataCell">Cadence:&emsp;</td>
      //         <td className="liveDataCell">
      //           {this.props.cadence !== undefined
      //             ? this.props.cadence + " rpm"
      //             : "No data"}
      //         </td>
      //       </tr>
      //       <tr>
      //         <td className="liveDataCell">Power:&emsp;</td>
      //         <td className="liveDataCell">
      //           {this.props.power !== undefined
      //             ? this.props.power + " watts"
      //             : "No data"}
      //         </td>
      //       </tr>
      //       <tr>
      //         <td className="liveDataCell">Altitude:&emsp;</td>
      //         <td className="liveDataCell">
      //           {this.props.altitude !== undefined
      //             ? this.props.altitude + " meters"
      //             : "No data"}
      //         </td>
      //       </tr>
      //       <tr>
      //         <td className="liveDataCell">Temperature:&emsp;</td>
      //         <td className="liveDataCell">
      //           {this.props.temp !== undefined
      //             ? this.props.temp + "\u00B0 C"
      //             : "No data"}
      //         </td>
      //       </tr>
      //       <tr>
      //         <td className="liveDataCell">
      //           MO<sub>2</sub>:&emsp;
      //         </td>
      //         <td className="liveDataCell">
      //           {this.props.mo2 !== undefined
      //             ? this.props.mo2 + "%"
      //             : "No data"}
      //         </td>
      //       </tr>
      //     </tbody>
      //   </table>
      // </div>
    );
  }
}
export default Biometrics;

import React, { Component } from "react";
import PledgeTrackerBar from "./PledgeTrackerComponent";

import "../../css/Styles.css";

const pledges = 20000;

class PledgeTracker extends Component {
  render() {
    return (
      <div className="Pledge-Tracker">
        <h2>Progress</h2>
        <PledgeTrackerBar pledges={pledges / 500} />
        <span className="Pledge-Tracker-Description">
          <strong>{"20,000"}</strong> people have made the PLEDGE. Now it's{" "}
          <em>your</em> move!
        </span>
      </div>
    );
  }
}

export default PledgeTracker;

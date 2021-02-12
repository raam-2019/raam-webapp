import React, { Component } from "react";
import PledgeTrackerBar from "./PledgeTrackerComponent";

import "../../css/Styles.css";

const pledges = 0;

class PledgeTracker extends Component {
  render() {
    return (
      <div className="Pledge-Tracker">
        <h2>Progress</h2>
        <PledgeTrackerBar pledges={pledges / 500} />
        {/* assumes 20 minute average */}
        <span className="Pledge-Tracker-Description">
          <strong>{pledges}</strong> people have made the PLEDGE. Now it's{" "}
          <em>your</em> move!
        </span>
      </div>
    );
  }
}

export default PledgeTracker;

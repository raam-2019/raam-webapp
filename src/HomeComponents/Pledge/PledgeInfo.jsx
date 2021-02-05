import React, { Component } from "react";
import Info from "./Info";
import pledgeEg from "../../images/Logos/tweet.png";
import "../../css/Styles.css";

class PledgeInfo extends Component {
  render() {
    return (
      <div className="Pledge-Info">
        <Info
          heading="Step 1"
          content="Choose a favorite athlete, hit your social media, and tag three friends"
        />
        <Info
          heading="Step 2"
          content="Pledge an activity (walk, run, ride, meditate), your time and your task"
          image={pledgeEg}
        />
        <br />
        <br />
        <Info
          heading="Step 3"
          content="Pass it on and get selected to score face-time with athletes"
        />
      </div>
    );
  }
}

export default PledgeInfo;

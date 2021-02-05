import React, { Component } from "react";

import "../../css/Styles.css";

import WHO from "../../images/Logos/who.png";
import CDC from "../../images/Logos/cdc.png";

class LearnMore extends Component {
  render() {
    return (
      <div className="Learn-More">
        <div className="row">
          <div className="col-sm-6">
            <img className="Learn-More-Logo" src={WHO} alt="WHO" />
            <p className="Learn-More-Content">
              Learn more about staying active and healthy at home from the&nbsp;
              <a
                href="https://www.who.int/news-room/campaigns/connecting-the-world-to-combat-coronavirus/healthyathome/healthyathome---physical-activity"
                target="_blank"
                rel="noopener noreferrer"
              >
                World Health Organization
              </a>
              .
            </p>
          </div>
          <div className="col-sm-6">
            <img className="Learn-More-Logo" src={CDC} alt="CDC" />
            <p className="Learn-More-Content">
              Learn more about how to be physically active while social
              distancing from the&nbsp;
              <a
                href="https://www.cdc.gov/physicalactivity/how-to-be-physically-active-while-social-distancing.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Centers for Disease Control and Prevention
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default LearnMore;

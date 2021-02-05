import React, { Component } from "react";

import "../../css/Styles.css";

class Info extends Component {
  render() {
    return (
      <section className="Info">
        <h2 className="Info-Heading">{this.props.heading}</h2>
        <p className="Info-Subheading">{this.props.subheading}</p>
        <p className="Info-Content">{this.props.content}</p>
        <img
          className="Info-Image"
          src={this.props.image}
          onerror="this.style.display='none'"
        />
      </section>
    );
  }
}

export default Info;

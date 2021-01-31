import React, { Component } from "react";
class Resources extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div>
          <img
            src={this.props.imgSource}
            alt="imag"
            width="150"
            height="150"
          ></img>
        </div>
        <p>
          {this.props.content}{" "}
          <a href={this.props.link}>{this.props.linkName}</a>
        </p>
      </React.Fragment>
    );
  }
}

export default Resources;

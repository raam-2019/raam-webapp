import React from "react";

const PledgeTrackerBar = (props) => {
  const {pledges } = props;
  
  const containerStyles = {
    height: 30,
    width: '90%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 50,
    paddingBottom: 2
  }
  
  const fillerStyles = {
    height: '100%',
    width: `${pledges}%`,
    backgroundColor: "#da0001",
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${pledges}%`}</span>
      </div>
    </div>
  );
};

export default PledgeTrackerBar;
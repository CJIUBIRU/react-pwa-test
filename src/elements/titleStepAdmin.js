import React from "react";

function TitleStepAdmin(props) {
  const titleStepStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    textAlign: "center",
    border: "1.5px dashed gray",
    marginLeft: "37.5%",
    marginRight: "37.5%",
    width: "25%",
    height: "45px",
    lineHeight: "45px",
    color: "#069A8E",
    letterSpacing: "1.5px",
  };
  return (
    <div>
      <p style={titleStepStyle}> {props.name} </p>
    </div>
  );
}

export default TitleStepAdmin;

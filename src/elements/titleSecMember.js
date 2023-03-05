import React from "react";

function TitleSecMember(props) {
  const titleStyle = {
    backgroundColor: "#F4D19B",
    color: "#ffffff",
    width: "100%",
    textAlign: "center",
    height: "100px",
    lineHeight: "100px",
    fontWeight: "bold",
    marginBottom: "20px",
    letterSpacing: "1px",
    marginTop: "70px",
  };
  return (
    <div>
      <h2 style={titleStyle}> {props.name} </h2>
    </div>
  );
}

export default TitleSecMember;

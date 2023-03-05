import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function ButtonMember(props) {
  const stepBtnStyle = {
    color: "#ffffff",
    backgroundColor: "#F58D59",
    borderRadius: "30px",
    lineHeight: "33px",
    fontSize: "16px",
    width: "120px",
    textAlign: "center",
    height: "35px",
    fontWeight: "bold",
  };
  return (
    <div>
      <Nav.Link as={Link} to={props.to} style={stepBtnStyle}>
        {props.name}
      </Nav.Link>
    </div>
  );
}

export default ButtonMember;

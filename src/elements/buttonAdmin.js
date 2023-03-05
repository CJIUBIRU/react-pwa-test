import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function ButtonAdmin(props) {
  const stepBtnStyle = {
    color: "#ffffff",
    backgroundColor: "#069A8E",
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

export default ButtonAdmin;

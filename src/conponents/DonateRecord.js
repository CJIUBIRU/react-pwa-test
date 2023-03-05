import { Container } from "react-bootstrap";
import React from "react";
import "../App.css";
import TitleSecMember from "../elements/titleSecMember";
import Record from "../elements/record";
import Navbar from "../elements/navbar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { Row, Col } from "react-bootstrap";

function UploadDemand() {
  const navigate = useNavigate("");
  const [user] = useAuthState(auth);
  if (!user) {
    navigate("/signIn");
  }
  return (
    <div>
      <Navbar />
      <TitleSecMember name="認購紀錄" />
      <Container>
        <div>
          <Row>
            <Col>
              <Record />
            </Col>
            <Col>
              <Record />
            </Col>
            <Col>
              <Record />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default UploadDemand;

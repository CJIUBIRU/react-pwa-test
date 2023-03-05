import { Col, Container, Row } from "react-bootstrap";
import React from "react";
// import ListGroup from "react-bootstrap/ListGroup";
import "../App.css";
import TitleSecMember from "../elements/titleSecMember";
import TitleStepMember from "../elements/titleStepMember";
import ProductStep1 from "../elements/productStep1";
import Navbar from "../elements/navbar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";
import NavbarHome from "../elements/navbarHome";
import ButtonMember from "../elements/buttonMember";

const DonateList = () => {
  const [user] = useAuthState(auth);
  const donPageStyle = {
    marginTop: "70px",
  };
  return (
    <div>
      {user && <Navbar />}
      {!user && <NavbarHome />}
      <div style={donPageStyle}>
        <TitleSecMember name="捐贈物資列表" />
        <Container>
          <TitleStepMember name="STEP1&nbsp;-&nbsp;選擇捐贈物資" />
          {/* <div style={selectPageStyle}>
            <div style={{ width: "50%" }}>
              <FromSelect />
            </div>
            &nbsp;
            <div style={{ width: "50%" }}>
              <Search />
            </div>
          </div> */}
          {/* <div style={goodsPageStyle}>
            <ProductStep1 />
            <ProductStep1 />
            <ProductStep1 />
          </div>
          <div style={goodsPageStyle}>
            <ProductStep1 />
            <ProductStep1 />
            <ProductStep1 />
          </div> */}
          <Row>
            <Col>
              <ProductStep1 />
            </Col>
            <Col>
              <ProductStep1 />
            </Col>
            <Col>
              <ProductStep1 />
            </Col>
          </Row>
          {/* <PaginationList /> */}
          {user && (
            <div
              style={{
                marginTop: "25px",
                marginBottom: "40px",
                marginLeft: "45%",
                marginRight: "55%",
              }}
            >
              <ButtonMember to="/donateListSec" name="下一步" />
            </div>
          )}
          {!user && (
            <div
              style={{
                marginTop: "25px",
                marginBottom: "40px",
                marginLeft: "43%",
              }}
            >
              <button
                style={{
                  color: "#ffffff",
                  backgroundColor: "lightgray",
                  border: "none",
                  borderRadius: "30px",
                  fontSize: "16px",
                  width: "180px",
                  textAlign: "center",
                  height: "35px",
                  fontWeight: "bold",
                }}
              >
                登入後可進行下一步
              </button>
            </div>
          )}
        </Container>
      </div>
    </div>
  );
};

export default DonateList;

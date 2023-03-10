import React, { useState } from "react";
import "../App.css";
import Card from "react-bootstrap/Card";
import Navbar from "../elements/navbar";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import TitleSecMember from "../elements/titleSecMember";
import TitleStepMember from "../elements/titleStepMember";
import Button from "react-bootstrap/Button";

import { updateDoc, doc } from "firebase/firestore";
import { db } from "../utils/firebase";

import { useNavigate, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCloudDownload } from '@fortawesome/free-solid-svg-icons';

import NavbarHome from "../elements/navbarHome";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";
import { Container } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row } from "react-bootstrap";
import { Stepper } from "react-form-stepper";

function ApplicationUpload4() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const { fromID, fromURL3 } = location.state;

  const [name, setName] = useState("");
  const [contactAddress, setContactAddress] = useState("");
  const [registerAddress, setRegisterAddress] = useState("");
  const [managerName, setManagerName] = useState("");
  const [managerPhone, setManagerPhone] = useState("");
  const [mail, setMail] = useState("");
  const [authority, setAuthority] = useState("");
  const [demandPurpose, setDemandPurpose] = useState("");

  const taskDocRef = doc(db, "charity", fromID);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateDoc(taskDocRef, {
        "file.doc.certificate": fromURL3,
        "info.name": name,
        "info.mail": mail,
        "info.registAddress": registerAddress,
        "info.contactAddress": contactAddress,
        "info.manager.name": managerName,
        "info.manager.phone": managerPhone,
        "info.details.authority": authority,
        "info.details.demandPurpose": demandPurpose,
        // info: {
        //   name: name,
        //   mail: mail,
        //   status: "?????????",
        //   fundraisingNo: "????????????",
        //   tel: "????????????",
        //   registAddress: registerAddress,
        //   contactAddress: contactAddress,
        //   manager: {
        //     name: managerName,
        //     phone: managerPhone,
        //   },
        //   details: {
        //     category: "????????????",
        //     concept: "????????????",
        //     intro: "????????????",
        //     authority: authority,
        //     demandPurpose: demandPurpose,
        //   },
        // },
        // UniqueId: uuidv4(),
      });
      navigate("/UploadSuccess");
    } catch (err) {
      alert(err);
    }
  };

  const cardStyle = {
    width: "75%",
    color: "black",
    left: "50%",
    marginTop: "100px",
    transform: `translate(${-50}%, ${-5}%)`,
    paddingTop: "5%",
    paddingBottom: "6%",
    paddingLeft: "8%",
    paddingRight: "8%",
    letterSpacing: "1px",
  };
  const pageStyle = {
    position: "absolute",
    marginTop: "30px",
    left: "50%",
    transform: `translate(${-50}%, ${-50}%)`,
    paddingTop: "5px",
    paddingBottom: "5px",
    paddingLeft: "15px",
    paddingRight: "15px",
  };
  const h4Style = {
    fontWeight: "bold",
    lineHeight: "80px",
  };
  const nameStyle = {
    lineHeight: "40px",
    marginRight: "10px",
  };
  const labelStyle = {
    height: "40px",
    borderRadius: "5px",
  };
  return (
    <div>
      {user && <Navbar />}
      {!user && <NavbarHome />}
      <TitleSecMember name="???????????????????????????????????????" />
      <Container>
      <Stepper style={{marginBottom: "15px"}}
          steps={[
            { label: "???????????????????????????" },
            { label: "?????????????????????" },
            { label: "???????????????????????????" },
            { label: "??????????????????????????????" },
            { label: "??????" },
          ]}
          activeStep={3}
        />
      </Container>
      <TitleStepMember name="STEP4&nbsp;-&nbsp;??????????????????????????????" />
      <Card style={cardStyle}>
        <Card.Body>
          <form onSubmit={handleSubmit} name="addTask">
            <h4 style={h4Style}>??????????????????????????????</h4>
            <ol
              style={{
                paddingLeft: "50px",
                fontWeight: "520",
                marginTop: "8px",
              }}
              type="a"
            >
              <InputGroup className="mb-3">
                <span style={{ width: "35%" }}>
                  <li>
                    <Form.Label htmlFor="basic-url" style={nameStyle}>
                      ?????????????????????????????????&nbsp;
                    </Form.Label>
                  </li>
                </span>
                <span style={{ width: "65%" }}>
                  <Form.Control
                    style={labelStyle}
                    type="text"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    value={name}
                    placeholder="??????????????????????????????????????????????????????"
                  />
                </span>
              </InputGroup>
              <InputGroup className="mb-3">
                <span style={{ width: "35%" }}>
                  <li>
                    <Form.Label htmlFor="basic-url" style={nameStyle}>
                      ???????????????&nbsp;
                    </Form.Label>
                  </li>
                </span>
                <span style={{ width: "65%" }}>
                  <Form.Control
                    style={labelStyle}
                    type="text"
                    onChange={(e) => {
                      setRegisterAddress(e.target.value);
                    }}
                    value={registerAddress}
                    placeholder="??????????????????????????????242???????????????????????????510??????"
                  />
                </span>
              </InputGroup>
              <InputGroup className="mb-3">
                <span style={{ width: "35%" }}>
                  <li>
                    <Form.Label htmlFor="basic-url" style={nameStyle}>
                      ???????????????&nbsp;
                    </Form.Label>
                  </li>
                </span>
                <span style={{ width: "65%" }}>
                  <Form.Control
                    style={labelStyle}
                    type="text"
                    onChange={(e) => {
                      setContactAddress(e.target.value);
                    }}
                    value={contactAddress}
                    placeholder="??????????????????????????????242???????????????????????????510??????"
                  />
                </span>
              </InputGroup>
              <InputGroup className="mb-3">
                <span style={{ width: "35%" }}>
                  <li>
                    <Form.Label htmlFor="basic-url" style={nameStyle}>
                      ??????????????????&nbsp;
                    </Form.Label>
                  </li>
                </span>
                <span style={{ width: "65%" }}>
                  <Form.Control
                    style={labelStyle}
                    type="text"
                    onChange={(e) => {
                      setManagerName(e.target.value);
                    }}
                    value={managerName}
                    placeholder="?????????????????????????????????????????????"
                  />
                </span>
              </InputGroup>
              <InputGroup className="mb-3">
                <span style={{ width: "35%" }}>
                  <li>
                    <Form.Label htmlFor="basic-url" style={nameStyle}>
                      ????????????????????????&nbsp;
                    </Form.Label>
                  </li>
                </span>
                <span style={{ width: "65%" }}>
                  <Form.Control
                    style={labelStyle}
                    type="text"
                    onChange={(e) => {
                      setManagerPhone(e.target.value);
                    }}
                    pattern="[0-9]{2}-[0-9]{4}-[0-9]{4}"
                    value={managerPhone}
                    placeholder="???????????????????????????????????????02-1234-5678???"
                  />
                </span>
              </InputGroup>
              <InputGroup className="mb-3">
                <span style={{ width: "35%" }}>
                  <li>
                    <Form.Label htmlFor="basic-url" style={nameStyle}>
                      ???????????????&nbsp;
                    </Form.Label>
                  </li>
                </span>
                <span style={{ width: "65%" }}>
                  <Form.Control
                    style={labelStyle}
                    type="email"
                    onChange={(e) => {
                      setMail(e.target.value);
                    }}
                    value={mail}
                    placeholder="??????????????????????????????abc12345@gmail.com???"
                  />
                </span>
              </InputGroup>
              <InputGroup className="mb-3">
                <span style={{ width: "35%" }}>
                  <li>
                    <Form.Label htmlFor="basic-url" style={nameStyle}>
                      ?????????????????????&nbsp;
                    </Form.Label>
                  </li>
                </span>
                <span style={{ width: "65%" }}>
                  <Form.Control
                    style={labelStyle}
                    type="text"
                    onChange={(e) => {
                      setAuthority(e.target.value);
                    }}
                    value={authority}
                    placeholder="??????????????????????????????????????????????????????"
                  />
                </span>
              </InputGroup>
              <InputGroup className="mb-3">
                <span style={{ width: "35%" }}>
                  <li>
                    <Form.Label htmlFor="basic-url" style={nameStyle}>
                      ???????????????????????????&nbsp;
                    </Form.Label>
                  </li>
                </span>
                <span style={{ width: "65%" }}>
                  <Form.Control
                    type="textarea"
                    placeholder="?????????????????????????????????"
                    onChange={(e) => {
                      setDemandPurpose(e.target.value);
                    }}
                    value={demandPurpose}
                    style={{ height: "100px" }}
                  />
                </span>
              </InputGroup>
              {/* <FormControl label="??????????????????????????????" type="text" onChange={(e) => { setCharityName(e.target.value) }} value={charityName} />

                            <FormControl label="????????????" type="text" onChange={(e) => { setCharityAddress(e.target.value) }} value={charityAddress} /> */}
              {/* <InputInfo label="????????????" type="text" />
                                <InputInfo label="???????????????" />
                                <InputInfo label="?????????????????????" />
                                <InputInfo label="??????????????????" />
                                <InputInfo label="??????????????????" /> */}
            </ol>

            <div style={pageStyle}>
              {/* <button >????????????</button> */}
              <Button
                style={{
                  color: "#ffffff",
                  backgroundColor: "#F58D59",
                  borderRadius: "30px",
                  fontSize: "16px",
                  width: "120px",
                  textAlign: "center",
                  height: "35px",
                  fontWeight: "bold",
                  border: "none",
                }}
                type="submit"
              >
                ????????????
              </Button>
            </div>
          </form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ApplicationUpload4;

import { Container, Col, Row } from "react-bootstrap";
import React from "react";
import "../App.css";
import TitleSec from "../elements/titleSec";
import TitleStep from "../elements/titleStep";
import DemandStep3 from "../elements/demandStep3";
import Navbar from "../elements/navbar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../utils/firebase";
import { v4 as uuidv4 } from "uuid";
import ProgressBar from "react-bootstrap/ProgressBar";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Stepper } from "react-form-stepper";

function UploadDemand() {
  const navigate = useNavigate("");
  const [user] = useAuthState(auth);
  if (!user) {
    navigate("/signIn");
  }
  // const nextStepStyle = {
  //   marginLeft: "10px",
  // };
  const nextStepStyle = {
    color: "#ffffff",
    backgroundColor: "#002B5B",
    borderRadius: "30px",
    border: "none",
    fontSize: "16px",
    width: "120px",
    textAlign: "center",
    marginLeft: "10px",
    height: "35px",
    fontWeight: "bold",
  };
  // const returnStepStyle = {
  //   marginLeft: "39%",
  // };
  const returnStepStyle = {
    color: "#ffffff",
    backgroundColor: "#002B5B",
    borderRadius: "30px",
    border: "none",
    fontSize: "16px",
    width: "120px",
    textAlign: "center",
    height: "35px",
    fontWeight: "bold",
    // marginLeft: "39%",
    // marginTop: "40px"
  };
  const stepBtnStyle = {
    marginBottom: "40px",
    marginTop: "25px",
    textAlign: "center",
  };

  let demandList = JSON.parse(localStorage.getItem("demandList"));

  const handleSubmit = async () => {
    try {
      for (let i = 0; i < demandList.length; i++) {
        await addDoc(collection(db, "demand"), {
          name: demandList[i].name,
          availibility: "",
          charity: demandList[i].charityName,
          description: demandList[i].demandInfo,
          photo: "",
          quantity: demandList[i].count,
          received: "",
          state: "?????????",
          store: demandList[i].store,
          uid: user.uid,
          id: uuidv4(),
        });
      }
      navigate("/myDemand");
      alert("???????????????");
      localStorage.removeItem("demandList");
      localStorage.removeItem("cart");
    } catch (err) {
      console.log(err);
      window.location.reload();
      alert("?????????????????????????????????????????????");
    }
  };

  return (
    <div>
      <Navbar />
      <TitleSec name="??????????????????" />
      <Container>
      <Stepper
          steps={[
            { label: "??????????????????" },
            { label: "????????????" },
            { label: "????????????" },
            // { label: "??????" },
          ]}
          activeStep={2}
        />
        <TitleStep name="STEP3&nbsp;-&nbsp;???????????????" />
        {demandList ? (
          demandList.map((item, index) => (
            <>
              <DemandStep3
                key={index}
                id={item.id}
                name={item.name}
                store={item.store}
                demandInfo={item.demandInfo}
                count={item.count}
                user={item.charityName}
              />
            </>
          ))
        ) : (
          <div style={{ textAlign: "center", marginTop: "35px" }}>
            <p style={{ color: "red", fontWeight: "bold" }}>
              ???????????????????????????????????????????????????
            </p>
          </div>
        )}
        {demandList ? (
          <p
            style={{
              fontSize: "17px",
              textAlign: "center",
              marginTop: "10px",
              color: "red",
              fontWeight: "bold",
            }}
          >
            ????????????????????????????????????????????????
          </p>
        ) : (
          ""
        )}
        <div style={stepBtnStyle}>
          <Link to="/uploadDemandSec">
            <button
              style={returnStepStyle}
              onClick={() => {
                localStorage.removeItem("demandList");
              }}
            >
              ??????
            </button>
          </Link>
          {demandList !== null ? (
            <button style={nextStepStyle} onClick={handleSubmit}>
              ??????
            </button>
          ) : (
            ""
          )}
        </div>
      </Container>
    </div>
  );
}

export default UploadDemand;

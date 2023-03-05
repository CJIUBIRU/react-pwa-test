import { Container, Nav } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import TitleSecAdmin from "../elements/titleSecAdmin";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ButtonLink from "../elements/button";
import ButtonAdmin from "../elements/buttonAdmin";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { sendEmailVerification } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Navbar from "../elements/navbar";
import { faHandPointer } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../utils/firebase";
import ProgressBar from "react-bootstrap/ProgressBar";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Card, FormControl } from "react-bootstrap";

function Task({ id, name, email, level, img, status }) {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  function verifiedEmail() {
    if (user.emailVerified === false) {
      sendEmailVerification(auth.currentUser)
        .then(() => {
          // 驗證信發送完成
          navigate("/profile");
          alert(
            "驗證信已發送到您的信箱，請查收。\n註：若找不到信件，可查看是否被寄送至垃圾郵件裡，謝謝。"
          );
        })
        .catch((error) => {
          // 驗證信發送失敗
          console.log(error.message);
          alert("驗證信發送失敗。");
        });
    } else {
      alert("未能抓到user資訊");
    }
  }
  const uploadUserName = (item) => {
    localStorage.setItem("good", JSON.stringify(item));
  };
  return (
    <div>
      <Row>
        <Col>
          <div>
            {/* <div
              style={{
                width: "260px",
                height: "260px",
                margin: "50px 0px 30px 100px",
                borderRadius: "100%",
                backgroundColor: "#fef1e6",
                textAlign: "center",
                lineHeight: "260px",
              }}
            >
              <a href="#" style={{ textDecoration: "none", color: "#002b5b" }}>
                新增頭像&nbsp;
                <FontAwesomeIcon icon={faHandPointer} />
              </a>
            </div> */}
            {email === user.email && (
              <div>
                <img
                  style={{
                    width: "260px",
                    height: "260px",
                    margin: "50px 0px 30px 100px",
                    borderRadius: "100%",
                  }}
                  alt="profileImg"
                  src={img}
                ></img>
              </div>
            )}
          </div>
        </Col>
        <Col>
          {email === user.email && level === "admin" && (
            <div>
              <div style={{ marginTop: "100px" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    height: "0px",
                  }}
                >
                  <b style={{color: "#069A8E"}}>用戶名稱：</b>
                  <p>{name}</p>
                  &nbsp;
                  <Nav.Link
                    as={Link}
                    to="/setUserNameAdmin"
                    style={{ border: "none", backgroundColor: "white", color: "#069A8E" }}
                    onClick={(e) => uploadUserName({ id: id, name: name })}
                  >
                    <FontAwesomeIcon icon={faPen} />
                  </Nav.Link>
                </div>
                <a href="#" style={{ color: "#002b5b" }}></a>
                <br />
                <b style={{color: "#069A8E"}}>用戶信箱：</b>
                {user.email}
                &nbsp;
                <FontAwesomeIcon
                  style={{ color: "#26aa99" }}
                  icon={faCircleCheck}
                />
                {/* {user.emailVerified == false && (
              <a href="#" style={{ color: "#002b5b" }} onClick={verifiedEmail}>
                <FontAwesomeIcon
                  style={{ color: "lightgray" }}
                  icon={faCircleCheck}
                />
              </a>
            )}
            {user.emailVerified == true && (
              <a href="#" style={{ color: "#002b5b" }}>
                <FontAwesomeIcon
                  style={{ color: "#26aa99" }}
                  icon={faCircleCheck}
                />
              </a>
            )} */}
                <br />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    height: "45px",
                  }}
                >
                  <b style={{color: "#069A8E"}}>使用者帳號：</b>
                  {email}
                </div>
                <a href="#" style={{ color: "#002b5b" }}></a>
                <br />
                <div
                  style={{
                    marginTop: "0px",
                    display: "flex",
                    flexDirection: "row",
                  }}
                > 
                  <ButtonAdmin name="更換頭貼" />
                  &nbsp;
                  {status !== "google" && (
                    <ButtonAdmin name="修改密碼" to="/userUpdatePasswordAdmin" />
                  )}
                </div>
              </div>
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
}
function UploadDemand() {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  if (!user) {
    navigate("/signIn");
  }
  const [details, setDetails] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "users"));
    onSnapshot(q, (querySnapshot) => {
      setDetails(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  const profileContentStyle = {
    borderRadius: "5px",
    height: "380px",
    color: "#002b5b",
    fontSize: "18px",
    letterSpacing: "1px",
    lineHeight: "40px",
    margin: "0 0 0 5%",
  };
  return (
    <div>
      <Navbar />
      <TitleSecAdmin name="個人檔案管理" />
      <Container>
        <Card style={{ marginTop: "40px", width: "80%", marginLeft: "10%" }}>
          <div style={profileContentStyle}>
            {/* <Row> */}
            {/* <Col>
                <div>
                  <div style={imgSecStyle}>
                    <a
                      href="#"
                      style={{ textDecoration: "none", color: "#002b5b" }}
                    >
                      新增頭像&nbsp;
                      <FontAwesomeIcon icon={faHandPointer} />
                    </a>
                  </div>
                </div>
              </Col> */}
            {details.map((item) => (
              <Task
                id={item.id}
                key={item.id}
                name={item.data.name}
                email={item.data.email}
                level={item.data.level}
                img={item.data.img}
                status={item.data.status}
              />
            ))}
          </div>
        </Card>
      </Container>
    </div>
  );
}

export default UploadDemand;

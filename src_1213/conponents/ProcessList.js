import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Card from "react-bootstrap/Card";
import img from "../img/tablet.jpg";
import ButtonLink from "../elements/button";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";

function RecordList() {
  const navigate = useNavigate("");
  const [user] = useAuthState(auth);
  if (!user){
    navigate("/signIn");
  }
  const card = {
    marginBottom: "20px",
    marginLeft: "6%",
    padding: "40px 40px 40px 40px",
    color: "#002B5B",
    width: "70%",
    display: "flex",
    flexDirection: "row",
  };
  const contentStyle = {
    textAlign: "left",
    marginLeft: "30px",
    letterSpacing: "2px",
  };
  const contentSecStyle = {
    textAlign: "right",
    letterSpacing: "2px",
  };
  const demandHrefStyle = {
    color: "#90AACB",
  };
  const goodsImgStyle = {
    width: "200px",
  };
  const cardSec = {
    width: "20%",
    marginBottom: "20px",
    padding: "40px 10px 30px 10px",
    color: "#002B5B",
  };
  const userTextStyle = {
    color: "#002b5b",
    fontWeight: "bold",
  };
  const goodsPageStyle = {
    display: "flex",
    flexDirection: "row",
  };
  return (
    <div>
      <div style={goodsPageStyle}>
        <Card style={card}>
          <Card.Img style={goodsImgStyle} variant="top" src={img} />
          <Card.Body style={contentStyle}>
            <Card.Title>
              物資名稱：<b>ASUS 平板電腦</b>
            </Card.Title>
            <hr></hr>
            <Card.Text style={{ color: "#6C6C6C" }}>
              需求機構：鈺惠協會
              <br />
              捐贈數量：<span style={userTextStyle}>8</span>
              <br />
              需求說明：提供給偏鄉孩童授課使用
              <br />
              物資提供商家：
              <a style={demandHrefStyle} href="#">
                奕慈麵包坊
              </a>
              <br />
              單價：$203／台
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={cardSec}>
          <Card.Body style={contentSecStyle}>
            <Card.Title
              style={{
                color: "#e74a3b",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              訂單未完成
            </Card.Title>
            <hr></hr>
            <Card.Text style={{ color: "#6C6C6C" }}>
              <span style={userTextStyle}>2</span>項物資
              <br />
              金額：<span style={userTextStyle}>$4060</span>
              <br />
              <div
                style={{
                  backgroundColor: "#fef1e6",
                  margin: "8px 0px 8px 0px",
                  textAlign: "center",
                  fontSize: "13px",
                }}
              >
                <a
                  href="#"
                  style={{ textDecoration: "none", color: "#664d03" }}
                >
                  店家備貨完成&nbsp;
                  <FontAwesomeIcon icon={faAngleRight} />
                </a>
              </div>
              <hr />
              <div style={{ margin: "0 0 0 15%" }}>
                <ButtonLink name="查看更多" to="/processRecordList" />
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default RecordList;

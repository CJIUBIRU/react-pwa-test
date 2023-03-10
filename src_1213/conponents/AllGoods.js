import { Container } from "react-bootstrap";
import React, { Componentt, useState, useEffect } from "react";
import "../App.css";
import TitleSec from "../elements/titleSec";
import TitleStep from "../elements/titleStep";
import FromSelect from "../elements/fromSelect";
import Search from "../elements/search";
import DemandStep1 from "../elements/demandStep1";
import ButtonLink from "../elements/button";
import PaginationList from "../elements/paginationList";
import Navbar from "../elements/navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useNavigate } from "react-router-dom";
import { doc, getDocFromCache, collection, query, onSnapshot, } from "firebase/firestore";
import { db } from "../utils/firebase";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";

function GoodsDetail({  name, price, store }) {

  const cardStyle = {
    width: "280px",
    height: "500px",
  };

  const btnStyle = {
    position: "absolute",
    left: "50%",
    transform: `translate(${-50}%, ${-50}%)`,
    paddingTop: "5px",
    paddingBottom: "5px",
    paddingLeft: "15px",
    paddingRight: "15px",
    borderRadius: "10px",
    letterSpacing: "1px",
    fontSize: "2px",
    margin: "25px 0px 20px 0px"
  };
  const imgStyle = {
    width: "150px",
    height: "120px",
    margin: "30px",
  };
  const nameStyle = {
    fontWeight: "bold",
    color: "#002B5B",
    textAlign: "center",
    paddingBottom: "10px",
  };
  const dataStyle = {
    textAlign: "center",
    left: "50%",
  };

  return (
    <div style={{ display: "inline-block", margin: "10px" }}>
      <Card style={cardStyle}>
        <div style={{textAlign: "center"}}>
          <Card.Img
            style={imgStyle}
            variant="top"
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Picture_icon_BLACK.svg"
          />
        </div>

        <Card.Body>
          
          <div style={{ height: "160px" }}>
            <Card.Title style={nameStyle}>{name}</Card.Title>
            <Card.Text style={dataStyle}>
              <p>
                <b>???????????????</b>{store}
              </p>
              <p>
                <b>???????????????</b>${price}
              </p>
            </Card.Text>
          </div>
        
        </Card.Body>
      </Card>
    </div>
  );
}
function AllGoods() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate("");
  if (!user){
    navigate("/signIn");
  }
  const [details, setDetails] = useState([]);
  useEffect(() => {
    const q = query(
      collection(db, "goodsDemand"),
    );
    onSnapshot(q, (querySnapshot) => {
      setDetails(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  return (
    <div>
      <Navbar />
      <TitleSec name="???????????????" />
       <Container>
        {/* , display: "flex", flexDirection: "row" */}
        <div style={{ padding: "30px", textSpacing: "1px" }}>
          <div>
            {details.map((index) => (
              <GoodsDetail
                key={index}
                id={index.id}
                name={index.data.name}
                price={index.data.price}
                store={index.data.store}
              />
            ))}
          </div>
        </div>
      </Container>
      
    </div>
  );
}

export default AllGoods;

import { Container } from "react-bootstrap";
import "../App.css";
import TitleSecMember from "../elements/titleSecMember";
import TitleStepMember from "../elements/titleStepMember";
import ProductStep2 from "../elements/productStep2";
import Navbar from "../elements/navbar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import ButtonMember from "../elements/buttonMember";

const DonateList = () => {
  const navigate = useNavigate("");
  const [user] = useAuthState(auth);
  if (!user) {
    navigate("/signIn");
  }
  const donPageStyle = {
    marginTop: "70px",
  };
  const nextStepStyle = {
    marginLeft: "10px",
  };
  const returnStepStyle = {
    marginLeft: "39%",
  };
  const stepBtnStyle = {
    display: "flex",
    flexDirection: "row",
    marginBottom: "40px",
    marginTop: "20px",
  };
  return (
    <div>
      <Navbar />
      <div style={donPageStyle}>
        <TitleSecMember name="捐贈物資列表" />
        <Container>
          <TitleStepMember name="STEP2&nbsp;-&nbsp;填寫資料" />
          <div>
            <ProductStep2 />
          </div>
          <div>
            <ProductStep2 />
          </div>
          <div style={stepBtnStyle}>
            <div style={returnStepStyle}>
              <ButtonMember to="/donate" name="返回" />
            </div>
            <div style={nextStepStyle}>
              <ButtonMember to="/donateListThird" name="下一步" />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default DonateList;

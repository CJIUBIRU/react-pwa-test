import React from "react";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Navbar from "../elements/navbar";
import NavbarHome from "../elements/navbarHome";
import TitleSecMember from "../elements/titleSecMember";

function Gain() {
  const [user] = useAuthState(auth);
  return (
    <div>
      {user && <Navbar />}
      {!user && <NavbarHome />}
      <TitleSecMember name="成果櫥窗" />
    </div>
  );
}

export default Gain;

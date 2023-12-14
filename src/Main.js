import React from "react";
import { Route, Routes, Link, useNavigate, NavLink } from "react-router-dom";
import App from "./App";
import App2 from "./App2";
import CryptoJS from "crypto-js";

export default function Main() {
  const encryptedDetails = CryptoJS.AES.encrypt("kathan", "key").toString();
  console.log(encryptedDetails);
  const bytes = CryptoJS.AES.decrypt(encryptedDetails, "key");
  const original = bytes.toString(CryptoJS.enc.Utf8);
  console.log(original);

  // const navigate = useNavigate();
  // const handleIt = () => {
  //   console.log("from handele");
  //   navigate("/app", { id: "car" });
  // };
  const og = { id: "thisit " };
  return (
    <>
      <Link to="/www">click krke dekh lo</Link>

      <br />

      <NavLink
        to="/app"
        state={og}
        style={({ isActive }) => ({
          margin: "30px",
          color: isActive ? "red" : "blue",
        })}
      >
        app page
      </NavLink>
      {/* <button onClick={handleIt}>clivkk</button> */}

      <br />
      <Link to="/">Home ho aiye</Link>
      <br />
      <Routes>
        <Route exact path="/" element={"hello"} />
        <Route exact path="/www/:name" Component={App2} />
        <Route exact path="/app" Component={App} />
        <Route path="*" element={"Errr: Pat fond!"} />
      </Routes>
    </>
  );
}

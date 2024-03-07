import React from "react";
import ReactDOM from "react-dom";
import logo from "../src/logo.svg";
import "./style.css";
import Head from "./head";
import Mainn from "./maincontent";
function Page() {
  return (
    <div>
      <Head />
      <Mainn />
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));

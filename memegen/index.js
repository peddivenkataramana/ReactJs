import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Head from "./header.js";
import Main from "./main.js";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="app">
    <Head />
    <Main />
  </div>
);

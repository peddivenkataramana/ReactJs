import React from "react";

import logo from "../src/logo.svg";
export default function Heade() {
  return (
    <div>
      <header>
        <nav>
          <div className="Cont">
            <img src={logo} width="40px" />
            <h2>ReactFacts</h2>
          </div>
          <div className="rest">
            <h3>React Course - Project 1</h3>
          </div>
        </nav>
      </header>
    </div>
  );
}

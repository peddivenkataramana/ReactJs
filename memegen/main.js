import React, { useState } from "react";

export default function Main() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  function handleInputChange(event, setInputFunction) {
    setInputFunction(event.target.value);
  }

  function onClick() {
    console.log("Input 1:", input1);
    console.log("Input 2:", input2);
  }

  return (
    <div className="cont">
      <div className="inputt">
        <input
          type="text"
          value={input1}
          onChange={(e) => handleInputChange(e, setInput1)}
        />
        <input
          type="text"
          value={input2}
          onChange={(e) => handleInputChange(e, setInput2)}
        />
      </div>

      <button onClick={onClick}>Get a Meme Image</button>
      {memeImages.map((imageUrl, index) => (
        <img
          key={index}
          src={imageUrl}
          alt={`Meme ${index + 1}`}
          style={{ maxWidth: "100%", marginTop: "10px" }}
        />
      ))}

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <p>{input1}</p>
        <p>{input2}</p>
      </div>
    </div>
  );
}

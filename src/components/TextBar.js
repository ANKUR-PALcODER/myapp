import React, { useState } from "react";
import "../App.css";

export default function TextBar(prop) {
  const [text, setText] = useState("");
  let now = text === "" ? 0 : text.trim().split(" ").length;
  let textArr = text.trim().split(" ");
  if (textArr.length === 1 && textArr[0] === "") {
    now = 0;
  }

  // DISABLED NATURE OF BUTTON
  let disabled = now === 0 ? true : false;
  const handleUpClick = () => {
    setText(text.toUpperCase());
    setInterval(() => {
      document.title = "Coverted To Uppercase";
    }, 2000);
  };
  const handleLowClick = () => {
    setText(text.toLowerCase());
  };
  const handleClearClick = () => {
    setText("");
  };

  const handleChange = (event) => {
    setText(event.target.value);
    console.log(textArr);
  };
  const copyText = () => {
    let text = document.getElementById("myBox");
    // text.select();
    navigator.clipboard.writeText(text.value);
    prop.showAlert("Text Copied !!", "success");
  };
  const removeSpace = () => {
    let arrText = text.split(/[ ]+/);
    console.log(arrText);
    setText(arrText.join(" "));
  };
  return (
    <>
      <div className="body" style={prop.myStyle.bodyTheme}>
        <div className="pt-2 mb-2">
          <h1>{prop.heading}</h1>
          <textarea
            className="form-control"
            id="myBox"
            placeholder=""
            rows="8"
            value={text}
            onChange={handleChange}
            style={prop.myStyle.bodyInputTheme}
          />
        </div>
        <button
          className={`btn btn-${prop.myStyle.navbarTheme.theme} me-2 mb-2`}
          onClick={handleUpClick}
          disabled = {disabled}
        >
          Convert to Uppercase
        </button>
        <button
          className={`btn btn-${prop.myStyle.navbarTheme.theme} me-2 mb-2`}
          onClick={handleLowClick}
          disabled = {disabled}
        >
          Convert to Lowercase
        </button>
        <button
          className={`btn btn-${prop.myStyle.navbarTheme.theme} me-2 mb-2`}
          onClick={handleClearClick}
          disabled = {disabled}
        >
          Clear
        </button>
        <button
          className={`btn btn-${prop.myStyle.navbarTheme.theme} me-2 mb-2`}
          onClick={copyText}
          disabled = {disabled}
        >
          CopyText
        </button>
        <button
          className={`btn btn-${prop.myStyle.navbarTheme.theme} me-2 mb-2`}
          onClick={removeSpace}
          disabled = {disabled}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3">
        <h2>Summary of Your Text</h2>
        <p>
          {now} words, {text.trim().length} characters
        </p>
        <b>Time to Read : </b> {now * 0.008} <b>Minutes</b>
        <h3>Preview :</h3>
        <p
          style={{
            textAlign: "left",
            border: "2px solid grey",
            minHeight: "200px",
            padding: "5px",
            borderRadius: "8px",
            backgroundColor: prop.myStyle.bodyInputTheme.backgroundColor,
            color: prop.myStyle.bodyInputTheme.color,
          }}
        >
          {now > 0 ? text : "Nothing to preview!! Enter something to preview!!"}
        </p>
      </div>
    </>
  );
}

import React, { createElement } from "react";
import "../App.css";

export default function Alert(prop) {
    // document.getElementsByClassName("alert-popup")[0].style.bac
  return (
    prop.alertDetails && (
      <div className="alert-popup" style={prop.bodycolor}>{prop.alertDetails.msg}</div>
    )
  );
}

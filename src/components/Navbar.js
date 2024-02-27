import React, { useState } from "react";
import PropTypes from "prop-types";
import "../App.css";
import { BrowserRouter, Link } from "react-router-dom";

export default function Navbar(prop) {
  let borderClasses = [];
  const colorActivate = (event) => {
    if (document.getElementsByClassName("put-border")[0] !== undefined) {
      // let element = document.getElementsByClassName("put-border")[0].classList;
      document
        .getElementsByClassName("put-border")[0]
        .classList.remove("put-border");
    }
    if (event.target.id === "blue") {
      let currentTheme = prop.changeToBlue();
      if (currentTheme === "blue") event.target.classList.add("put-border");
    } else if (event.target.id === "green") {
      let currentTheme = prop.changeToGreen();
      if (currentTheme === "green") event.target.classList.add("put-border");
    }
    // console.log(prop.myStyle);
  };

  return (
    // <BrowserRouter>
      <nav
        className={`navbar navbar-expand-lg bg-${prop.myStyle.navbarTheme.theme}`}
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            {prop.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {prop.aboutText}
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
          </div>
          <div className="colorPalette">
            <div id="blue" className="blue" onClick={colorActivate}></div>
            <div id="green" className="green" onClick={colorActivate}></div>
          </div>
          <div className="form-check form-switch mx-2">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              // style={{accentColor:"blue"}}
              onClick={prop.changeToDark}
            />
            <label
              className="form-check-label text-light mr-5"
              htmlFor="flexSwitchCheckDefault"
            >
              {prop.setdarktext}
            </label>
          </div>
        </div>
      </nav>
    // </BrowserRouter>
    
  );
}

Navbar.propType = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};
// Navbar.defaultProps = {
//     title:"Set Title Here",
//     aboutText:"About Text Here"
// }

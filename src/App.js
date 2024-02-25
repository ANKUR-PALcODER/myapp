import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextBar from "./components/TextBar";
import Alert from "./components/Alert";
import Error404 from "./components/Error404";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  let [currentTheme, setCurrentTheme] = useState("primary");
  let [darkMode, setDarkMode] = useState("primary");
  let [darkText, setDarkText] = useState("Dark Mode");

  // NORMAL THEME
  let normalTheme = {
    navbarTheme: {
      theme: "primary",
    },
    bodyTheme: {
      backgroundColor: "white",
      color: "black",
    },
    bodyInputTheme: {
      backgroundColor: "white",
      color: "black",
    },
  };

  // DARK THEME
  let darkTheme = {
    navbarTheme: {
      theme: "dark",
    },
    bodyTheme: {
      backgroundColor: "rgb(45 49 53)",
      color: "white",
      borderColor: "rgb(45 49 53)",
    },
    bodyInputTheme: {
      backgroundColor: "grey",
      color: "white",
    },
  };
  let changeToDark = () => {
    if (currentTheme !== "dark") {
      setDarkText("Light Mode");
      setCurrentTheme("dark");
      setMyStyle(darkTheme);
      setAlertStyle({
        backgroundColor: "grey",
        color: "white",
      });
      setInterval(() => {
        document.title = "TextUtils - Home - Dark Mode";
      }, 1500);
    } else {
      setDarkText("Dark Mode");
      setMyStyle(normalTheme);
      setCurrentTheme("primary");
      setAlertStyle({
        backgroundColor: "rgb(66, 159, 66)",
        color: "black",
      });
      setInterval(() => {
        document.title = "TextUtils - Home - Light Mode";
      }, 1500);
    }
  };

  // GREEN THEME
  let [greenTheme, setGreenTheme] = useState({
    navbarTheme: {
      theme: "success",
      backgroundColor: "rgb(24,128,56)",
      color: "black",
    },
    bodyTheme: {
      backgroundColor: "#68c163",
      color: "black",
    },
    bodyInputTheme: {
      backgroundColor: "#89df76",
      color: "black",
    },
  });
  const changeToGreen = () => {
    if (currentTheme !== "green") {
      setMyStyle(greenTheme);
      setCurrentTheme("green");
      return "green";
    } else {
      setMyStyle(normalTheme);
      setCurrentTheme("primary");
      return "primary";
    }
  };

  // BLUE THEME
  let [blueTheme, setBlueTheme] = useState({
    navbarTheme: {
      theme: "info",
      backgroundColor: "rgb(14 15 132)",
      color: "white",
    },
    bodyTheme: {
      backgroundColor: "#545cae",
      color: "white",
    },
    bodyInputTheme: {
      backgroundColor: "#4eccf9",
      color: "white",
    },
  });
  const changeToBlue = () => {
    if (currentTheme !== "blue") {
      setMyStyle(blueTheme);
      setCurrentTheme("blue");
      return "blue";
    } else {
      setMyStyle(normalTheme);
      setCurrentTheme("primary");
      return "primary";
    }
  };

  // SETTING THE OVERALL THEME
  let [myStyle, setMyStyle] = useState(normalTheme);

  // ALERT SETTING
  let [alert, setAlert] = useState(null);
  let [alertStyle, setAlertStyle] = useState({
    backgroundColor: "rgb(66, 159, 66)",
    color: "black",
  });
  let showAlert = (message, type) => {
    // if (alert === null) {
    setAlert({
      msg: message,
      type: type,
    });
    // } else {
    // setAlert(null);
    // }
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  // CHANGING THE THEME TO DARK
  let changeColor = () => {
    if (darkMode === "primary") {
      setDarkMode("dark");
      setDarkText("Light Mode");
      setMyStyle({
        backgroundColor: "rgb(45 49 53)",
        color: "white",
        borderColor: "rgb(45 49 53)",
      });
      setAlertStyle({
        backgroundColor: "grey",
        color: "white",
      });
    } else {
      setDarkMode("primary");
      setDarkText("Dark Mode");
      setMyStyle({
        backgroundColor: "white",
        color: "black",
        borderColor: "white",
      });
      setAlertStyle({
        backgroundColor: "rgb(66, 159, 66)",
        color: "black",
      });
    }
  };

  return (
    <>
      <BrowserRouter basename="/myapp">
        <Navbar
          title="TextUtils"
          aboutText="About TextUtils"
          setdarktext={darkText}
          myStyle={myStyle}
          changeToDark={changeToDark}
          changeToBlue={changeToBlue}
          changeToGreen={changeToGreen}
        />
        <Alert
          setdarkmode={darkMode}
          bodycolor={alertStyle}
          alertDetails={alert}
        />
        <Routes>
          <Route
            strict
            path="/"
            element={
              <div className="outer-body" style={myStyle.bodyTheme}>
                <div className="container">
                  <TextBar
                    heading="Enter Your Text Here"
                    setdarkmode={darkMode}
                    myStyle={myStyle}
                    showAlert={showAlert}
                  />
                </div>
              </div>
            }
          />
          <Route strict path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
      {/* <Alert
        setdarkmode={darkMode}
        bodycolor={alertStyle}
        alertDetails={alert}
      />
      <div className="outer-body" style={myStyle.bodyTheme}>
        <div className="container">
          <TextBar
            heading="Enter Your Text Here"
            setdarkmode={darkMode}
            myStyle={myStyle}
            showAlert={showAlert}
          />
        </div>
      </div> */}
      {/* <About /> */}
    </>
  );
}

export default App;

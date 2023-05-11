import React, { useState } from "react";
import Accordion from "./Accordion";
import NavBar from "./NavBar";
import TextArea from "./TextArea";
import Alert from "./Alert";
// import About from "./About";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function Main() {
  const [mode, setMode] = useState("light");
  const [btn, setBtn] = useState("Enable dark mode");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(()=>{
     setAlert(null)
    },2000);
  };

  let handleToggle = () => {
    if (mode === "light") {
      setMode("dark");
      setBtn("Disable dark mode");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled", "danger");
    } else {
      setMode("light");
      setBtn("Enable dark mode");
      document.body.style.backgroundColor = "white";
      showAlert("Dark mode has been disabled", "success");
    }
  };
  return (
    <div>
      {/* <Router> */}
      <NavBar
        title="Butterful clothing"
        mode={mode}
        handleToggle={handleToggle}
        btn={btn}
      />

        <Alert alert={alert} />

<div className="container my-3">
      {/* <Routes>   
          <Route exact path="/about" element={<About mode={mode}/>} />
          <Route exact path="/" element={<TextArea heading="Feedback" mode={mode} showAlert={showAlert}/>} />
         
      </Routes> */}
      <TextArea heading="Feedback" mode={mode} showAlert={showAlert}/>
      </div>
      <div className="container my-3">
        <Accordion mode={mode} />
      </div>
    {/* </Router> */}
    </div>
  );
}

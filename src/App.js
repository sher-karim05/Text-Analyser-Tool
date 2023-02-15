import React, { useState, } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import Alert from "./components/Alert";
 function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      // document.body.style.color="white"
      showAlert("Dark mode enabled!", "success");
      document.title = "TextUtils- Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "rgb(193 125 77)";
      // document.body.style.color='black'
      showAlert("Light mode enabled!", "success");
      document.title = "TextUtils- Light Mode";
    }
  };
  return (
    <>
      <Navbar
          title="Text Analyser"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container">
          {/* <Routes>
            <Route path="/about" element={<About/>}/> */}
            <TextForm path="/" element={<TextForm heading="Enter Text To Analyse✍🔠"mode={mode} showAlert={showAlert}/>
             }/>
        </div>
    </>
  );
}

export default App;

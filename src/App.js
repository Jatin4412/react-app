import "./App.css";
import { useState, useRef } from "react";
import Navbar from "./components/Navbar";
import TextBlock from "./components/TextBlock";
import Alert from "./components/Alert";
import About from "./components/About";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const changeMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  const [alert, setAlert] = useState(null);
  const alertTimeout = useRef(null);

  const showAlert = (message, type) => {
    clearTimeout(alertTimeout.current);

    setAlert({
      message: message,
      type: type,
    });

    alertTimeout.current = setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <>
      <HashRouter>
        <Navbar title="Text Customizer" mode={mode} changeMode={changeMode} />
        <Alert alert={alert} />

        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route
            path="/home"
            element={
              <div className="container">
                <TextBlock
                  heading="Enter your text"
                  mode={mode}
                  showAlert={showAlert}
                />
              </div>
            }
          />
          <Route path="/about" element={<About mode={mode} />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;

import { useState } from "react";

export default function TextBlock({ heading = "Enter text", mode, showAlert }) {
  const handleCapitalizeClick = () => {
    setText(text.toUpperCase());
    showAlert("Text has been converted to uppercase.", "success");
  };

  const handleLowerCaseClick = () => {
    setText(text.toLowerCase());
    showAlert("Text has been converted to lowercase.", "success");
  };

  const [text, setText] = useState("");

  const alterMode = mode === "light" ? "dark" : "light";

  return (
    <>
      <div className={`container text-${alterMode}`}>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">
            <h1 className="mt-3">{heading}</h1>
          </label>
          <textarea
            className={`form-control bg-${mode} text-${alterMode}`}
            value={text}
            onChange={(e) => setText(e.target.value)}
            id="myBox"
            rows="8"
          ></textarea>
          <button
            className={`btn btn-${mode} mt-3 m-1`}
            onClick={handleCapitalizeClick}
          >
            UpperCase
          </button>
          <button
            className={`btn btn-${mode} mt-3 m-1`}
            onClick={handleLowerCaseClick}
          >
            LowerCase
          </button>
        </div>
      </div>
      <div className={`container text-${alterMode}`}>
        <h1>Text Summary</h1>
        <ul>
          <li>Characters : {text.length}</li>
          <li>
            Words : {text.split(" ").filter((item) => item !== "").length}
          </li>
        </ul>
      </div>
    </>
  );
}

import ColorBox from "./ColorBox";

import "./App.css";
import { useState } from "react";
import ResetButton from "./ResetButton";
import ErrorMessage from "./ErrorMessage";

const RAINBOW = ["red", "orange", "yellow", "green", "blue", "navy", "purple"];

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState("");

  const handleErrorMessage = (e) => {
    const newColor = e.target.value;

    setColor(newColor);

    console.log(RAINBOW.includes(newColor.toLowerCase()));

    if (RAINBOW.includes(newColor.toLowerCase()) || newColor === "") {
      setError("");
    } else {
      setError("무지개 색이 아닌데요!!??");
    }
  };

  const handleReset = () => {
    setColor("");
    setError("");
  };

  return (
    <div className="App">
      <h1>무지개색 상자</h1>
      <div>
        <input value={color} onChange={handleErrorMessage} />
      </div>
      <ColorBox color={color} />
      <ResetButton onReset={handleReset} />
      <ErrorMessage message={error} />
    </div>
  );
}

export default App;

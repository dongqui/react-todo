import ColorBox from "./ColorBox";

import "./App.css";
import { useState } from "react";
import ResetButton from "./ResetButton";
import ErrorMessage from "./ErrorMessage";

const RAINBOW = ["red", "orange", "yellow", "green", "blue", "navy", "purple"];

function App() {
  const [color, setColor] = useState("");

  const handleReset = () => {
    setColor("");
  };

  return (
    <div className="App">
      <h1>무지개색 상자</h1>
      <div>
        <input
          value={color}
          onChange={(e) => {
            setColor(e.target.value);
          }}
        />
      </div>
      <ColorBox color={color} />
      <ResetButton onReset={handleReset} />
      {RAINBOW.includes(color) ? null : <ErrorMessage />}
    </div>
  );
}

export default App;

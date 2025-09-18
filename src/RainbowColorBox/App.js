import ColorBox from "./ColorBox";
import { useState } from "react";

import "./App.css";
import ResetButton from "./ResetButton";

function App() {
  const [inputColor, setInputColor] = useState("");
  const reset = () => {
    setInputColor("");
  };
  console.log(inputColor);
  return (
    <div className="App">
      <h1>무지개색 상자</h1>
      <div>
        <input
          onChange={(e) => {
            const value = e.target.value;
            setInputColor(value);
          }}
        />
      </div>
      <ColorBox color={inputColor} />
      <ResetButton reset={reset} />
    </div>
  );
}

export default App;

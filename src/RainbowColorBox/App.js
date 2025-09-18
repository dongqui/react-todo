import ColorBox from "./ColorBox";
import { useState } from "react";

import "./App.css";
import ResetButton from "./ResetButton";
import ErrorMessage from "./ErrorMessage";

const colors = ["red", "yellow", "green", "blue"];

function App() {
  const [inputColor, setInputColor] = useState("");
  const [isError, setIsError] = useState(false);
  const reset = () => {
    setInputColor("");
  };

  return (
    <div className="App">
      <h1>무지개색 상자</h1>
      <div>
        <input
          onChange={(e) => {
            const value = e.target.value;
            setInputColor(value);

            colors.filter((color) => {
              color !== value;
              return console.log(color);
            });
          }}
        />
      </div>
      <ColorBox color={inputColor} />
      <ResetButton reset={reset} />
      {isError && <ErrorMessage />}
    </div>
  );
}

export default App;

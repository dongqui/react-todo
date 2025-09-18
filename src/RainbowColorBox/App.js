import ColorBox from "./ColorBox";
import { useState } from "react";

import "./App.css";

function App() {
  const [inputColor, setInputColor] = useState("");
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
    </div>
  );
}

export default App;

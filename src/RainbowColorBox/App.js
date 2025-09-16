import ColorBox from "./ColorBox";
import "./App.css";
import { useState } from "react";

// 상태, input, onchange - 상태 조작, props, colorbox
function App() {
  const [color, setColor] = useState("");
  return (
    <div className="App">
      <h1>무지개색 상자</h1>
      <div>
        <input value={color} onChange={(e) => setColor(e.target.value)} />
      </div>
      <ColorBox color={color} />
    </div>
  );
}

export default App;

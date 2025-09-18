import ColorBox from "./ColorBox";
import "./App.css";
import { useState } from "react";

function App() {
  const [rainbow, setRainbow] = useState("");

  function handleRainbow(e) {
    setRainbow(value)(e.target.value);
  }
}

return (
  <div className="App">
    <h1>무지개색 상자</h1>
    <div>
      <input onChange={handleRainbow} />
    </div>
    <ColorBox color={rainbow} />
  </div>
);

export default App;

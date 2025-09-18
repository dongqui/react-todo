import ColorBox from "./ColorBox";
import "./App.css";
import { useState } from "react";
import "./ResetButton";

function App() {
  const [rainbow, setRainbow] = useState("");
  const [reset, setReset] = useState("");

  function handleRainbow(e) {
    setRainbow(e.target.value);
  }

  function handleResetButton(e) {
    setReset(e.target.value);
  }

  return (
    <div className="App">
      <h1>무지개색 상자</h1>
      <div>
        <button onClick={handleResetButton}>초기화</button>
        <input onChange={handleRainbow} />
      </div>
      <ColorBox color={rainbow} />
    </div>
  );
}
export default App;

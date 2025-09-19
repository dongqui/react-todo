import ColorBox from "./ColorBox";
import ResetButton from "./ResetButton";
import { useState } from "react";

import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");

  const onChangeInput = (e) => {
    setInputText(e.target.value);
  };

  const resetAll = () => {
    setInputText("");
  };

  return (
    <div className="App">
      <h1>무지개색 상자</h1>
      <div>
        <input type={inputText} onChange={onChangeInput} />
      </div>
      <ColorBox color={inputText} />
      <ResetButton onClick={resetAll} />
    </div>
  );
}

export default App;

import ColorBox from "./ColorBox";
import { useState } from "react";

import "./App.css";

function App() {
  const [inputText, setInputText] = useState("red");
  const [color, setColor] = useState();

  const onChangeInput = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  const onChangeColor = (e) => {
    if (String(inputText) === String(color)) {
      setColor(ColorBox);
    }
  };

  return (
    <div className="App">
      <h1>무지개색 상자</h1>
      <div>
        <input type={inputText} onChange={onChangeInput} />
      </div>
      <ColorBox color={color} onChange={onChangeColor} />
    </div>
  );
}

export default App;

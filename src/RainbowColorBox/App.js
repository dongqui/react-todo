import ColorBox from "./ColorBox";
import ResetButton from "./ResetButton";
import AlertText from "./AlertText";
import { useState } from "react";

import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");

  const rainbow = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "navy",
    "purple",
  ];

  const onChangeInput = (e) => {
    setInputText(e.target.value);

    if (e.target.value === rainbow) return;
    return <AlertText />;
  };

  const resetAll = () => {
    setInputText("");
  };

  return (
    <div className="App">
      <h1>무지개색 상자</h1>
      <div>
        <input value={inputText} onChange={onChangeInput} />
      </div>
      <ColorBox color={inputText} />
      <ResetButton onClick={resetAll} />
      <AlertText />
      {/* {!rainbow ? <AlertText /> : undefined} */}
    </div>
  );
}

export default App;

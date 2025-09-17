import ColorBox from "./ColorBox";

import "./App.css";
import { useState } from "react";

function App() {
  // 인풋 박스 입력 값 받아와서 입력하기
  const [inputValue, setInputValue] = useState('');

  const HandleInput =(e) => {
    setInputValue(e.target.value);
  }
  // 컬러박스에 bgc 에 값 전달하기


  return (
    <div className="App">
      <h1>무지개색 상자</h1>
      <div>
        <input value={inputValue} onChange={HandleInput}/>
      </div>
      <ColorBox color={inputValue}/>
    </div>
  );
}

export default App;

import ColorBox from "./ColorBox";

import "./App.css";
import { useState } from "react";
import ResetButton from "./ResetButton";

function App() {
  // 인풋 박스 입력 값 받아와서 입력하기
  const [inputValue, setInputValue] = useState('');

  const handleInput =(e) => {
    setInputValue(e.target.value);
  }

  //초기화 함수
  const handleReset =() => {
    setInputValue('');
  }

  return (
    <div className="App">
      <h1>무지개색 상자</h1>
      <div>
        <input value={inputValue} onChange={handleInput}/>
      </div>
      <ColorBox color={inputValue}/>
      <ResetButton handleReset={handleReset} />
    </div>
  );
}

export default App;

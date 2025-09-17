import ColorBox from "./ColorBox";

import "./App.css";
import { useState } from "react";
import ResetButton from "./ResetButton";
import ErrorMessage from "./ErrorMessage";

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

  //에러 메세지 : 무지개색 아닐 경우
  const handleError = ({inputValue}) => {
    //무지개색이 아닐경우 함수 작동
    if(inputValue.includes(rainbows)){
      return <ErrorMessage />
    }
  }

  //무지개색 배열로 정리
  const rainbows = ['red', 'yellow', 'orange', 'green', 'blue', 'purple']
  return (
    <div className="App">
      <h1>무지개색 상자</h1>
      <div>
        <input value={inputValue} onChange={handleInput}/>
      </div>
      <ColorBox color={inputValue}/>

      <ResetButton handleReset={handleReset} />
      <div>
        { rainbows.includes(inputValue) ? '' :  <ErrorMessage />}
      </div>
      
    </div>
  );
}

export default App;

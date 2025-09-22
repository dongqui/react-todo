import ColorBox from "./ColorBox";
import "./App.css";
import { useState } from "react";
import ResetButton from "./ResetButton";

function App() {
  const [rainbow, setRainbow] = useState("");

  function handleRainbow(e) {
    setRainbow(e.target.value);
  }

  function handleReset() {
    setRainbow("");
  }
  return (
    <div className="App">
      <h1>무지개색 상자</h1>
      <div>
        <ResetButton onReset={handleReset}>초기화</ResetButton>
        <input onChange={handleRainbow} value={rainbow} />
      </div>
      <ColorBox color={rainbow} />
    </div>
  );
}

export default App;

//1단계 . useStaet를 통해 상태(state)를 만들어서 컴포넌트 안에서 데이터가 변할 때 UI를 다시 그릴 수 있는 준비
//2단계 . 자식 컴포넌트에 props 전달
//3단계 . 입력창과 state 연결 준비
//4단계 . 추가 이벤트(리셋 버튼) 다루기

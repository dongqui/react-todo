import ColorBox from "./ColorBox";
import "./App.css";
import { useState } from "react";
import ResetButton from "./ResetButton";

function App() {
  const [rainbow, setRainbow] = useState("");
  const [error, setError] = useState("");

  const rainbowColors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "purple",
  ];

  function handleRainbow(e) {
    const inputColor = e.target.value;
    setRainbow(inputColor);

    if (inputColor === "" || rainbowColors.includes(inputColor)) {
      setError("");
    } else {
      setError("X 무지개색이 아닙니다!");
    }
  }

  function handleReset() {
    setRainbow("");
    setError("");
  }
  return (
    <div className="App">
      <h1>무지개색 상자</h1>
      <div>
        <ResetButton onReset={handleReset}>초기화</ResetButton>
        <input onChange={handleRainbow} value={rainbow} />
      </div>
      {error && <p className="error">{error}</p>}
      <ColorBox color={rainbow} />
    </div>
  );
}

export default App;

//1단계 . useStaet를 통해 상태(state)를 만들어서 컴포넌트 안에서 데이터가 변할 때 UI를 다시 그릴 수 있는 준비
//2단계 . 자식 컴포넌트에 props 전달
//3단계 . 입력창과 state 연결 준비
//4단계 . 추가 이벤트(리셋 버튼) 다루기
//5단계 . 에러메시지 표출 빨주노초파남보 무지개색이 아닌게 들어오면 에러메시지 표출.

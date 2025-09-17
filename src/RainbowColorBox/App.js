//입력칸을 state로 받아서 state가 변하면 colorBox가 변해야함.

import ColorBox from "./ColorBox";
import {useState} from "react"
import "./App.css";



function App() {
  const [input, setInput] = useState("white")

  const onChangeInput = (e) => {
    setInput(e.target.value)
  }

  return (
    <div className="App">
      <h1>무지개색 상자</h1>
      <div>
        <input onChange={onChangeInput}/>
      </div>
      <ColorBox color={input}/>
    </div>
  );
}

export default App;

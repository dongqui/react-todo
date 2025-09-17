//입력칸을 state로 받아서 state가 변하면 colorBox가 변해야함.

import ColorBox from "./ColorBox";
import ResetButton from "./ResetButton"
import {useState} from "react"
import "./App.css";



function App() {
  const [color, setcolor] = useState("")

  const onChangeColor = (e) => {
    setcolor(e.target.value)
  }
  const onClickDelete = () => {
    setcolor("")
  }

  return (
    <div className="App">
      <h1>무지개색 상자</h1>
      <div>
        <input value={color} onChange={onChangeColor}/>
      </div>
      <ColorBox color={color}/>
      <ResetButton onClick={onClickDelete}/>
    </div>
  );
}

export default App;

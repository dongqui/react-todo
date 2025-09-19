import ColorBox from "./ColorBox";
import {useState} from 'react'
import ResetButton from "./ResetButton";
import "./App.css";



function App() {

  const [inputText,setInputText] = useState('red');

  const onChangeInput = (e) => {
  setInputText(e.target.value)
}

  const resetAll = () => {
    setInputText('')
  }

  return (
    <div className="App">
      <h1>무지개색 상자</h1>
      <div>
        <input value={inputText} onChange={onChangeInput}/>
      </div>
      <ColorBox color={inputText}/>
      <ResetButton onClick={resetAll}/>
    </div>
  );
}

export default App;

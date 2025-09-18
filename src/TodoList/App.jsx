//todoinput에서 값을 받아와서 Todoitem에 노출
//app에서 상태를 만들어서 todoinput의 인풋값을 업데이트
//todoInput의 입력 버튼을 누르면 state를 todoItem 컴포넌트에 전달/노출

import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import {useState, useRef} from "react"

export default function App() {
  const [item, setItem] = useState("")
  
  // let idRef = useRef(2)

  const onChangeInput = (e) => {
    setItem(e.target.value)
  };

  return (
    <div>
      <TodoInput onChange={onChangeInput} onClick={()=>{}} item={item}/>
      <ul>
        <TodoItem />
      </ul>
    </div>
  );
}

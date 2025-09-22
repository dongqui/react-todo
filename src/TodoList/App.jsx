//todoinput에서 값을 받아와서 Todoitem에 노출
//app에서 상태를 만들어서 todoinput의 인풋값을 업데이트
//todoInput의 입력 버튼을 누르면 state를 todoItem 컴포넌트에 전달/노출
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import {useState, useEffect} from "react";

export default function App() {
  const [list, setList] = useState([]);
  // const idRef = useRef(1);

  useEffect(()=>{
    async function getData (){
      const res = await fetch('/todos');
      const todos = await res.json();

      setList(todos);
    }
    getData();
  },[])

  const onClickCreate = async (input) =>{
    const res = await fetch('/todos',{
      method:"POST",
      body:JSON.stringify({title:input})
    })
    const todo = await res.json()
    setList([
      todo,
      ...list,
    ]);
  }

  const onClickDelete = async (id) => {
    const res = await fetch(`/todos/${id}`,{
      method:"DELETE",
    })
    const todo = await res.json()

    setList(list.filter((item)=>
      item.id!==todo.id
    ))
  }

  const onClickUpdate = async (id, editedContent) => {
    const res = await fetch(`/todos/${id}`,{
      method:"PATCH",
      body:JSON.stringify({
        title:editedContent
      })
    });
    const todo = await res.json();

    setList(list.map((item)=>
      item.id===todo.id
      ?todo
      :item
    ))
  }

  return (
    <div>
      <TodoInput onClick={onClickCreate}/>
      <ul>
        {list.map((item)=><TodoItem 
          key={item.id} 
          onClickDelete={onClickDelete} 
          onClickUpdate={onClickUpdate} 
          item={item}
        />)}
      </ul>
    </div>
  );
}

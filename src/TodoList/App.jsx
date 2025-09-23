//todoinput에서 값을 받아와서 Todoitem에 노출
//app에서 상태를 만들어서 todoinput의 인풋값을 업데이트
//todoInput의 입력 버튼을 누르면 state를 todoItem 컴포넌트에 전달/노출
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import {useEffect, useReducer } from "react";

function reducer(todos, action) {
  switch (action.type) {
    case "INIT":
      return action.data;
    case "CREATE":
      return [action.data, ...todos];
    case "UPDATE": return todos.map((item) => (item.id === action.data.id ? action.data : item))
    case "DELETE": return todos.filter((item)=>(item.id!==action.data.id))
    default:
      return todos;
  }
}

export default function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  // const [list, setList] = useState([]);
  // const idRef = useRef(1);

  useEffect(() => {
    async function getData() {
      const res = await fetch("/todos");
      const todos = await res.json();

      dispatch({
        type: "INIT",
        data: todos,
      });
      // setList(todos);
    }
    getData();
  }, []);

  const onClickCreate = async (input) => {
    const res = await fetch("/todos", {
      method: "POST",
      body: JSON.stringify({ title: input }),
    });
    const todo = await res.json();
    dispatch({
      type: "CREATE",
      data: todo,
    });
    // setList([
    //   todo,
    //   ...list,
    // ]);
  };

  const onClickUpdate = async (id, editedContent) => {
    const res = await fetch(`/todos/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        title: editedContent,
      }),
    });
    const todo = await res.json();
    dispatch({
      type:"UPDATE",
      data:todo,
    })
    // setList(list.map((item) => (item.id === todo.id ? todo : item)));
  };

  const onClickDelete = async (id) => {
    const res = await fetch(`/todos/${id}`, {
      method: "DELETE",
    });
    const todo = await res.json();
    dispatch({
      type:"DELETE",
      data:todo
    })
    // setList(list.filter((item) => item.id !== todo.id));
  };

  return (
    <div>
      <TodoInput onClick={onClickCreate} />
      <ul>
        {todos.map((item) => (
          <TodoItem
            key={item.id}
            onClickDelete={onClickDelete}
            onClickUpdate={onClickUpdate}
            item={item}
          />
        ))}
      </ul>
    </div>
  );
}

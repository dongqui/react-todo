export const getTodo = async () => {
  const res = await fetch("/todos");
  const data = await res.json();
  return data;
};

export const postTodo = async (todoItem) => {
  const res = await fetch("/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todoItem),
  });
  const data = await res.json();
  return data;
};

export const deleteTodo = async (id) => {
  const res = await fetch(`/todos/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) {
    throw new Error("삭제에 실패했습니다.");
  }
  const data = await res.json();
  return data;
};

export const patchTodo = async (id, todoItem) => {
  const res = await fetch(`/todos/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: todoItem }),
  });
  if (!res.ok) {
    throw new Error("수정에 실패했습니다.");
  }
  const data = await res.json();
  return data;
};

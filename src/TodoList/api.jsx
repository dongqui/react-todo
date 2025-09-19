const BASE_URL = "/todos";

export async function getTodos() {
  const response = await fetch(BASE_URL);
  if (!response.ok) {
    throw new Error("API 연결 실패");
  }

  const body = await response.json();
  return body;
}

export async function addTodo(todoData) {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todoData),
  });

  if (!response.ok) {
    throw new Error("TODO 추가 실패");
  }

  const body = await response.json();
  return body;
}

export async function deleteTodo(id) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("TODO 삭제 실패");
  }

  const body = await response.json();
  return body;
}

export async function updateTodo(id, todoData) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todoData),
  });

  if (!response.ok) {
    throw new Error("TODO 수정 실패");
  }

  const body = await response.json();
  return body;
}

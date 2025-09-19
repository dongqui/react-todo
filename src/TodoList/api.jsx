const BASE_URL = "/todos";

export async function getTodos() {
  const response = await fetch(BASE_URL);
  if (!response.ok) {
    throw new Error("API 연결 실패");
  }

  const body = await response.json();
  return body;
}

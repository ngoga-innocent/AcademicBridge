const BASE_URL = "https://dummyjson.com";
export const fetchUser = async () => {
  const response = await fetch(`${BASE_URL}/users`);
  if (!response.ok) throw new Error("Failed to fetch data");
  return await response.json();
};
export const fetchTodos = async () => {
  const response = await fetch(`${BASE_URL}/todos`);
  if (!response.ok) throw new Error("Failed to fetch todos");
  return await response.json();
};
export const GetSingleUser = async (userId) => {
  const response = await fetch(`${BASE_URL}/users/${userId}`);
  if (!response.ok) throw new Error("Failed to fetch todos");
  return await response.json();
};
//Add nEW TODO
export const AddTodos = async (body) => {
  const response = await fetch("https://dummyjson.com/todos/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });

  if (!response.ok) throw new Error("Failed to add todo");
  return await response.json();
};
export const UpdateTodo = async ({id,body}) => {
  const response = await fetch(`https://dummyjson.com/todos/${id}`, {
    method: "PUT" /* or PATCH */,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });
  
  if (!response.ok)  throw new Error("Failed to Update Todo");
  return await response.json();
};

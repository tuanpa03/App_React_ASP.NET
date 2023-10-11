import axiosClient from "./axiosClient";

const END_POINT = {
  // cấu hình đuôi api
  TODOS: "todos",
};

export const getTodosAPI = () => {
  return axiosClient.get(`${END_POINT.TODOS}`);
};

export const deleteTodo = (id) => {
  return axiosClient.delete(`${END_POINT.TODOS}/${id}`);
};

export const addTodoAPI = (todo) => {
  return axiosClient.post(`${END_POINT.TODOS}`, todo);
};

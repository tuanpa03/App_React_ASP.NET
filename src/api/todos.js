import axiosClient from "./axiosClient";

const END_POINT = {
  // cấu hình đuôi api
  TODOS: "todos",
};

export const getTodosAPI = () => {
  return axiosClient.get(`${END_POINT.TODOS}`);
};

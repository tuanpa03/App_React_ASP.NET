import React, { useEffect, useState } from "react";
import { deleteTodo, getTodosAPI } from "../../api/todos";
import "./TodoComponent.css";

const TodoComponent = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchGetTodos();
  }, []);

  const fetchGetTodos = async () => {
    setTodos(await getTodosAPI());
  };

  const delTodo = async (id) => {
    if (window.confirm("Bạn có muốn xóa không?")) {
      await deleteTodo(id);
      window.location.reload(); //reload lai
    }
  };

  return (
    <main id="todolist">
      <h1>
        Danh sách công việc
        <span>Việc hôm nay không để ngày mai.</span>
      </h1>
      <form>
        <input type="text" name="name" id="name" />
        <input type="text" name="id" id="name" />
        <button type="button">Thêm mới công việc</button>
      </form>
      {todos.map((item) => {
        return (
          <li key={item.id} className={item.isComplete ? "done" : ""}>
            <span className="label">{item.name}</span>
            <div className="actions">
              <button className="btn-picto" type="button">
                <i className="fas fa-edit" />
              </button>
              <button
                className="btn-picto"
                type="button"
                aria-label="Delete"
                title="Delete"
                onClick={() => delTodo(item.id)}
              >
                <i className="fas fa-trash" />
              </button>
            </div>
          </li>
        );
      })}
      <p>Danh sách nhiệm vụ trống.</p>
    </main>
  );
};

export default TodoComponent;

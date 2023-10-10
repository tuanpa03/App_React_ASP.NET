import React from "react";
import "./TodoComponent.css";

const TodoComponent = () => {
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
      <li className="done">
        <span className="label">123</span>
        <div className="actions">
          <button className="btn-picto" type="button">
            <i className="fas fa-edit" />
          </button>
          <button className="btn-picto" type="button" aria-label="Delete" title="Delete">
            <i className="fas fa-trash" />
          </button>
        </div>
      </li>
      <li>
        <span className="label">123</span>
        <div className="actions">
          <button className="btn-picto" type="button">
            <i className="fas fa-user-edit" />
          </button>
          <button className="btn-picto" type="button" aria-label="Delete" title="Delete">
            <i className="fas fa-trash" />
          </button>
        </div>
      </li>
      <p>Danh sách nhiệm vụ trống.</p>
    </main>
  );
};

export default TodoComponent;

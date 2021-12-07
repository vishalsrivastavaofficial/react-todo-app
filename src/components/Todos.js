import React from "react";
import Todo from "./Todo";

export default function Todos({ todos, onDelete }) {
  return (
    <div className="container">
      <h3 className="text-center my-3">Todos List</h3>
      {todos.length === 0
        ? "No Todo to display"
        : todos.map((todo) => {
            return <Todo todo={todo} key={todo.sno} onDelete={onDelete} />;
          })}
    </div>
  );
}

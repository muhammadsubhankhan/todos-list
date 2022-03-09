import React from "react";
import TodoItem from "./TodoItem";

export default function Todos(props) {
  return (
    <div className="container" style={{minHeight : '40vh'}} >
      <h2 className="text-center my-3"> Todo List</h2>
      {!props.todos.length
        ? "No Todo to display"
        : props.todos.map((todo) => {
            return (
              <TodoItem
                key={todo.title}
                todo={todo}
                onDelete={props.onDelete}
              />
            );
          })}
    </div>
  );
}

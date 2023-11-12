import { useState } from "react";
import { TodoItem } from "./TodoItem";

export function TodoList({todos,toggleTodo,deleteTodo}) {
    
  return (
    <div className="carouselSection">
        

    </div>
    <ul className="list">
      {todos.length === 0 && "No Todos"}
      {todos.map(todo => {
        return (
          <TodoItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}

import React, { useState } from "react";
import TodoForm from "./Todo-form";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";
import EditTodoForm from "./Edit-Todo-Form";

export default function TodoWrapper() {
  const [todos, setTodos] = useState([]);

  const addTodos = (todo) => {
    const newTodos = [
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ];
    setTodos(newTodos);
  };

  const deleteTodos = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const editToggle = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
    );
    setTodos(newTodos);
  };

  const editTask = (task, id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, task: task } : todo
    );
    setTodos(newTodos);
  };

  const toggleComplete = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };
  return (
    <div className="flex flex-col justify-center items-center bg-[#1A1A40]  mt-20 p-8 px-16 rounded-md w-full">
      <h1 className="text-3xl text-white font-semibold">Get Things Done!</h1>
      <TodoForm addTodo={addTodos}></TodoForm>

      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm editTask={editTask} todo={todo} />
        ) : (
          <Todo
            todo={todo}
            editToggle={editToggle}
            deleteTodo={deleteTodos}
            toggleComplete={toggleComplete}
          />
        )
      )}
    </div>
  );
}

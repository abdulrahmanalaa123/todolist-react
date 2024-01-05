import React, { useEffect, useState } from "react";
import TodoForm from "./Todo-form";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";
import EditTodoForm from "./Edit-Todo-Form";

export default function TodoWrapper() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(savedTodos);
  }, []);

  const addTodos = (todo) => {
    const newTodos = [
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ];
    localStorage.setItem("todos", JSON.stringify(newTodos));
    setTodos(newTodos);
  };

  const deleteTodos = (id) => {
    console.log("hello" + todos);
    const newTodos = todos.filter((todo) => todo.id !== id);
    localStorage.setItem("todos", JSON.stringify(newTodos));

    setTodos(newTodos);
  };

  const editToggle = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
    );
    localStorage.setItem("todos", JSON.stringify(newTodos));

    setTodos(newTodos);
  };

  const editTask = (task, id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id
        ? { ...todo, task: task, isEditing: !todo.isEditing }
        : todo
    );
    localStorage.setItem("todos", JSON.stringify(newTodos));

    setTodos(newTodos);
  };

  const toggleComplete = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    localStorage.setItem("todos", JSON.stringify(newTodos));

    setTodos(newTodos);
  };

  return (
    <div className="flex flex-col justify-center items-center bg-[#1A1A40]  mt-20 p-8 px-16 rounded-md w-full">
      <h1 className="text-3xl text-white font-semibold">Get Things Done!</h1>
      <TodoForm addTodo={addTodos}></TodoForm>

      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm
            editTodo={editTask}
            editToggle={editToggle}
            todo={todo}
            key={todo.id}
          />
        ) : (
          <Todo
            todo={todo}
            editToggle={editToggle}
            deleteTodo={deleteTodos}
            toggleComplete={toggleComplete}
            key={todo.id}
          />
        )
      )}
    </div>
  );
}

import React, { useEffect, useState } from "react";
import TodoForm from "./Todo-form";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";
import EditTodoForm from "./Edit-Todo-Form";
import db from "../firebase.js";
import {
  collection,
  onSnapshot,
  doc,
  setDoc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
export default function TodoWrapper() {
  const [todos, setTodos] = useState([]);
  const collectionRef = collection(db, "tasks");

  useEffect(() => {
    // const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    // setTodos(savedTodos);

    const subscribe = onSnapshot(collectionRef, (querySnapshot) => {
      const tasks = [];
      querySnapshot.forEach((todo) => {
        console.log(todo.data());
        tasks.push(todo.data());
      });
      setTodos(tasks);
    });

    return () => {
      subscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addTodos = (todo) => {
    //const newTodos = [
    //  ...todos,
    const newTodo = {
      id: uuidv4(),
      task: todo,
      completed: false,
      isEditing: false,
    };
    //];
    // localStorage.setItem("todos", JSON.stringify(newTodos));
    const docref = doc(collectionRef, newTodo.id);
    setDoc(docref, newTodo);
    // setTodos(newTodos);
  };

  const deleteTodos = (todo) => {
    // const newTodos = todos.filter((todo) => todo.id !== id);
    // localStorage.setItem("todos", JSON.stringify(newTodos));
    const docref = doc(collectionRef, todo.id);
    deleteDoc(docref);
    // setTodos(newTodos);
  };

  const editToggle = (todo) => {
    // localStorage.setItem("todos", JSON.stringify(newTodos));
    const docref = doc(collectionRef, todo.id);
    updateDoc(docref, { isEditing: !todo.isEditing });

    // setTodos(newTodos);
  };

  const editTask = (task, todo) => {
    //localStorage.setItem("todos", JSON.stringify(newTodos));
    const docref = doc(collectionRef, todo.id);
    updateDoc(docref, { task: task, isEditing: !todo.isEditing });
    // setTodos(newTodos);
  };

  const toggleComplete = (todo) => {
    // localStorage.setItem("todos", JSON.stringify(newTodos));
    const docref = doc(collectionRef, todo.id);
    updateDoc(docref, { completed: !todo.completed });
    // setTodos(newTodos);
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

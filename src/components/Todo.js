import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Todo({ todo, deleteTodo, editToggle, toggleComplete }) {
  return (
    <div className="bg-[#8758ff] flex justify-between p-4 rounded-md text-white w-full mb-4">
      <p
        className={`${todo.completed ? "line-through" : "no-underline"}`}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.task}
      </p>
      <div className="text-white">
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => editToggle(todo.id)}
          className="cursor-pointer"
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => deleteTodo(todo.id)}
          className="ml-3 cursor-pointer"
        ></FontAwesomeIcon>
      </div>
    </div>
  );
}

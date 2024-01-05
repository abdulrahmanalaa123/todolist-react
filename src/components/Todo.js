import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Todo({ todo, deleteTodo, editToggle, toggleComplete }) {
  return (
    <div className="bg-[#8758ff] flex justify-between p-4 rounded-md text-white">
      <p
        onclick={() => {
          toggleComplete(todo.id);
        }}
      >
        {todo.task}
      </p>
      <div className="text-white">
        <FontAwesomeIcon
          icon={faPenToSquare}
          onclick={() => {
            editToggle(todo.id);
          }}
          className="cursor-pointer"
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          icon={faTrash}
          onclick={() => {
            deleteTodo(todo.id);
          }}
          className="ml-3 cursor-pointer"
        ></FontAwesomeIcon>
      </div>
    </div>
  );
}

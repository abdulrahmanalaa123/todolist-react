import React, { useState } from "react";
import "../index.css";

export default function EditTodoForm({ editTodo, todo }) {
  const [value, setValue] = useState("");
  //TOdo
  //handleEdit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (value) {
      editTodo(value, todo.id);
      setValue("");
    }
  };
  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className=" mt-8">
        <input
          type="text"
          placeholder="Edit Your task"
          value={value}
          className="w-[80%] h-14  border-[#8758ff] p-2 border-2 text-white bg-transparent mt-4 mb-8 placeholder:[#ffffff4d]"
          onChange={(e) => {
            setValue(e.value);
          }}
        />
        <button type="submit" className="button w-[20%] h-14">
          Edit Task
        </button>
      </form>
    </div>
  );
}

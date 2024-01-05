import React, { useState } from "react";
import "../index.css";

export default function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");
  //TOdo
  //handleEdit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (value) {
      addTodo(value);
      setValue("");
    }
  };
  //HandleSubmit
  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className=" mt-8">
        <input
          type="text"
          placeholder="What is the task?"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          className="w-[80%] h-14  border-[#8758ff] p-2 border-2 text-white bg-transparent mt-4 mb-8 placeholder:[#ffffff4d]"
        />
        <button type="submit" className="button w-[20%] h-14">
          Add Task
        </button>
      </form>
    </div>
  );
}

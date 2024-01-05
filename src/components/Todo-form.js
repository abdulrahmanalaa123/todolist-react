import React from "react";
import "../index.css";
import Todo from "./Todo";

export default function TodoForm() {
  return (
    <div className="w-full">
      <form className=" mt-8">
        <input
          type="text"
          placeholder="What is the task?"
          className="w-[80%] h-14  border-[#8758ff] p-2 border-2 text-white bg-transparent mt-4 mb-8 placeholder:[#ffffff4d]"
        />
        <button type="submit" className="button w-[20%] h-14">
          Add Task
        </button>
      </form>
      <Todo></Todo>
    </div>
  );
}
